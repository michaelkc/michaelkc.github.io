---
layout: post
title:  "Interesting stuff i found - January 2026"
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
