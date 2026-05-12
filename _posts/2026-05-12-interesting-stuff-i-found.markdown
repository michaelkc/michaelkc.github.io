---
layout: post
title:  "Interesting stuff I found - May 2026"
date:   2026-05-12 23:05:00 +0200
---
### Software Brain
Not everyone _want_ their workflows automated like many software developers do.

[Software Brain (Decoder / The Verge)](https://www.theverge.com/podcast/917029/software-brain-ai-backlash-databases-automation)

### The West Forgot How to Make Things
Ukraine taught us that peace does not last, so letting weapon-building skills atrophy during peace time has a cost.

Will the loss of operational knowledge in software development present similar challenges once the current generation of senior engineers retire (along with their pre-AI taste and implicit knowledge from building things manually)?

[The West Forgot How to Make Things](https://techtrenches.dev/p/the-west-forgot-how-to-make-things)

### Free models via NVIDIA Build
Copilot can run with BYO models, given they have an OpenAI-compatible endpoint. NVIDIA Build offers several larger open-weight models you can use for free.

From the models I have poked at, GLM-4.7 can code (set to retire soon though), but in practice I ended up running  GLM-4.6 (aka BigPickle), which is currently free in OpenCode (and a lot faster). Still, having a rotating buffet of hosted models to experiment with is handy.

[I’ve been running some of the biggest open-weight LLMs for free on Nvidia Cloud](https://www.xda-developers.com/ive-been-running-some-biggest-open-weight-llms-free-nvidia-cloud/) | [NVIDIA Build model catalog](https://build.nvidia.com/models?filters=nimType%3Anim_type_preview)

### Reduced RAG
Interesting perspective: Frontload metadata extraction (potentially via LLM, e.g. sentiment analysis), capture it,  query it deterministically, then feed results into the LLM for (nondeterministic but heavily grounded) synthesis.

[Reduced RAG](https://www.mostlylucid.net/blog/reduced-rag)

### Codegen as compiler
Interesting framing: instead of reviewing every line of generated code, build the surrounding apparatus so the output is constrained and verified, like we do with compilers.

I think that analogy is directionally useful, but only up to a point. Compilers are largely deterministic, or at least rules-based, whereas LLMs are not. So the "trust the process, not the artifact" idea is good, but the process probably needs to be much more defensive than the compiler metaphor suggests.

[Codegen as Compiler](https://skiplabs.io/blog/codegen_as_compiler)

### .NET agent skills
Nice to see the .NET team publishing a real skills, this is more solid than `dnx ilspycmd`. There is a dashboard, plugins, and concrete task coverage around things like MSBuild, NuGet, diagnostics and upgrades. Sometimes I worry about context pollution from too many skills though...

[dotnet/skills](https://github.com/dotnet/skills)

### Coding is dead, but it still smells
Adam Tornhill argues that manual coding is shrinking, but software complexity is not, so the need for builders may well expand rather than contract. "After more than 30 years as a programmer, I no longer code manually. Sometime in October 2025 I went 100% agentic, and I’m not planning on going back." - my journey has been similar. I worry about skill atrophy, but debugging gnarly issues deep in the code keeps me sharp (I hope!).

[Coding Is Dead, but It Still Smells](https://adamtornhill.substack.com/p/coding-is-dead-but-it-still-smells)

### Passkey sync, sharing and recovery
When I first read it, I thought they were using [secure multiparty computation](https://cs.au.dk/research/crypto-and-cybersecurity/secure-multiparty-computation) - Passkeys seem to be a great use case for that?

[Mark Russinovich on passkey sharing](https://www.linkedin.com/posts/markrussinovich_the-challenge-with-passkeys-has-always-been-share-7453152451144359936-jWlh/) | [Engineering secure passkey sync in Microsoft Password Manager](https://blogs.windows.com/msedgedev/2026/04/22/engineering-secure-passkey-sync-in-microsoft-password-manager/)

### Pretext
This is one of those projects that makes the web feel a bit magical again - somebody looked at an annoying primitive and decided to rebuild it properly. I do not do a lot of frontend work, but I remember struggling with Masonry back in the day...

[pretext](https://github.com/chenglou/pretext)

### Chatbots: unsafe at any speed
Non-deterministic systems are hard to make 100% safe, but there are degrees of wrong :-)

[Chatbots: Unsafe at Any Speed](https://www.jsnover.com/blog/2026/03/30/chatbots-unsafe-at-any-speed/)

### More agent sandboxing: Docker Sandbox / sbx
More movement in coding agent sandboxing, which is good. Andrew Lock walks through running agents inside Docker's sandbox / microVM setup so you can be a bit less terrified when enabling the more autonomous modes.

[Running AI agents safely in a microVM using Docker Sandbox](https://andrewlock.net/running-ai-agents-safely-in-a-microvm-using-docker-sandbox/)

### Aspire as runtime for coding agents
This is a genuinely interesting direction: instead of feeding agents ever more markdown context, give them a runtime for the code that can actually manage processes, ports, env vars, logs and feedback loops.

[Agentic Dev Aspirations](https://devblogs.microsoft.com/aspire/agentic-dev-aspirations/)

### Building-block economy
Mitchell Hashimoto argues that the winning move is increasingly to build reusable building blocks rather than polished monolith products. That rings true in an agentic world where composition cost keeps dropping.

[Building Block Economy](https://mitchellh.com/writing/building-block-economy)

### Cybersecurity in the age of instant software
Bruce Schneier sketching what security might look like once software becomes far more disposable and on-demand. Most people seem to agree that frontier models is a long-time benefit for the blue team, but short-term the red team [must be having](https://copy.fail/) [a field day](https://www.version2.dk/holdning/kvalitetskontrol-en-anden-dag)

[Cybersecurity in the Age of Instant Software](https://www.schneier.com/blog/archives/2026/04/cybersecurity-in-the-age-of-instant-software.html)

### Quantization
Only skimmed this one, but quantization is an important concept if you want to run large open-weight at reasonable speed on consumer hardware (that much I do know). Some people claim that even "small" models like `Qwen3.6-27B-UD-Q6` perform close to frontier-levels, and it would be interesting to try out at various levels of quantization

[Quantization](https://ngrok.com/blog/quantization)
