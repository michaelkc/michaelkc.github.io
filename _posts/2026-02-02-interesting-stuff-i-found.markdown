---
layout: post
title:  "Interesting stuff I found - February 2026"
date:   2026-02-02 16:00:00 +0100
---
### Google Technical Writing course
I am chewing through the course. Good tips, maybe you could distill it to a technical writing agent/reviewer?

[Google Technical Writing](https://developers.google.com/tech-writing)

### Azure Verified (Bicep) Modules
When I was last deep in Bicep, sharing module definitions was difficult (GitHub submodules...), and best practice guidance was non-existant. 
It seems things got a lot better, and there is now lots of "Azure Verified Modules" (AVM) to get you going on the right path, and it is possible to consume modules via URL reference
(not sure how the supply chain attack story is though...)

Still not convinced that declarative languages are the way to go for resource definition, I think the Aspire/Azure CDK people are closer to the optimal solution.
At any rate, I am 100% convinced you need a strategy for applying your infra definition code continuously (periodically, also when nothing changes), otherwise it will bit rot and you will be afraid to apply it when it matters.

[Bicep AVM Quickstart Guide](https://azure.github.io/Azure-Verified-Modules/usage/quickstart/bicep/)

### Passkeys
Working with a passkey rollout plan, and I am digesting the tome linked below, to come up with personas and a scenario test plan. 

When they work, passkeys are wonderful and secure. 
But I think the mental model is very difficult to grasp for the average user - which can quickly translate to support needs when things start going south.

[Tour of WebAuthn](https://www.imperialviolet.org/tourofwebauthn/tourofwebauthn.html)
