import fs from 'node:fs';
import crypto from 'node:crypto';

const required = [
  'docs/EXTERNAL_VERIFICATION.md',
  'docs/SECURITY_AUDIT.md',
  'docs/PRODUCTION_READINESS.md',
  'docs/PRODUCTION_CERTIFICATION_CHECKLIST.md',
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error('PRODUCTION CERTIFICATION GATE: FAIL');
  console.error(`Missing evidence files: ${missing.join(', ')}`);
  process.exit(1);
}

const evidence = required
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

const sha256 = crypto.createHash('sha256').update(evidence).digest('hex');
const blockers = [];

if (/NOT COMPLETED|NOT YET ESTABLISHED|NOT CERTIFIED/i.test(evidence)) {
  blockers.push('independent/external certification evidence is still explicitly incomplete');
}
if (!process.env.OMNICALL_EXTERNAL_EVIDENCE_ACK) {
  blockers.push('OMNICALL_EXTERNAL_EVIDENCE_ACK is not set');
}

console.log(`Evidence bundle SHA-256: ${sha256}`);
if (blockers.length) {
  console.error('PRODUCTION CERTIFICATION GATE: NOT CERTIFIED');
  for (const blocker of blockers) console.error(`- ${blocker}`);
  console.error('Repository engineering maturity may still be 10/10; production certification requires real external evidence.');
  process.exit(2);
}

console.log('PRODUCTION CERTIFICATION GATE: PASS');
console.log('External evidence acknowledgement is present; proceed with human audit/sign-off.');
