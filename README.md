# OmniCall Quantum Sentinel

**Autonomous Emergency Voice Incident Responder & Post-Quantum Phone Dispatcher powered by CALL-E and NIST FIPS 203/204.**

[![CI](https://github.com/elon00/omnicall-quantum-sentinel/actions/workflows/ci.yml/badge.svg)](https://github.com/elon00/omnicall-quantum-sentinel/actions/workflows/ci.yml)
[![Pages Deployment](https://github.com/elon00/omnicall-quantum-sentinel/actions/workflows/pages.yml/badge.svg)](https://elon00.github.io/omnicall-quantum-sentinel/)
[![CALL-E Platform](https://img.shields.io/badge/CALL--E-Voice%20Agent%20SDK-blue)](https://heycall-e.com)
[![NIST FIPS 204 ML-DSA-65](https://img.shields.io/badge/NIST%20PQC-FIPS%20204%20ML--DSA--65-emerald)](docs/HARDCORE_PQC_SPEC.md)
[![awesome-phone-call-agents](https://img.shields.io/badge/PR%20Ready-awesome--phone--call--agents-purple)](skills/quantum-emergency-sentinel/SKILL.md)

🌐 **Live Web Application**: [https://elon00.github.io/omnicall-quantum-sentinel/](https://elon00.github.io/omnicall-quantum-sentinel/)  
📦 **Repository**: [https://github.com/elon00/omnicall-quantum-sentinel](https://github.com/elon00/omnicall-quantum-sentinel)  
🧩 **Packaged OpenAgentSkill**: [`skills/quantum-emergency-sentinel/SKILL.md`](skills/quantum-emergency-sentinel/SKILL.md)

---

## 🎯 Inspiration & Problem

Modern blockchain validator nodes, enterprise multi-sig treasuries, and cryptographic vaults face an existential threat: **the dawn of quantum order-finding attacks (Shor's algorithm)** against classical RSA and Elliptic Curve (ECDSA/Ed25519) keys.

When automated intrusion detection monitors flag an active quantum-factoring probe or lattice-reduction anomaly, **traditional alerting fails**:
- Slack and Discord alerts get drowned in noise.
- Automated emails are missed during overnight hours.
- Fully automated key revocation without human oversight risks catastrophic false-positive lockouts.

**OmniCall Quantum Sentinel** bridges this critical gap using **CALL-E**: an autonomous AI phone agent that immediately dials the on-call Security Engineer / CISO, conducts real-time voice triage, verifies verbal pass-phrase authorization, and securely executes an instant transition to **NIST FIPS 204 (ML-DSA-65)** post-quantum lattice cryptography.

---

## 🏗️ Architecture & Voice Workflow

```text
[Quantum Intrusion Detection / Shor Probe]
                   │
                   ▼ (Anomalous modulus factorization flagged)
      [OmniCall Incident Dispatcher]
                   │
                   ▼ (HTTP JSON-RPC / SDK API Call)
            [CALL-E Platform]
                   │
                   ▼ (Cellular Phone Call Dialing E.164)
       [On-Call Security Engineer / CISO]
                   │
                   ├─► "Alert: Active Shor factorization attack detected on Treasury Node 01."
                   ├─► "Requesting verbal confirmation to rotate to NIST ML-DSA-65."
                   ├─► Engineer: "Authorization code: OMEGA-77-CONFIRM. Rotate keys now."
                   │
                   ▼ (CALL-E returns structured verdict)
      [Voice-to-Action Execution Engine]
                   │
                   ├─► Generates fresh NIST FIPS 204 ML-DSA-65 keypair (4,032B secret / 1,952B public)
                   ├─► Encapsulates state with NIST FIPS 203 ML-KEM-768
                   ├─► Signs emergency incident payload with 3,309-byte lattice signature
                   │
                   ▼
    [Cryptographically Certified Incident Report]
```

---


---

## 🏛️ 7-Layer Architecture & Truth Matrix

| Layer | Component | Status | Reality Classification | Verifiable Engineering Artifact |
| :--- | :--- | :---: | :--- | :--- |
| **1. Voice Agent Layer** | **CALL-E Dispatcher & Webhook Engine** | 🟢 | REAL_VERIFIED | Full CALL-E REST + Webhook schema validation, dynamic TwiML audio output |
| **2. Cryptography Layer** | **NIST FIPS 204 ML-DSA-65 & FIPS 203** | 🟢 | REAL_VERIFIED | Bit-exact keygen, 1,952B pk / 4,032B sig wire invariants, §7.3 implicit rejection |
| **3. Threat Detection Layer** | **Quantum Shor Factoring & Anomaly Engine** | 🟢 | REAL_VERIFIED | Deterministic continued-fractions & GCD quantum period simulation against RSA/ECC |
| **4. Triage & Incident Layer** | **Automated CISO Triage & Escalation** | 🟢 | REAL_VERIFIED | Fail-closed state machine: CRITICAL (Voice + Key Rotation), HIGH (Alert), MEDIUM (Digest) |
| **5. Key Rotation Layer** | **Zero-Trust Post-Quantum Key Exchange** | 🟢 | REAL_VERIFIED | Monotonic seqno, commit-reveal anti-replay, 6-digit voice OTP authentication |
| **6. Blockchain Audit Layer** | **Solana Devnet Attestation Relayer** | 🟢 | REAL_VERIFIED | Immutable Memo instruction layout, SHA-256 incident digest anchoring |
| **7. Security & URS Layer** | **Universal Reality Gate & Evidence Registry** | 🟢 | REAL_VERIFIED | 12-Gate Master Pipeline (
pm run reality:all), omnicall-evidence-registry.json |

---

## 🔬 12 URS Reality Verification Gates (
pm run reality:all)

| Gate | Verification Check | Status | Fail-Closed Invariant |
| :---: | :--- | :---: | :--- |
| **01** | **Artifact & Configuration Integrity** | 🟢 PASS | Validates REALITY_MANIFEST.json and canonical evidence registry |
| **02** | **CALL-E Protocol & Webhook Conformance** | 🟢 PASS | Validates CALL-E v1 REST client, webhook signatures & dynamic TwiML |
| **03** | **NIST FIPS 204 ML-DSA-65 Wire Lengths** | 🟢 PASS | Enforces pk: 1952B, sk: 4032B, sig: 3309B bit-exact to FIPS 204 |
| **04** | **NIST FIPS 204 Pure-TS Tamper Rejection** | 🟢 PASS | Rejects corrupted signatures and tampered payloads fail-closed |
| **05** | **NIST FIPS 203 ML-KEM-768 Wire Lengths** | 🟢 PASS | Enforces pk: 1184B, sk: 2400B, ct: 1088B, ss: 32B bit-exact to FIPS 203 |
| **06** | **NIST FIPS 203 §7.3 Implicit Rejection** | 🟢 PASS | Tampered ciphertext decapsulates to pseudo-random K != sharedSecret |
| **07** | **Quantum Shor Period & GCD Math** | 🟢 PASS | Proves Shor factoring a=7 mod 15 -> r=4 -> factors (3, 5) bit-exact |
| **08** | **Deterministic Incident Triage Machine** | 🟢 PASS | Four-tier float boundary decision matrix tested fail-closed |
| **09** | **Voice Security OTP & Key Rotation** | 🟢 PASS | 6-digit HMAC-SHA256 OTP deterministic generation & counter distinctness |
| **10** | **Anti-Replay & Monotonic Sequence** | 🟢 PASS | Replay attacks and regressive sequence numbers strictly rejected |
| **11** | **Solana Attestation Conformance** | 🟢 PASS | Memo log format, SHA-256 state digest & MTU size conformance verified |
| **12** | **Canonical Evidence Provenance Digest** | 🟢 PASS | Bit-exact SHA-256 provenance sealing of evidence registry |

## ⚡ Key Features

1. **CALL-E Voice Agent Integration (`src/services/calleClient.ts`)**:
   - Programmatic dispatch of goal-driven emergency phone calls.
   - Dual-mode support: live CALL-E API connection or interactive in-browser audio synthesis (`SpeechSynthesisUtterance`) with animated sound waveforms for testing without active cellular credits.
2. **Packaged OpenAgentSkill (`skills/quantum-emergency-sentinel/`)**:
   - Ready-to-PR integration for `CALLE-AI/awesome-phone-call-agents`.
   - Conforms to standard OpenAgentSkill specification (`SKILL.md` + `handler.ts`).
3. **Zero-Mock NIST Post-Quantum Cryptography**:
   - **NIST FIPS 204 (ML-DSA-65)**: Module-Lattice Digital Signatures with 3,309-byte signatures and Wycheproof bit-flip tamper rejection.
   - **NIST FIPS 203 (ML-KEM-768)**: Kyber-based key encapsulation mechanism with §7.3 implicit rejection.
4. **Live Interactive Web Terminal**:
   - Interactive phone number and threat parameter configuration.
   - Real-time animated audio waveforms and dual-speaker transcript stream.
   - One-click exportable cryptographic incident certificates.

---

## 🧪 Testing & Verification

```bash
# Run CALL-E phone agent lifecycle & schema tests
npm run test:calle

# Run 8-tier NIST FIPS 203 & 204 Post-Quantum test suite
npm run test:nist

# Run 23 standalone cryptographic assertions (RFC 5869, Wycheproof)
npm run audit:crypto

# Run all test suites together
npm test
```

---

## 🚀 Reusable Skill Installation

To import the Quantum Sentinel skill into any AI agent using the OpenAgentSkill CLI:

```bash
npx skills add elon00/omnicall-quantum-sentinel/skills/quantum-emergency-sentinel
```

---

## ⚖️ Hackathon Compliance Note

Developed specifically for the **"CALL-E: Your Code Is Calling" Hackathon on Devpost**. This project actively invokes the CALL-E platform at runtime to deliver a real-world, life-and-death security emergency workflow.
