---
layout: post
title:  "Interesting stuff i found - November 2025"
date:   2025-11-02 17:25:00 +0100
---
### When the Shapes Don't Fit: Modelling Team Interaction Anti-Patterns with Honesty
I like [Team Topologies] as a shared language for talking and thinking about how teams work. Part of that is talking about what is not working, and how to improve, which this article touches upon.

[When the Shapes Don't Fit](https://www.linkedin.com/pulse/when-shapes-dont-fit-modelling-team-interaction-honesty-rich-allen-fynhe/)

### Generate GitHub Copilot instructions
Good little tip from Burke Holland: GitHub Copilot in VSCode can auto-generate `.github/copilot-instructions.md` via canned meta-instructions and a review of your codebase. A simple step to take, barring more heavyweight, emerging practices like memory and stuff like Repomix.

[Your AI assistant might be guessing more than helping](https://www.linkedin.com/posts/burkeholland_your-ai-assistant-might-be-guessing-more-ugcPost-7348420055400931329-RK4V/)

### Hitting fresh GitHub bugs
I was working on a fork of a custom Windows taskbar (to create a transparent zone other windows cannot maximize into, for use when I auto-hide the Windows taskbar to save my OLED screen from burn-in) and happened upon this bug. 
It is pretty specific, in that it occurs

- if your repo was created 2025-11-25 (writing this on the 26th)
- if your repo is trying to create a release with `GITHUB_TOKEN`

[Bug Report: Publishing a release via GitHub actions fails for repos created on 2025-11-25](https://github.com/orgs/community/discussions/180369)
