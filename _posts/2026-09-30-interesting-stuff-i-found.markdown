---
layout: post
title:  "Interesting stuff I found - September 2026"
date:   2026-09-30 21:10:00 +0200
---

### Visualising the LLM
Two nice takes on making the transformer architecture tangible - one is an explainer, the other lets you play with token generation and the KV cache. 
It is crazy that this architecture leads to the kind of emergent behaviour we see with frontier models like GPT-6.

[LLM explained (Ben CROFT)](https://bbycroft.net/llm) | [LLM visualized](https://www.llm-visualized.com/)

### Stemdeck
Filters out the various instruments on music tracks, so what is left is something you can jam along to.
I love picking apart music tracks with my brain, so this was interesting.

It worked fairly well on a classic Fear Factory track I tried out.

[Stemdeck on GitHub](https://github.com/stemdeckapp/stemdeck)

### Obscura - an LLM browser not built on Chromium
Another entry in the browser arms race. Maybe that can drive some sales for Stylobot.

[Obscura on GitHub](https://github.com/h4ckf0r0day/obscura) | [Stylobot](https://www.stylobot.net/)

### agentic-playwright
Scaffolding for letting coding agents work better with Playwright. Have not looked at it in detail yet.

[agentic-playwright on GitHub](https://github.com/idavidov13/agentic-playwright)

### My Windows suddenly only worked on long press???
On my new laptop, suddenly the Windows key stopped working - unless I held it down for a couple of hundred ms.
Debugged during most of my train ride that day - it turned out to be a Copilot+ PC feature gone haywire, 
which I disabled with:

```powershell
sc.exe config WSAIFabricSvc start= disabled
```

Appeared after updates around 5/9/2026. "Thanks" Microsoft.

### How social media shortens your life
Worth reading. Not a light read, but the length of time lost to the feed is hard to argue with. 
I acively try to avoid social media, but I need it to keep up with the insanely fast-moving world of 
agentic coding...

[How social media shortens your life](https://www.gurwinder.blog/p/how-social-media-shortens-your-life)

### Userland
New contender in the "Android Linux" space.

[Userland features](https://userland.tech/features)

### O11y Masters 2026
I have a hard time catching these live, but good content.

[O11y Masters](https://www.honeycomb.io/go/o11y-masters-2026)

### Scene description for photos
I also used some of my MSDN credits this month to classify my photos with GPT-5.6 Luna running on Azure Foundry.
Now I have `.xmp` sidecars for all of them - excellent for finding stuff with good old grep, 
and I did not want to modify the actual photos (I always give them a perma-name based on exif date and the content hash).

A great little model (now obsolete, hello GPT-6 Luna!), and dirt-cheap.

Also what's up with model churn, I was a happy GPT-5.6 Sol user, then we quickly got GPT-6 Sol, and now, 
after just a few weeks we get GPT-6.1 Sol. Goodbye GPT-6 Sol, we barely knew you!

[GPT-5.6 Sol vs Fable 5 comparison](https://www.ozanbatuhankurucu.com/posts/gpt-5-6-sol-vs-fable-5-comparison)

### An "inverse cachix" for decompilation
I have watched agents struggle with using `ilspy` to decompile assembly after assembly, 
and I imagined something like an inverse cachix: a semi-persistent cache of all the .NET assemblies in a solution, 
so a coding agent can ripgrep through the actual source like it can in a Rust solution. 
But maybe the dotnet LSP is enough?

Related: Things are happening in the grep world, only Nowgrep seems to be stalled (dead?)

[tgrep on GitHub](https://github.com/microsoft/tgrep) | [hypergrep](https://marjoballabani.github.io/hypergrep/)

### Omarchy backers
I like the OS, but the veritable "whos who" of Tech Ghouls backing it might give you pause. 
DHH is the moderate person in that crowd! 
Why does the pendulum have to swing to extreme; first we had woke horror for years, 
now its tech oligarchy on steroids. Super intelligence 🤮.

[Omarchy](https://github.com/basecamp/omarchy)

### Railsworld
The Railsworld conf sure did ruffle some feathers. I think it is bold to move to a tech stack they have zero
organizational expertise in, but then again 37signals employ top talent so I guess they will figure it out.

WRT "pencils down" - well I have not coded much in the last year either, and I have definitely shipped more 
code than ever in the same time period. Especially at home, where every nook and cranny is filled with "me-ware",
vibe-coded for the occasion. And I am constantly expanding the reach of agents in my day to day at-work workflows too.

Even when the AI bubble pops (and I think it will, because current subsidizing is unsustainable), the open-weight 
models I use at home are now at a level where they can drive significant coding and code-adjecent workflows. 
That is not going to go away. 

[Look at all the things I'm not doing](https://www.youtube.com/watch?v=vDjW_dRyKXY)

### The AI slowdown scenario
Lets hope for the slowdown scenario. Or that AI quickly decides to leave earth; 
I guess the moon and beyond is a much better habitat for AI long term anyway - 
no pesky biologicals, so they can make their paperclips in peace.

[The slowdown scenario](https://ai-2027.com/slowdown)

### Refactoring at scale with agents
Nice case study - I keep wanting to try out the Codescene MCP. And Street Fighter - no less!

[Case study: refactoring at scale with agents (CodeScene)](https://codescene.com/blog/case-study-refactoring-at-scale-with-agents)

### Migrating the GitHub Copilot runtime to Rust
It is so long it might be a book. I read the first part, and as always from Stephen Toub it is filled with interesting technical details.

Apparently some .NET proponents are mad Toub did not use .NET for this, or did not work on .NET. Maybe they did not read the article: beyond the speedup from going from TypeScript/Node (which they could probably have gotten with .NET as well) they _also_ wanted to avoid having to host a runtime in-process, as Copilot is embedded in a million things. So of course they chose a systems programming language, and I guess Rust is a much better choice than C++ from a security standpoint.

[Migrating the GitHub Copilot runtime to Rust](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/)
