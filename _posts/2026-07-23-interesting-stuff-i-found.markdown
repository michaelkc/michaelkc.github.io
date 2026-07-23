---
layout: post
title:  "Interesting stuff I found - July 2026"
date:   2026-07-23 17:46:00 +0200
---

### RetroPad - Notepad from XP in 2,749 bytes
Dave Plummer (of Windows Task Manager fame) rewrote Windows XP Notepad feature-for-feature in x86 assembly.

[RetroPad on GitHub](https://github.com/PlummersSoftwareLLC/TinyRetroPad) | [Tom's Hardware article](https://www.tomshardware.com/software/windows/retropad-is-a-full-feature-parity-version-of-notepad-from-xp-in-just-2-749-bytes-x86-assembly-coded-apps-comes-from-windows-legend-dave-w-plummer)

### How Transformers actually work
Matthias Kainer tries to explain to his 12-year-old how ChatGPT knows what word comes next, and why LLMs confidently make things up. The most important takeaway is that LLMs do not emit facts.

[So what's the next word, then?](https://matthias-kainer.de/blog/posts/so-whats-the-next-word-then-/)

### The only trait that predicts RTO objections is narcissism
6 years of research, peer reviewed: "The only trait that consistently predicted objections to remote work was narcissism - the tendency to be self-centered and entitled. The higher the opinions of themselves leaders expressed, the more they coveted power and status - and the more they favored return-to-office mandates."

[NYT Opinion](https://removepaywalls.com/https://www.nytimes.com/2026/06/22/opinion/office-work-wfh-bosses.html) | [ScienceDirect study](https://www.sciencedirect.com/science/article/pii/S0749597826000300)

### Open CoDesign - open source Claude Design alternative
Prompt-to-prototype tool that runs locally. Interesting alternative to the various closed-source AI design tools.

[Open CoDesign on GitHub](https://github.com/opencoworkai/open-codesign)

### China's Great Green Wall grows faster than natural forests
66 billion trees planted since 1978.

[Live Science](https://www.livescience.com/planet-earth/plants/trees-in-chinas-great-green-wall-appear-to-grow-faster-than-natural-forests-study-finds)

### WSL Container - public preview
Linux containers directly in Windows via WSL, no Docker needed. Presumably will be supported by Aspire. I had to nudge the update a bit to get `wslc.exe` CLI. GA expected fall 2026.

[WSL Container announcement](https://devblogs.microsoft.com/commandline/wsl-container-is-now-available-for-public-preview/) 

### devenv - declarative developer environments
Nix-based tool for reproducible dev environments. 100,000+ packages, 50+ language support, processes, services, git hooks, and container generation. Under 100ms shell activation with caching. I keep circling back to Nix tooling; devenv seems like the most approachable entry point.

[devenv.sh](https://devenv.sh/) | [NixOS-WSL](https://github.com/nix-community/NixOS-WSL)

### mise - dev tools, env vars, and tasks
Similar space to devenv but with a different philosophy. Single `mise.toml` per project to manage tools, env vars, and tasks. 1000+ tools. Quick `mise use node@24 python@3.13` to pin versions per project.

[mise.jdx.dev](https://mise.jdx.dev/)

### DSC v3.2.0 - PowerShell Desired State Configuration
New built-in Windows resources (services, firewall rules, SSH config), experimental Bicep integration via gRPC, version pinning, `--what-if` for individual resources, and a richer expression language. 

[DSC v3.2.0 announcement](https://devblogs.microsoft.com/powershell/announcing-dsc-v3-2-0/)

### Winget-AutoUpdate
Automatically updates apps via winget on a schedule. It seems to work via scheduled tasks.

[Winget-AutoUpdate on GitHub](https://github.com/Romanitho/Winget-AutoUpdate)

### Naiad - .NET Mermaid renderer
Renders Mermaid diagrams to SVG (and PNG) in .NET with no browser or JavaScript runtime required. The live editor at [naiad.papyrine.org](https://naiad.papyrine.org) runs entirely on Blazor WebAssembly. Usage requires paying the maintainer.

[Naiad on GitHub](https://github.com/Papyrine/Naiad)

### Hardened git clone commands
Came across this, worth bookmarking: a safer git clone command that disables aliases, fsmonitor, bare repository auto-detection, hooks, and templates, with a shallow clone. Useful when pulling untrusted repos.

```bash
git \
-c alias.clone= \
-c core.fsmonitor=false \
-c safe.bareRepository=explicit \
-c core.hooksPath=/dev/null \
clone \
--template= \
https://github.com/someuser/someproject.git \
--depth 1 \
/tmp/someuser/someproject
```

[Why hardened git clone commands matter](https://medium.com/@selvakumarsubramanian/why-hardened-git-clone-commands-matter-in-modern-dev-tooling-f271aabdabad)

### Castor - cast web video from your terminal
Point it at a web page and it finds the video, extracts the stream, transcodes it, and casts to your TV via DLNA or Chromecast. Supports auto-generated subtitles via whisper. I have not tested this, but it looks interesting. 

[Castor on GitHub](https://github.com/stupside/castor)

It seems Google Home is having trouble with older-gen Chromecasts after factory reset, at least for me. I had to reset a Chromecast  during vacation and while Google Home could not set it up on the new wifi, this script worked flawlessly.

[Chromecast WiFi setup script](https://gist.github.com/DavidePrincipi/e2007b998bb66ea69a1ff7832af6c417)

### Cemu 2.6 - Wii U emulator
A Wii U emulator - I have previously tried Dolphin for pure Wii games. Also someone is working on compiling Mario Kart Wii for PC (without emulator)

[Cemu](https://cemu.info/) | [Mario Kart Wiicompiled](https://korben.info/en/mario-kart-wii-static-recompilation-pc-native.html)

### Meta is destroying its engineering culture
The Pragmatic Engineer newsletter on Meta's shift away from engineering-first culture. Worth reading if you are interested in how big tech companies are restructuring around AI.

[Why is Meta destroying its engineering](https://newsletter.pragmaticengineer.com/p/why-is-meta-destroying-its-engineering)

