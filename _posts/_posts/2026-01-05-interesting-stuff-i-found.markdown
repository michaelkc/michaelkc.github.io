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

The Ralph Wiggum part is then to look where the agent falters and add explicit instructions in `AGENTS.md` (combined with prompting it to do some housekeeping of its own instructions as well).

The latter part I have used myself with Copilot, when it had trouble working with translation files.

[Stop Chatting with AI. Start Loops (Ralph Driven Development)](https://lukeparker.dev/stop-chatting-with-ai-start-loops-ralph-driven-development)
