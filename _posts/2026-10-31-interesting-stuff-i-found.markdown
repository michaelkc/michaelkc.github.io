---
layout: post
title:  "Interesting stuff I found - October 2026"
date:   2026-10-31 23:00:00 +0100
---

### Visual explainer
Looks nice. Might complement Matt Pocock's Teach skill.

[Visual Explainer](https://github.com/nicobailon/visual-explainer) | [Teach skill](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach)

### Poteto mode
Poteto is making her rounds with the "absurd number of PRs per time unit" talk. Maybe there is gold here? I am getting frustrated by coding agent output that, despite my best intentions, still produces functional but overly complex code.

[Poteto mode skill](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/SKILL.md)

### PicoClaw
Quite an odd model: no config file, you fork the repo to specialize it, with agents. The core is tiny, and the rest runs in constrained containers.
I also looked a bit into OpenClaw (soo heavy, strained my poor VM) and Hermes. I can't say that they beat Claude on the phone for my use cases.

[PicoClaw](https://picoclaw.io/)

### Where did the year go?
Research suggests that people who feel time slipping away faster every year may have stopped creating what neuroscientists call temporal landmarks: small disruptions that help us remember time passing.

[Why time seems to speed up as we age](https://spacedaily.com/t-research-suggests-that-people-who-feel-time-slipping-away-faster-every-year-arent-losing-their-minds-theyve-just-stopped-creating-what-neuroscientists-call-temporal-landmarks-the-small-disruptions/)

### Pico.css is dead
Author stopped development, says agents can do it. He is probably right.  Working with Claude Design at work, I have been impressed at its ability to create UI. I am not a frontender, so I am not sure how good the resulting code is though.

[Pico.css](https://picocss.com/)

### WinDbg wrapped for agents
Not a need I have hit recently, but maybe I will. Hardcore WinDbg was one of the places where I drew the line of things I would not dig into.

```powershell
dotnet tool install -g Devolutions.WinDbg.Tool
```

[WinDbg tool on GitHub](https://github.com/Devolutions/windbg-tool)

### How to be more ambitious
Food for thought. Every day is "how can I automate this", but there is an opportunity to think more out of the box here.

[How to be more ambitious: a tutorial for humans with models](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/)

### Stop installing skills
Use skills as a base, curate your own changes to them, and build an evolving, coherent set that matches what you want. Good advice. For now I maintain my own skills and consume other skills verbatim, but over time I could see that changing to this model.

[Stop Installing Skills](https://www.builder.io/blog/stop-installing-skills)

### Agent Finder
An MCP and skills finder. It found the Octopus MCP, but not the NirvanaHQ MCP.

[Agent Finder](https://github.com/agentfinder)

### BFF is the way to go for SPAs - now official
TL;DR: BFF is the way to go for SPAs.

[The Backend-for-Frontend pattern is now official IETF guidance](https://duendesoftware.com/blog/the-backend-for-frontend-pattern-is-now-official-ietf-guidance-rfc-10017-published)

### Mistral Large 4
Great to see European AI moving up in the world.

[Mistral Large 4](https://mistral.ai/news/mistral-large-4/)

### Evaluating OpenCode stealth models
Evaluating the OpenCode stealth models. It is hard, since they change very frequently by now, and Big Pickle seems to switch identity underneath too.

[OpenCode stealth models: benchmarks](https://fellipesoares.com.br/en/opencode-stealth-models-benchmarks/)

### Hyperlight
Microsoft is copying Cloudflare with Frontlight: run code on the PoPs. This is the project they use for Edge actions, and it could also be an interesting technology for sandboxing agents. Probably a bit too bare-bones to work with directly, though.

[Hyperlight on GitHub](https://github.com/hyperlight-dev/hyperlight)

### Crabbox
Probably the more usable option for sandboxing. I have not progressed to running so many agents (yet?), so I usually make do by running my sessions in `herdr` inside a `nixos` box.

[Crabbox](https://crabbox.sh/) | [Steipete on X](https://x.com/steipete/status/2053032450138276274)

### Corti Labs
Danish inference provider. It is a bit unclear how it works, but I think they evaluate open-weight models (so Chinese and European ones), then offer them under a different name, with a bit of training on top and inference guaranteed to run in Denmark. I think that is going to be a hard sell, but let us see when the "US AI" bubble pops.

[Corti Labs](https://cortilabs.com/)

### Elsa Workflows
An n8n competitor. I was considering this for visualizing (not editing) batch job runs in the background. In the end, we opted not to, though.

[Elsa Workflows](https://github.com/elsa-workflows/)

### Link hoarding
With all the agentic coding stuff happening, I am drowning in notes, links, and so on. I now run my own PhoneShare to capture things, and Joplin is working well as a OneNote replacement. I recently started experimenting with simply dumping links into a database with a cheap visualization on top, to have better, centralized bookmarks.

These projects take that to the next level. I have not gotten around to trying them out, though:

[Karakeep](https://github.com/karakeep-app/karakeep) | [Wallabag self-hosting](https://wallabag.org/self-hosting/)

### Reverse Engineer Anything
The Photoshop and Word (and more) recreations have been making the rounds. I am also going to give Jiffshot, a vibe-coded SnagIt clone, a try.

[Reverse Engineer Anything](https://github.com/morluto/rea) | [Jiffshot](https://github.com/Devolutions/jiffshot)

### Master of Orion II Redone
The real reverse-engineering gem for this month is the retro-gaming community wrapping up Orion2re, a reverse engineering of *Master of Orion II: Battle at Antares* from the Windows 95 version.

No more playing in `dosbox`, and an opportunity to tinker with the code directly. I played through a game, and it was flawless.

There is also [Starlord](https://apps.futuremagic.de/starlord/) and the community at large over at [r/masteroforion](https://www.reddit.com/r/masteroforion/).

[Orion2re on GitHub](https://github.com/orion2re/orion2re)

### A Civ2 clone
A Civilization II clone by a famous Civ2 modder.

[Saphelia Genesis](https://saphelia.no/genesis/)

### Trails: agentic code review
I have signed up, but have not tried it yet. Something has got to give: at work I got a functionally complete, 40,000-line PR from Claude Code after it implemented a grilling session. I then challenged a number of design choices, but that resulted in an additional 10,000 lines of code. Reviewing it the old-school way is going to take weeks, so I am actively looking into how to approach that.

[Entire Trails](https://entire.com/features/trails) | [The New Stack: Entire Trails for agentic code review](https://thenewstack.io/entire-trails-agentic-code-review/)

### ATDD
In the same vein, maybe now is the time for BDD and derived approaches like ATDD to shine?

[ATDD: From Stories to Executable Specifications](https://courses.cd.training/courses/atdd-from-stories-to-executable-specifications)

### One slice, one folder
One folder, one feature. Enforce it with tests; that works very well. AI agents are great at playing ball with that setup.

[One Slice, One End](https://www.linkedin.com/pulse/one-slice-end-gabriel-n-schenker-gomle/)

### IT Architecture Patterns
A more ambitious project than Enterprise Integration Patterns. I have not looked at it in detail yet, but I will.

[IT Architecture Patterns](https://itarchitecturepatterns.net/) | [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/)

### Formulating how to work with AI
Nice to see people attempting to formulate "how to work" rules while we are all learning. I think pairing on Matt Pocock grilling sessions is a good next step for my team; we will try that.

[Impatient Programming](https://impatientprogramming.org/) | [Frontier Engineering](https://kiro.dev/topics/frontier-engineering/)

### OAuth 2 in Action, second edition
Looking forward to this. IAM is a core task in my team and super important in the agentic world.

[OAuth 2 in Action, Second Edition](https://www.manning.com/books/oauth-2-in-action-second-edition)

### CRAP score and mutation testing
Inspired by Uncle Bob, who mentions CRAP and mutation testing regularly as a way to keep agents "on track", I was investigating CRAP for .NET. It turns out the .NET skills already have tooling for this. It works, but maybe it would be better to move the calculations into deterministic code, à la the command-line tool.

[crap4dotnet](https://github.com/7Factor/crap4dotnet) | [CRAP score skill](https://github.com/dotnet/skills/blob/main/plugins/dotnet-test/skills/crap-score/SKILL.md)

### Stryker and MTP
Mutation testing in .NET. Not entirely clear, but Stryker already supports MTP (preview):

`dotnet stryker --test-runner mtp ...`

[Stryker.NET](https://stryker-mutator.io/)
