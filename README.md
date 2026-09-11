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
