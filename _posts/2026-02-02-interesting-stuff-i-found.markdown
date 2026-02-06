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

### Azure Key Vault Emulator
Microsoft now supplies an Azure Service Bus emulator, but still no Key Vault emulator. This guy did the hard work, and that will come in handy with local-dev Aspire 
and not least using it in a TestContainer and the [real-port hosting option for WebApplicationFactory in .NET 10](https://www.youtube.com/watch?v=nHUwqsRtPCU).

[Azure KeyVault Emulator](https://github.com/james-gould/azure-keyvault-emulator?tab=readme-ov-file#running-the-emulator-with-net-aspire)

### Evaluating LLM coding agent innovations
Pete Hodgson argues that the real issues in LLM coding is context management and bad design taste. He uses that to evaluate which of the flavor-of-the-month techniques (e.g. Ralph) and innovations to track closely

[Assessing the Latest AI Coding Hotness](https://blog.thepete.net/blog/2026/01/29/assessing-the-latest-ai-coding-hotness/)

### AGENTS.md docs index vs skills 
Picking up on the above, context engineering is obviously super important. Especially when it comes to new versions of frameworks, on which the LLM is not properly trained.
Vercel faced that issue with a new version of `next.js`, and ran experiments with Claude to see if skills were the right way to inject the appropriate context. 
It turns out coding agents do not call skills reliably, so a compressed index of the `next.js` markdown docs in AGENTS.md worked better.

[AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)

### Writing a good AGENTS.md
Also in that area, this article considers what to put in `AGENTS.md`, and reminds that at least Claude (and presumably also Copilot, OpenCode etc.) will often ignore it if it determines it is not relevant.

I really try to grok the principles people are uncovering, and am experimenting a lot.

[Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)

### Oh-my-posh visual configurator
Nice, vibe-coded app for building out your terminal. I will give it a shot if I tire of the default Aliens theme, which I recently started applying to all my machines with the [Oh-my-posh DSC provider](https://ohmyposh.dev/docs/dsc).
(my basic setup of Aliens can be DSC-applied with [this file](https://gist.github.com/michaelkc/3b784329c0732e28f1cbc72d4cce27bf))

[Introducing Oh My Posh Visual Configurator](https://montemagno.com/introducing-oh-my-posh-visual-configurator-finally-a-drag-and-drop-terminal-theme-builder/)

### Context switching with AI agents
Nice treatise on how to handle the excessive context switching that arise from constantly waiting on (multiple) agent workstreams. 
The middle ground between  "too slow to stare and wait, too fast to do meaningful work in the meantime" is a bad place, always has been
(for builds, deploys, reviews etc. etc.)

[The biggest obstacle for engineer productivity in 2026](https://strategizeyourcareer.com/p/this-ai-problem-is-the-biggest-risk-for-software-engineers-in-2026)
