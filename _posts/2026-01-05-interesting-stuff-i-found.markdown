---
layout: post
title:  "Interesting stuff I found - January 2026"
date:   2026-01-05 13:08:00 +0200
---
### GistHost
An updated version of GistPreview, which allows hosting single-file HTML pages on GitHub as gists. The author use them for storing Claude Code transcripts

[GistHost](https://simonwillison.net/2026/Jan/1/gisthost/)

### "Ralph Wiggum" agentic coding
As I understand it the core philosophy here is to come up with an implementation plan (like spec-driven), then convert it to individually implementable features and run the agent in a non-interactive, sequential loop to implement the plan. 

<strike>The Ralph Wiggum part is then to look where the agent falters and add explicit instructions in `AGENTS.md` (combined with prompting it to do some housekeeping of its own instructions as well).

The latter part I have used myself with Copilot, when it had trouble working with translation files.</strike>

The Ralph Wiggum part is the iteration with the same prompt on the same problem until a stop condition is met. The idea being that the agent will then build upon partial solutions in previous loops, and be able to run unattended for longer.
[This article](https://dev.to/sivarampg/the-ralph-wiggum-approach-running-ai-coding-agents-for-hours-not-minutes-57c1) explains it well.

[Stop Chatting with AI. Start Loops (Ralph Driven Development)](https://lukeparker.dev/stop-chatting-with-ai-start-loops-ralph-driven-development)

### Mitchell Hashimoto on "Feature Design"
Not a big fan of video content, but this one is gold. It walks through the crucial process of taking a step back when feature requests come in and:

- identify the underlying issue the requester hopes the feature will solve
- figure out how to address multiple such issues with a new feature that aligns with the product vision
- spec out the new feature using a “human–machine interface first” approach

[Feature Design](https://x.com/mitchellh/status/2001810354096214059)

### textarea.my
A [distraction-free, bare-bones text editor](https://github.com/antonmedv/textarea) that saves content base64-encoded in the url

[textarea.my](https://textarea.my)

### The Price of Intelligence - Three risks inherent in LLMs.
Supplementing the treatise on exfiltration risks in [the lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), this article discusses inherent issues in LLMs themselves, such as hallucination.

[The Price of Intelligence](https://cacm.acm.org/practice/the-price-of-intelligence/)

### The Misconceptions About Vibe-Coding
Some good takes here, specifically that 
- vibe coded apps are the new Excel (good for individual stuff, not so good when moving to multi-user, deployed apps)
- the people threatened the most by vibe coding are entrepeneurs with simple SaaS offerings, not developers
- developers stay relevant by moving up the complexity stack (architecture, review)
- vibe-coding’s ceiling is determined by your ability to validate the output

[The Misconceptions About Vibe-Coding](https://blog.fka.dev/blog/2025-12-06-the-misconceptions-about-vibe-coding/)

### AI rollout satire (& AI Underpants Gnomes)
Had a good laughh at [this](https://x.com/gothburz/status/1999124665801880032) and it led me to this piece by Jeffrey Snover. 
That is a more serious treatise on how many companies adopt generative AI out of fear of "missing the boat", 
with no clue how to derive value. That was how I felt when I saw the Gordon agent in Docker...

[AI Underpants Gnomes: The Missing Step in Your Strategy](https://www.jsnover.com/blog/2025/11/18/ai-underpants-gnomes-the-missing-step-in-your-strategy/)

### AI-native software engineering & the Ralph loop
Some hyperbole, but very interesting. I did dabble a bit with reverse engineering approaches (not products) to skills, with some success.
I previously speculated that the outcome disparity people experience with agentic coding might be due to language choice and the models ability to work with your choice. Maybe it is time to trial work in alleged S-Tier languages like Typescript instead of F-Tier .NET ?

I am definitely going to watch the videos [1](https://www.youtube.com/watch?v=Jr2auYrBDA4&t=8s) [2](https://www.youtube.com/watch?v=ZBkRBs4O1VM) and try out [the workshop](https://ghuntley.com/agent/). 

[AI-native software engineering & the Ralph loop](https://x.com/jaimefjorge/status/2011381315929583747)

### mitmproxy
Spent a bit of time getting `mitmproxy` running today.

Basics:

- install with `winget install 9NWNDLQMNZD7`
- trust root cert via [mitm.it](http://mitm.it)
- capture trace for specific domain patterns
  - `mitmproxy -p 9595 --allow-host .*mydomain1.com  --allow-host .*mydomain2.org --no-show-ignored-hosts --store-streamed-bodies --save-stream-file ./capture.mitm`
- configure Windows proxy to use `http://localhost:9595`
  - `reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f`
    `reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d http://localhost:9595 /f`
- do what you want traced and stop `mitmproxy`
- disable Windows proxy
  - `reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f`
- load up `capture.mitm` in `mitmweb`

### WezTerm
While Windows Terminal is great, it is good to have competition in the space on Windows. Wezterm comes with [interesting features](https://wezterm.org/features.html) I want to dig into.

Install with `winget install wez.wezterm`

[WezTerm](https://wezterm.org/index.html)

### Blazor Hot Reloading
I am shifting to UI adjustment work as we wrap up a project at work, and that led me to investigate the state of Blazor Hot Reloading. It is much, much better than when I looked last, 
and works even when not debugging. One gotcha is that "hot reload on save" is not enabled by default in VS 2026; you must press `ALT-F10` to hot reload (or enable it in options).

Also I noticed that the browser refresh script injected is now an actual script file, which might mean that running with a CSP locally might finally be doable (it used to be direct script injection).

[Write and debug running code with Hot Reload in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/debugger/hot-reload?view=visualstudio&pivots=programming-language-dotnet)

### Resetting package.lock.json on git checkout
I was doing a lot of branch switching today, and got annoyed with Git complaining

```
git checkout main
error: Your local changes to the following files would be overwritten by checkout:
        src/DotNetProject1/packages.lock.json
        src/DotNetProject2/packages.lock.json
Please commit your changes or stash them before you switch branches.
Aborting
```
I want to regenerate lockfiles on build, to ensure that I build with the exact same transitive package versions on the build server as I developed locally. 
But the file contents are not important to me; when the branch is switched it should ignore any pending changes to the lockfiles lingering from the old branch.
It will be regenerated as soon as I build anyway.

This `co` Git alias, courtesy of Copilot with some nudging, does the trick:
```
[alias]
  co = "!f() { set -e; CANDIDATES=$(git ls-files -m -o --exclude-standard --full-name -- \"**/packages.lock.json\" || true); if [ -z \"$CANDIDATES\" ]; then CANDIDATES=$(git ls-files --full-name -- \"**/packages.lock.json\" || true); fi; OLDIFS=\"$IFS\"; IFS=$(printf '\n'); for f in $CANDIDATES; do [ -z \"$f\" ] || { git restore --staged --worktree -- \"$f\" 2>/dev/null || true; git checkout -- \"$f\" 2>/dev/null || true; git clean -f -- \"$f\" 2>/dev/null || true; }; done; IFS=\"$OLDIFS\"; git checkout \"$@\"; }; f"
```
Add it to `~/..gitconfig.aliases` (when using [Phil Haack's Git aliases](https://haacked.com/archive/2019/02/14/including-git-aliases/))

It slows down the checkout process quite a bit though, but if that ends up annoying me I might make a separate alias for "fast" switching (or just use `checkout`).

### Upscaling images - upscayl
I had to print some low-resolution images today, and experimented with putting them through AI upscaling. Upscayl runs locally (or you can pay for cloud), is free, open source (models possibly only open-weight?) and worked great for my use case.
Only gotchas is that you must have an NVIDIA card for it to work, but most of my machines do...

[Upscayl](https://github.com/upscayl/upscayl/)

### AI personal assistants
Things are heating up with [ClawdBot](https://docs.clawd.bot/), which got a lot of hype this week. I am not personally ready to connect bleeding edge code and models with questionable safeguards to my critical workflows just yet, but I certainly see the allure of finally feeling close to realizing the "personal agent does stuff for me" vision.
While other people work out the kinks, I am dabbling a bit with [Goose](https://block.github.io/goose/), where things are somewhat less exposed and you are more in control of what is happening (like Copilot).
