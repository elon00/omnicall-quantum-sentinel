import test from 'node:test';
import assert from 'node:assert/strict';
import { CalleVoiceSentinelClient, CalleTaskConfig } from '../src/services/calleClient.js';
import { ml_dsa65 } from '@noble/post-quantum/ml-dsa.js';
import { hexToBytes } from '../src/lib/pqcCrypto.js';

test('CALL-E TIER 1: Schema Validation (Positive & Negative)', () => {
  const validTask = {
    to: '+15550192834',
    task: 'Call on-call CISO for emergency Shor factoring alert',
  };
  const validCheck = CalleVoiceSentinelClient.validateTaskSchema(validTask);
  assert.equal(validCheck.valid, true, 'Valid task should pass validation');

  const invalidTask1 = { task: 'Missing phone' };
  const invalidCheck1 = CalleVoiceSentinelClient.validateTaskSchema(invalidTask1);
  assert.equal(invalidCheck1.valid, false);
  assert.ok(invalidCheck1.errors.length > 0);

  const invalidTask2 = null;
  const invalidCheck2 = CalleVoiceSentinelClient.validateTaskSchema(invalidTask2);
  assert.equal(invalidCheck2.valid, false);
});

test('CALL-E TIER 2: Autonomous Emergency Phone Dispatch Lifecycle', async () => {
  const client = new CalleVoiceSentinelClient();
  const config: CalleTaskConfig = {
    to: '+15550192834',
    threatType: 'SHOR_FACTORIZATION_ATTACK',
    targetNode: 'treasury-validator-01.solana',
    detectedPrimeSizeBits: 2048,
    securityEngineerName: 'Alex Rivera',
    emergencyPasscodeExpected: 'ALPHA-99-ROTATE',
  };

  const statusProgression: string[] = [];
  const result = await client.dispatchEmergencyCall(config, (update) => {
    if (!statusProgression.includes(update.status)) {
      statusProgression.push(update.status);
    }
  });

  assert.equal(result.status, 'RESOLVED');
  assert.equal(result.verdict.authorizationGranted, true);
  assert.equal(result.verdict.verbalConfirmationPhrase, 'ALPHA-99-ROTATE');
  assert.equal(result.verdict.actionAuthorized, 'ROTATE_TO_NIST_ML_DSA_65');
  assert.ok(result.transcripts.length >= 6, 'Should record complete triage dialogue');
  assert.ok(statusProgression.includes('DIALING'));
  assert.ok(statusProgression.includes('CONNECTED'));
  assert.ok(statusProgression.includes('IN_TRIAGE'));
  assert.ok(statusProgression.includes('ROTATING_KEYS'));
  assert.ok(statusProgression.includes('RESOLVED'));
});

test('CALL-E TIER 3: Voice-Triggered NIST FIPS 204 ML-DSA-65 Execution', async () => {
  const client = new CalleVoiceSentinelClient();
  const config: CalleTaskConfig = {
    to: '+15550192834',
    threatType: 'LATTICE_INTEGRITY_BREACH',
    targetNode: 'vault-signer-04',
    detectedPrimeSizeBits: 1024,
  };

  const result = await client.dispatchEmergencyCall(config);
  assert.ok(result.pqcIncidentCertificate, 'Incident certificate must be generated');
  
  const cert = result.pqcIncidentCertificate;
  assert.equal(cert.newPostQuantumAlgorithm, 'NIST FIPS 204 ML-DSA-65');
  assert.ok(cert.certificateId.startsWith('CERT-PQC-INCIDENT-'));
  
  // Verify ML-DSA-65 signature size (3,309 bytes = 6,618 hex characters)
  const sigBytes = hexToBytes(cert.mlDsaSignatureHex);
  assert.equal(sigBytes.length, 3309, 'ML-DSA-65 signature must be exactly 3,309 bytes');
});
