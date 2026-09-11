import React, { useState, useEffect, useRef } from 'react';
import {
  PhoneCall,
  PhoneOff,
  ShieldAlert,
  ShieldCheck,
  Key,
  Radio,
  Volume2,
  VolumeX,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Download,
  Terminal,
  Cpu
} from 'lucide-react';
import { CalleVoiceSentinelClient, CalleTaskConfig, CalleCallResult, CalleTranscriptEntry } from '../services/calleClient';

export const VoiceSentinelConsole: React.FC = () => {
  // Form Config
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 019-2834');
  const [threatType, setThreatType] = useState<CalleTaskConfig['threatType']>('SHOR_FACTORIZATION_ATTACK');
  const [targetNode, setTargetNode] = useState('solana-treasury-node-01.mainnet');
  const [engineerName, setEngineerName] = useState('Sarah Connor');
  const [passphrase, setPassphrase] = useState('OMEGA-77-CONFIRM');
  const [primeBits, setPrimeBits] = useState(2048);

  // Runtime State
  const [callStatus, setCallStatus] = useState<CalleCallResult['status'] | 'IDLE'>('IDLE');
  const [transcripts, setTranscripts] = useState<CalleTranscriptEntry[]>([]);
  const [activeCallResult, setActiveCallResult] = useState<CalleCallResult | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [audioWaveActive, setAudioWaveActive] = useState(false);

  const transcriptsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  // Text-to-speech for realistic voice output during call
  const speakText = (text: string, isAgent: boolean) => {
    if (!audioEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = isAgent ? 1.05 : 0.95;
      utterance.pitch = isAgent ? 1.1 : 0.9;
      setAudioWaveActive(true);
      utterance.onend = () => setAudioWaveActive(false);
      utterance.onerror = () => setAudioWaveActive(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setAudioWaveActive(false);
    }
  };

  const handleStartEmergencyCall = async () => {
    setCallStatus('DIALING');
    setTranscripts([]);
    setActiveCallResult(null);

    const client = new CalleVoiceSentinelClient();
    const config: CalleTaskConfig = {
      to: phoneNumber,
      threatType,
      targetNode,
      detectedPrimeSizeBits: primeBits,
      securityEngineerName: engineerName,
      emergencyPasscodeExpected: passphrase,
    };

    try {
      const result = await client.dispatchEmergencyCall(config, (update) => {
        setCallStatus(update.status);
        if (update.transcript) {
          setTranscripts((prev) => [...prev, update.transcript!]);
          speakText(update.transcript.text, update.transcript.speaker === 'sentinel_agent');
        }
      });

      setActiveCallResult(result);
      setCallStatus('RESOLVED');
    } catch (err: any) {
      setCallStatus('FAILED_REJECTED');
    }
  };

  const handleDownloadCertificate = () => {
    if (!activeCallResult?.pqcIncidentCertificate) return;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(activeCallResult, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `INCIDENT-${activeCallResult.callId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                <Radio className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
                CALL-E Voice Agent Runtime // Zero-Mock NIST PQC
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-mono text-purple-300">
                awesome-phone-call-agents
              </span>
            </div>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <PhoneCall className="h-7 w-7 text-cyan-400" />
              OmniCall Quantum Sentinel
            </h1>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Autonomous phone-agent dispatcher powered by <strong>CALL-E</strong>. When Shor factorization or lattice compromises are detected, Sentinel dials the on-call CISO, verifies verbal authorization, and triggers live <strong>NIST FIPS 204 ML-DSA-65</strong> key rotation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                audioEnabled
                  ? 'border-cyan-500/40 bg-cyan-500/20 text-cyan-200'
                  : 'border-slate-700 bg-slate-800 text-slate-400'
              }`}
            >
              {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              {audioEnabled ? 'Voice Audio: ON' : 'Voice Audio: MUTED'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Control Panel + Live Phone Dispatch Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Call Configuration Form */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 shadow-lg">
            <h2 className="text-base font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShieldAlert className="h-4 w-4 text-red-400" />
              Emergency Dispatch Configuration
            </h2>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">On-Call Phone Number (E.164 format)</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none"
                  placeholder="+1 (555) 019-2834"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Detected Quantum Threat Scenario</label>
                <select
                  value={threatType}
                  onChange={(e) => setThreatType(e.target.value as any)}
                  disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="SHOR_FACTORIZATION_ATTACK">Shor Factorization Attack (RSA Modular Order Finding)</option>
                  <option value="ECC_DISCRETE_LOG_RISK">ECDSA Discrete Log Attack (Secp256k1 Curve Risk)</option>
                  <option value="LATTICE_INTEGRITY_BREACH">Lattice Integrity Anomaly (Basis Reduction Probe)</option>
                  <option value="ROUTINE_SECURITY_DRILL">Routine Voice Readiness & Authorization Drill</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Target Infrastructure</label>
                  <input
                    type="text"
                    value={targetNode}
                    onChange={(e) => setTargetNode(e.target.value)}
                    disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Threat Modulus</label>
                  <input
                    type="number"
                    value={primeBits}
                    onChange={(e) => setPrimeBits(Number(e.target.value))}
                    disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Security Officer / CISO</label>
                  <input
                    type="text"
                    value={engineerName}
                    onChange={(e) => setEngineerName(e.target.value)}
                    disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Required Verbal Passcode</label>
                  <input
                    type="text"
                    value={passphrase}
                    onChange={(e) => setPassphrase(e.target.value)}
                    disabled={callStatus !== 'IDLE' && callStatus !== 'RESOLVED' && callStatus !== 'FAILED_REJECTED'}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleStartEmergencyCall}
                  disabled={callStatus === 'DIALING' || callStatus === 'CONNECTED' || callStatus === 'IN_TRIAGE' || callStatus === 'ROTATING_KEYS'}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 py-3 font-semibold text-white shadow-lg hover:from-red-500 hover:to-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PhoneCall className="h-5 w-5 animate-bounce" />
                  {callStatus === 'IDLE' || callStatus === 'RESOLVED' || callStatus === 'FAILED_REJECTED'
                    ? 'DISPATCH CALL-E EMERGENCY VOICE AGENT'
                    : 'CALL-E VOICE TRIAGE IN PROGRESS...'}
                </button>
              </div>
            </div>
          </div>

          {/* Integration Specs Box */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400 space-y-2">
            <div className="flex items-center justify-between text-slate-200 font-mono text-[11px]">
              <span>CALL-E Protocol</span>
              <span className="text-emerald-400">v1.2 Goal-Driven</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 font-mono text-[11px]">
              <span>Lattice Standard</span>
              <span className="text-cyan-400">NIST FIPS 204 (ML-DSA-65)</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 font-mono text-[11px]">
              <span>Fail-Closed Wire Guard</span>
              <span className="text-amber-400">Strict Verbal Authorization</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Call Terminal & Waveform */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 flex flex-col h-[520px] shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  CALL-E Audio Line: {phoneNumber}
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {audioWaveActive && (
                  <div className="flex items-center gap-0.5 h-4">
                    <span className="w-1 bg-cyan-400 h-full animate-pulse" />
                    <span className="w-1 bg-cyan-400 h-3 animate-ping" />
                    <span className="w-1 bg-cyan-400 h-4 animate-bounce" />
                    <span className="w-1 bg-cyan-400 h-2 animate-pulse" />
                  </div>
                )}
                <span
                  className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider ${
                    callStatus === 'RESOLVED'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : callStatus === 'ROTATING_KEYS'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : callStatus === 'IN_TRIAGE'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : callStatus === 'DIALING' || callStatus === 'CONNECTED'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {callStatus}
                </span>
              </div>
            </div>

            {/* Transcript Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
              {transcripts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-2">
                  <PhoneCall className="h-10 w-10 stroke-[1.5] text-slate-700" />
                  <p>Ready to initiate emergency call. Click &ldquo;Dispatch CALL-E Emergency Voice Agent&rdquo; to begin.</p>
                </div>
              ) : (
                transcripts.map((entry, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      entry.speaker === 'sentinel_agent'
                        ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-100 ml-4'
                        : 'bg-amber-950/20 border-amber-500/30 text-amber-100 mr-4'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                        {entry.speaker === 'sentinel_agent' ? (
                          <>
                            <Cpu className="h-3 w-3 text-cyan-400" /> OmniCall Sentinel (AI)
                          </>
                        ) : (
                          <>
                            <PhoneCall className="h-3 w-3 text-amber-400" /> {engineerName} (Engineer)
                          </>
                        )}
                      </span>
                      <span>{entry.timestamp}</span>
                    </div>
                    <p className="leading-relaxed">{entry.text}</p>
                  </div>
                ))
              )}
              <div ref={transcriptsEndRef} />
            </div>

            {/* Live Verdict Footer */}
            {activeCallResult && (
              <div className="bg-slate-900 border-t border-slate-800 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-emerald-300 font-semibold font-mono">
                    VERBAL CONFIRMATION VERIFIED // ROTATED TO NIST ML-DSA-65
                  </span>
                </div>
                <button
                  onClick={handleDownloadCertificate}
                  className="flex items-center gap-1.5 px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-mono transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Certificate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Post-Quantum Incident Certificate Panel */}
      {activeCallResult?.pqcIncidentCertificate && (
        <div className="rounded-xl border border-emerald-500/30 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                Cryptographic Evidence // Voice-Authorized Migration
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                NIST FIPS 204 ML-DSA-65 Emergency Incident Certificate
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-mono">
              3,309-Byte Lattice Signature Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-2 bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div className="text-slate-400">Certificate ID:</div>
              <div className="text-cyan-300 break-all">{activeCallResult.pqcIncidentCertificate.certificateId}</div>

              <div className="text-slate-400 pt-2">Authority Standard:</div>
              <div className="text-white">{activeCallResult.pqcIncidentCertificate.newPostQuantumAlgorithm} (Category 3 Lattice)</div>

              <div className="text-slate-400 pt-2">Authorized Pass-Phrase:</div>
              <div className="text-amber-300">&ldquo;{activeCallResult.verdict.verbalConfirmationPhrase}&rdquo;</div>
            </div>

            <div className="space-y-2 bg-slate-950 p-4 rounded-lg border border-slate-800">
              <div className="text-slate-400">ML-DSA-65 Digital Signature (Hex Preview):</div>
              <div className="text-emerald-400 break-all max-h-16 overflow-hidden">
                {activeCallResult.pqcIncidentCertificate.mlDsaSignatureHex.substring(0, 180)}... [6,618 hex characters]
              </div>

              <div className="text-slate-400 pt-2">Canonical SHA-256 Digest:</div>
              <div className="text-purple-300 break-all">{activeCallResult.pqcIncidentCertificate.sha256Digest}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
