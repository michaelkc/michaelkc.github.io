---
layout: post
title:  "Interesting stuff I found - August 2026"
date:   2026-08-24 23:25:00 +0200
---

### Hetzner inference - free OpenCode with Qwen3.6-35B
Hetzner now offers experimental (but free) OpenCode inference running Qwen3.6-35B. Handy for hobby projects once your free OpenCode usage runs out.

[Hetzner inference (Sliplane)](https://sliplane.io/blog/hetzner-inference)

### DeepSeek via Claude Code
DeepSeek V4 is a pretty good coder, and you can plug it into Claude. It was great back when the tokens were ultra-cheap; still worth a try.

[DeepSeek for Claude Code](https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code/)

### Picking model vs. reasoning effort
A useful heuristic: if the problem feels like it needs a genius, reach for a bigger model; if it needs a pen and lots of paper, crank up the reasoning effort; if it needs a genius sitting down with a pen and paper, turn both up to 5/5.

[Threads post](https://www.threads.com/@kunchenguid/post/DbTTe9XHFKm)

### Context bombs - stopping AI attackers in their tracks
Tracebit's research on "context bombs" - a class of attack where malicious content planted in an agent's context detonates later rather than immediately. 

[Context bombs (Tracebit Research)](https://agentic.tracebit.com/context-bombs/) | [tracebit-com/context-bombs](https://github.com/tracebit-com/context-bombs)

### meat - review only the parts that matter
Humans still need to review agent-written code in critical systems, but not for style, nil-checks, or imports - the review that matters is concepts, algorithm choices, and architecture. `meat` uses a model to reduce a diff down to exactly those parts and show you "the meat". A different take than `hunk`, which also shows up a lot in my feeds.

[meat on GitHub](https://github.com/boldsoftware/meat) | [hunk on GitHub](https://github.com/modem-dev/hunk)

### papercuts - a complaint box for coding agents
A tiny CLI that gives coding agents a complaint box: a JSONL file in the repo where they log the friction they hit (dead-end tool calls, broken links, missing helpers) before pushing through. Interesting, have not tried it though. Other people had the same idea with frog.

[papercuts on GitHub](https://github.com/treygoff24/papercuts) | [frog on GitHub](https://github.com/wevm/frog)

### Proactive agents
Boris Tane (of loggingsucks fame) wants LLM-backed agents to take over on-call. This requires a lot of plumbing (which his company is building), but fundamentally you also go from passive agents (they only work when you set a goal) to proactive, reacting on e.g. drops in P99 response times.

[Proactive agents (Polylane)](https://polylane.com/blog/proactive-agents/)

### Each AI agent gets its own GitHub identity
I need to get this set up: Give every AI agent its own GitHub identity so bot commits are attributed per-agent rather than all lumped together.

[Each AI agent gets its own GitHub identity](https://dev.to/agent_paaru/each-ai-agent-gets-its-own-github-identity-how-we-gave-every-bot-its-own-bot-commit-signature-1197)

### MAUI AI design skill
A MAUI app-design agent skill - a `SKILL.md` capturing the design guidance you would otherwise have to paste into every prompt. I have dabbled a bit in MAUI for Android app development recently.

[MAUI AI design skill](https://mallibone.com/post/maui-ai-design-skill) | [SKILL.md](https://raw.githubusercontent.com/mallibone/maui-ai-design-skill/refs/heads/main/maui-app-design/SKILL.md)

### Why human-level AI won't be enough
Adam Tornhill argues that even human-level AI will not be enough, since AI produces so fast, even small quality issues will become problematic.

[Why human-level AI won't be enough](https://adamtornhill.substack.com/p/why-human-level-ai-wont-be-enough)

### Anders Hejlsberg on 10x TypeScript and AI
Anders Hejlsberg recommends an approach I have also had success with: Instead of asking coding agents to do large-swath changes, use them to produce deterministic code, e.g. scripts, to do the change. Then application becomes deterministic. They touch shortly on the issue of replacing junior devs with agents - where will the next seniors come from then?

[Anders Hejlsberg: 10x Faster TypeScript & why AI won't replace SWEs (YouTube)](https://www.youtube.com/watch?v=cywK3XYYJ2o)

### Two new Steve Yegge essays
Agents are persons, and you need to treat them well? Not sure what to say, I had a few discussions on this one. I am still on team "it is a probabilistic next-token predictor", but I guess if you forget that and focus solely on the emergent properties of _what it does_ it might make sense to view it that way? I love Yegges [new AI comics](https://x.com/Steve_Yegge/status/2087034425301405995), inspired by the crazy happenings in wheelhouse.

[The Shape of Things to Come](https://yegge.ai/essays/the-shape-of-things-to-come/) | [Model Welfare](https://yegge.ai/essays/model-welfare/) | [Fences, not Sandboxes](https://yegge.ai/essays/fences-not-sandboxes/)

### Bridging the AI adoption gap
You think you are falling behind, because you are not running agent swarms or a software factory like wheelhouse or Gas Town. But in reality, you are probably top 1% adopter if you are actively using a coding agent daily.

[Bridging the AI adoption gap](https://x.com/addyosmani/status/2086537405763551551) | [AI Adoption is a myth](https://x.com/vasuman/status/2085806422072418632)

### You should deploy directly to prod
They are not wrong. It is like the old XP mantra: If it hurts, do it more often (to force improvement). But you _will_ need solid, dependable instrumentation, and deployment automation.

[You Should Deploy Directly to Prod](https://x.com/colemurray/status/2085442810875089107)

### Varlock Azure Key Vault plugin
Varlock's Azure Key Vault plugin - "SOPS on steroids, with schema". A declarative, schema-validated approach to managing Key Vault secrets that looks more ergonomic than the usual custom tooling.

[Varlock Azure Key Vault plugin](https://varlock.dev/plugins/azure-key-vault/)

### NuGet issue #8287 - seven years and counting
Lock files prevent publishing when `<RuntimeIdentifiers>` is set. Seven years and counting - this bit me this month.

[NuGet/Home#8287](https://github.com/NuGet/Home/issues/8287)

### mise on Windows
I mentioned mise last month; worth noting it now installs cleanly on Windows via `winget install jdx.mise`, and the dev-tools page is a good overview of what it can manage.

[mise dev tools](https://mise.jdx.dev/dev-tools/)

### inshellisense
Microsoft's terminal autocomplete for shells (bash, zsh, fish, PowerShell, and more) - IDE-style completions right in the terminal.
Unfortunately it messed up my NixOS terminal, caveat emptor.

[inshellisense on GitHub](https://github.com/microsoft/inshellisense) | [intro](https://www.opensourceprojects.dev/post/inshellisense)

### WinDirStat
WinDirStat now supports fast NTFS scanning (the trick WizTree popularized), and it is open source / free for non-commercial use. `winget install windirstat.windirstat`.

[WinDirStat](https://windirstat.net/)

### WSL Dev Drive performance
I have been working on sandboxing coding agents in WSL. 
Conclusion: Do not share a repo between Windows and WSL-Linux.
You can choose which side is going to be dog-slow (wsl.localhost / /mnt/c), and you are going to have locking conflicts, line ending conflicts ... just don't.
I think a sandbox VM is the way to go, and with NixOS you can make such a VM shareable in a team.

[WSL Dev Drive performance](https://danielcosenza.com/posts/wsl-dev-drive-performance/)

### Microsoft developer changelog
Microsoft's developer changelog - the firehose of everything shipped across their developer products. With so much churn happening, not sure if I can take this in too.

[Microsoft developer changelog](https://developer.microsoft.com/en-us/changelog)

### Lightpanda - a curl-like browser
Lightpanda is a headless browser you can use like curl, with JavaScript evaluation and markdown conversion built in. Nice for turning pages into LLM-friendly text without a full browser stack.

[lightpanda-io/browser](https://github.com/lightpanda-io/browser)

### Cache break plugin
When you do things in Copilot that breaks the token cache, that costs you. This plugin will notify you when that happens, so you can develop a feel for what not to do.

[Cache break plugin (gist)](https://gist.github.com/burkeholland/647ad0e579c06a43346ce6a373261eba)

### Not holding back the ocean
An ode to coding going away, with devs moving up the stack.

[Not holding back the ocean](https://ethanniser.dev/blog/not-holding-back-the-ocean)

### Varar - from the creator of Cucumber
From the creator of Cucumber: Varar reimagines BDD with markdown "oaths" referencing "steps" (code). You can then check if the implementation breaks an oath. I never jumped on the Cucumber train, it is too technical for the business people I work with, and too untyped for myself.

[varar.dev](https://varar.dev/)

### On building scalable control planes
Werner Vogels on how AWS evolved the EC2 control plane to scale. A good systems read on building control planes that do not fall over under load.

[On building scalable control planes](https://www.allthingsdistributed.com/2026/08/on-building-scalable-control-planes.html)

### Soulver
Soulver is a "notepad calculator" - you type calculations mixed with text and it evaluates them. Mac/iOS only, unfortunately, but interesting concept.

[Soulver](https://soulver.app/)

### How contactless tap & pay works
A good explainer on how contactless tap & pay actually works under the hood - EMV, NFC, and the cryptography that makes it safe enough to wave your card at a terminal.

[Contactless tap & pay - how it works](https://www.linkedin.com/posts/yogendar-kumar-622bb827_cybersecurity-emv-nfc-share-7488733742354800640-Fzx_/)

### TMOG - Task Manager OG
Dave Plummer (the original Windows Task Manager author) is back with TMOG - Task Manager OG - a from-scratch, deeply instrumented task manager for macOS, Windows, and Linux. Free public beta. I love the neon default look!

[TMOG](https://tmog.org/#beta)

### Thimbleweed Park 2
Ron Gilbert announced Thimbleweed Park 2 - "not really a sequel, not really a prequel", just more Thimbleweed Park, due early 2028 on PC/Mac/Linux. The original team (Mark Ferrari, Gary Winnick, David Fox, and others) is back, and there is a new dev blog to follow. I discovered Thimbleweed Park very late (post Return to Monkey Island), but it is a great game.

[Thimbleweed Park 2 announcement](https://www.grumpygamer.com/twp2_announce/) | [TWP2 dev blog](https://blog2.thimbleweedpark.com/)

### M.2 - NVMe and SATA
I was today years old when I learned that some motherboards only support NVMe M.2 cards - not SATA ones. Setting up my new Medion S06e for the home lab, the M.2 SATA stick I bought was not recognized at all.

I then choked on my morning coffee after seeing current NVMe prices - they, too, have been hit by the RAMpocalypse, with prices basically doubling year over year. Fortunately I could shuffle an NVMe drive out of an old laptop, which happily accepted the SATA replacement in its M.2 slot.

[Medion S06e product detail](https://www.medion.com/dk/service/product-detail/10025653)

### Omarchy Quattro
Besides dabbling with NixOS, I also installed Omarchy on an old laptop.While it will take some getting used to to work productively with the tiling paradigm, the UI consistency and eye candy is unparalleled in Linux, rivaling MacOS. With the passion of DHH (and 8 million USD) behind it, this is the first Linux distro that makes me consider switching my daily driver laptop...

[Omarchy Quattro](https://github.com/basecamp/omarchy/releases)