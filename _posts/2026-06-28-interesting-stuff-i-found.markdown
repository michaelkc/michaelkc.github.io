---
layout: post
title:  "Interesting stuff I found - June 2026"
date:   2026-06-28 23:00:00 +0200
---

### ComfyUI - local image generation
Great for local image generation. I had a lot of fun with Flux Schnell and Z-Image-Turbo, both of which can generate an image on my RTX 3060 12GB in about 30-60 seconds.

[ComfyUI](https://comfy.org/) | [Flux Schnell workflow](https://comfy.org/workflows/flux_schnell-75fb83052003/) | [Z-Image-Turbo](https://docs.comfy.org/tutorials/image/z-image/z-image-turbo)

### David Fowler on AI code duplication
> There's a really high cost of duplicating code and we're all relearning that everyday with these coding agents. Until they get better at generating reusable code, bugs will run rampant. You can't "abstract it away" with more agents. You just get crappy software.

I am relearning this also - recently refactored a three-way duplicated DTO in the same project.

[David Fowler on LinkedIn](https://www.linkedin.com/posts/davidfowl_theres-a-really-high-cost-of-duplicating-share-7451378619534417920-00uw/)

See also [this tweet](https://x.com/davidfowl/status/2058753755395600661) - we are all coming to terms with the good and bad with coding agents, Fowler a bit earlier than most I think (the Aspire team were and are front runners in real-world application).

### Coding Agent Skills as programs
Skill metadata -> Skill body -> What the skill references

[What You're Actually Writing When](https://internals.laxmena.com/p/what-youre-actually-writing-when)

### Modularity Skills
Applying architecture as skills - I am experimenting with this as well, would not say it is going great though.

[Modularity](https://github.com/vladikk/modularity)

### The two souls of AI
The deterministic harness and the probabilistic frontier model.

[AI Agents Have Two Souls. You Control Only One](https://auth0.com/blog/ai-agents-have-two-souls-you-control-only-one/)

### Is AI profitable yet?
No (except NVIDIA) and the huge capex is built on expected productivity gains that might have a hard time materializing soon enough to keep the companies afloat. Unless you own stock in the respective companies you are of course not directly exposed (good or bad), but I wonder how much of that capex is backed by loans that might affect the market in general?

[Is AI Profitable?](https://isaiprofitable.com/)

### Waza - coding agent skill evaluation
One way to move from current "my gut feeling tells me this skill helps" to something measurable - but probably at high token cost (I have not tried the tool yet).

[Waza](https://github.com/microsoft/waza)

### The Orchestration Tax
The coding agents might be great multi-taskers - you are not. I am feeling this, juggling 3-4 agents is exhausting, and I urgently need better tools to manage my CLI sessions (options exist, but I have not found one I liked yet).

[Addy Osmani on X](https://x.com/addyosmani/article/2059844244907696186)

### Towards Dark Factories
Work with the agents on code that cannot be automatically verified or is critical ("Cobot modules"), leave the rest for the coding agents ("Dark factory modules").

[Dark Factories, Cobots, and the Potential Future of PR](https://www.linkedin.com/pulse/dark-factories-cobots-potential-future-pr-sam-newman-d6qke/)

### Copy HTML with CSS
Great Chrome extension for getting a snippet to the coding agent from a running browser.

[Copy HTML with CSS](https://chromewebstore.google.com/detail/copy-html-with-css/gnggpgdicelimbccdogldneglninidhb?pli=1)

### Minimalist Phone App Launcher (Android)
I wish I was as self-disciplined as DHH in this regard - I want to give it a try. At least I have night mode black-and-white theme on already, that helps a bit.

[Minimalist Launcher](https://play.google.com/store/apps/details?id=com.qqlabs.minimalistlauncher&pli=1)

### llmfit
Find the open-weight model/quant that will run on your hardware. Had trouble installing on raw Windows, but runs fine in WSL.

[llmfit](https://github.com/AlexsJones/llmfit)

### ASUS ZenScreen Color ePaper MP13UC
I always liked E-Ink - with color, a somewhat larger screen and high-ish refresh rate, this looks quite interesting.

[ASUS ZenScreen Color ePaper Monitor Has an E Ink Screen](https://goodereader.com/blog/e-paper/asus-zenscreen-color-epaper-monitor-has-an-e-ink-screen)

### ModularPipelines
NUKE Build is dead, someone recommended this. Then again, someone also recommended going pure pwsh, worth considering. I need builds sharing most of their implementation to migrate my work workloads, and while I was excited for Dagger at one point, I no longer think that is a great direction.

[ModularPipelines](https://github.com/thomhurst/ModularPipelines)

### Android Terminal
If you own a Pixel phone (and precious few others; I sadly do not own a compatible device) you can get a more or less full blown Linux terminal running. As I understand it, unlike [Termux](https://termux.dev/en/), you are able to run more standard Linux software directly on the phone.

[Android Terminal Wiki](https://www.reddit.com/r/androidterminal/wiki/index/)

### AI-assisted engineers are burning out, is this fine?
Some of this resonates, however I believe I have now learned how to apply the coding agents in a good (maybe not great, but always improving) and _sustainable_ way for my work situation.

[AI-Assisted Engineers Are Burning Out. Is This Fine?](https://evilmartians.com/chronicles/ai-assisted-engineers-are-burning-out-is-this-fine)
