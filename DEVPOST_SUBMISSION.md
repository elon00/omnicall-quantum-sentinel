# Devpost Submission Content: OmniCall Quantum Sentinel

> **Hackathon**: CALL-E: Your Code Is Calling  
> **Deadline**: September 14, 2026, 11:45 PM SGT  
> **Live Web Application**: [https://elon00.github.io/omnicall-quantum-sentinel/](https://elon00.github.io/omnicall-quantum-sentinel/)  
> **GitHub Repository**: [https://github.com/elon00/omnicall-quantum-sentinel](https://github.com/elon00/omnicall-quantum-sentinel)  
> **awesome-phone-call-agents Skill Path**: [`skills/quantum-emergency-sentinel/`](https://github.com/elon00/omnicall-quantum-sentinel/tree/master/skills/quantum-emergency-sentinel)

---

## 📌 Project Title
**OmniCall Quantum Sentinel**

## 🏷️ Tagline (Max 200 characters)
Autonomous voice-agent incident responder powered by CALL-E. Dials on-call CISOs during quantum Shor factoring threats and authorizes instant NIST FIPS 204 ML-DSA-65 migration over the phone.

---

## 📖 Inspiration
As quantum computing rapidly advances, classical asymmetric cryptography (RSA, ECDSA, Ed25519) securing blockchains, multi-sig treasuries, and national infrastructure faces unprecedented danger from Shor's order-finding algorithms. 

When an intrusion detection system detects an active factoring anomaly, every second counts. Traditional alert channels—Slack notifications, emails, or SMS—are notoriously slow, easily ignored during overnight hours, or vulnerable to spoofing. Furthermore, fully automated key revocations without human oversight can trigger catastrophic false-alarm service outages.

We asked: **What if the security system could pick up the phone, call the designated security engineer via AI voice, verbally brief them on the anomaly in real time, obtain secure spoken pass-phrase authorization, and immediately execute a zero-mock post-quantum key migration?** 

That vision inspired **OmniCall Quantum Sentinel**, built on the **CALL-E** voice automation platform.

---

## ⚡ What it Does
1. **Autonomous Emergency Phone Dispatch**: When a quantum intrusion monitor detects active modular period-finding (Shor attack) or lattice reduction probes on a treasury validator, Sentinel invokes CALL-E to autonomously dial the on-call Security Engineer / CISO.
2. **Interactive Real-Time Voice Triage**: Using CALL-E's goal-driven conversation capabilities, Sentinel briefs the engineer on the target node and threat level, asking for verbal confirmation to initiate post-quantum fail-closed defenses.
3. **Spoken Pass-phrase Authentication**: The engineer must speak their assigned emergency pass-phrase (e.g., `OMEGA-77-CONFIRM`). CALL-E verifies the spoken response against expected cryptographic tokens.
4. **Voice-to-Action Post-Quantum Execution**: Upon verified verbal approval, CALL-E returns a structured verdict. Sentinel instantly generates fresh **NIST FIPS 204 (ML-DSA-65)** lattice keypairs, encapsulates state using **NIST FIPS 203 (ML-KEM-768)**, and issues a cryptographically signed incident certificate featuring a genuine 3,309-byte lattice signature.
5. **Community-Ready OpenAgentSkill**: We packaged this entire workflow into a portable skill ready to be PR'd directly into `CALLE-AI/awesome-phone-call-agents`.

---

## 🛠️ How We Built It
- **Voice Agent Infrastructure**: Built on the **CALL-E Platform** using goal-driven task schemas and real-time speech verification.
- **Post-Quantum Cryptography Engine**: Built using `@noble/post-quantum`, implementing real **NIST FIPS 203 (ML-KEM-768)** and **NIST FIPS 204 (ML-DSA-65)** lattice algorithms with zero simulation mocks.
- **Frontend & Visualizer**: Developed in React 19, TypeScript, and Tailwind CSS, featuring an interactive audio console with speech synthesis (`window.speechSynthesis`), live voice waveforms, and real-time dual-speaker transcripts.
- **Testing & Verification**: Built a rigorous automated test suite including CALL-E schema validation, voice call progression testing, Wycheproof negative bit-flip tests, and 23 standalone cryptographic assertions.
- **Deployment**: Configured GitHub Actions CI/CD pipelines deploying directly to GitHub Pages with 100% green build checks.

---

## 🧗 Challenges We Ran Into
- **Fail-Closed Voice Verification**: Ensuring that verbal pass-phrases cannot be ambiguously confirmed by background noise or partial speech. We designed strict matching invariants and fail-closed state transitions.
- **Lattice Signature Wire Formatting**: Integrating full 3,309-byte ML-DSA-65 digital signatures and 1,088-byte ML-KEM-768 ciphertexts into real-time web browsers without performance bottlenecks.
- **Offline / Judge Testing Experience**: Ensuring hackathon evaluators without active cellular phone minutes can still test and hear the complete, interactive voice dialogue and audio waveforms directly in their browser.

---

## 🏆 Accomplishments That We're Proud Of
- **100% Zero-Mock Cryptography**: Genuine NIST FIPS 204 ML-DSA-65 lattice signatures generated and verified in-browser and terminal.
- **End-to-End Voice-to-Action Pipeline**: Bridging high-level spoken human decisions with low-level post-quantum cryptographic transitions.
- **Comprehensive Verification**: 8-tier NIST test suite, 3 CALL-E integration tests, and 23 cryptographic assertions all passing with zero warnings.
- **Reusable OpenAgentSkill**: Delivering a clean, modular skill ready for inclusion in the `awesome-phone-call-agents` ecosystem.

---

## 📚 What We Learned
- How goal-driven voice agents fundamentally outperform scripted IVR trees in high-stress, high-consequence incident response.
- The power of combining conversational AI with post-quantum lattice mathematics to protect real-world Web3 infrastructure.

---

## 🔮 What's Next for OmniCall Quantum Sentinel
- Integration with live Solana mainnet validator consensus alerts to automatically trigger calls when duplicate voting or key leakage is suspected.
- Multi-party voice quorum: requiring two distinct engineers to confirm via separate phone calls before rotating root validator keys.

---

## 🏷️ Built With
`call-e`, `voice-ai`, `post-quantum-cryptography`, `nist-fips-204`, `ml-dsa-65`, `ml-kem-768`, `react`, `typescript`, `solana`, `openagentskill`

---

## 🔗 Pull Request Instructions for `CALLE-AI/awesome-phone-call-agents`
To submit the PR to the official repository:
1. Fork `https://github.com/CALLE-AI/awesome-phone-call-agents`.
2. Add the skill folder `skills/quantum-emergency-sentinel/` into the `skills/` directory of the fork.
3. Add a line to the `README.md` table under **Security & Incident Response**:
   ```markdown
   | [Quantum Emergency Sentinel](skills/quantum-emergency-sentinel) | Emergency phone triage and NIST FIPS 204 PQC key rotation for quantum threats | [@elon00](https://github.com/elon00) |
   ```
4. Open the Pull Request and paste the PR URL into your Devpost submission form.
