# OmniCall Quantum Sentinel — Production Certification Checklist

This checklist separates **repository-proven engineering evidence** from claims that require independent or real-world evidence.

## A. Engineering evidence — repository-verifiable

- [x] 7-layer architecture is represented in the repository.
- [x] 12 URS invariant gates execute through `npm run reality:all`.
- [x] ML-DSA-65 and ML-KEM-768 wire-size and negative-path tests exist.
- [x] Shor period/GCD mathematics is tested deterministically.
- [x] Triage, OTP and monotonic anti-replay invariants are tested.
- [x] Solana attestation serialization is tested.
- [x] Evidence provenance is SHA-256 sealed.
- [x] CI runs lint/build/PQC/CALL-E/crypto/URS checks.

## B. Real external integration — must be demonstrated, not simulated

- [ ] CALL-E production credentials are configured through a secret manager.
- [ ] A controlled test call is successfully created through the real provider.
- [ ] Provider webhook reaches the deployed application and signature validation succeeds.
- [ ] Provider retry, timeout and failure behavior is exercised.
- [ ] Solana Devnet transaction is submitted by the deployed relayer and its signature is independently verifiable on-chain.
- [ ] Production deployment URL and exact commit SHA are recorded.
- [ ] Logs/metrics/alerts are demonstrated under a controlled incident drill.

## C. Independent assurance

- [ ] Independent cryptographic/security review completed.
- [ ] Findings are recorded with severity, remediation and retest evidence.
- [ ] Dependency/supply-chain review completed.
- [ ] Deployment and infrastructure review completed.
- [ ] Applicable legal/compliance review completed by qualified professionals.

## D. Market readiness

- [ ] Real-user acceptance testing completed.
- [ ] Reliability data collected from real operation.
- [ ] Rollback/backup recovery drill completed.
- [ ] Operational ownership and incident-response runbook signed off.

## Certification rule

The project may claim **10/10 repository engineering maturity** when all automated engineering checks pass. It must **not** claim independent production certification or market readiness until sections B–D have evidence.

The certification record must include:

- exact Git commit SHA
- test environment and versions
- commands executed
- external transaction/request identifiers where applicable
- audit report reference
- remediation/retest status
- accountable human sign-off
