---
layout: post
title:  "Interesting stuff i found - July 2025"
date:   2025-07-03 14:24:00 +0200
---
### Azure Icons
Deep down in a Onenote note I found an old link to a [third-party maintained collection of Azure icons](https://github.com/benc-uk/icon-collection) (for presentations and documentation) 

That has not been updated in a while, but it turns out there is now an official Microsoft collection of Azure icons.

[Azure icons to use in architecture diagrams and documentation](https://learn.microsoft.com/en-us/azure/architecture/icons/)

### What if we could eliminate accounts
I love when people challenge common wisdom. Not sure the suggestions are practical right now, but as someone who is working with CIAM day-to-day, I know that what we do today is not great. 
Maybe it could be a way forward with some industry support, but for now, I try to passwordless all the tings and stick with the accounts, warts and all.

[What if we could eliminate accounts](https://www.linkedin.com/pulse/what-we-eliminated-accounts-torres-dur%C3%A1n-cisa-crisc-cige-cist-5uluc/)

### American politics
The current politics of the US seem extreme - and it is nice to hear significant voices in tech [call it out](https://www.linkedin.com/posts/shanselman_its-so-frustrating-that-there-is-this-illusion-activity-7346720944465334272-a0cR)

Instead of gutting health care to ~balance the budget~ deliver tax cuts to the rich, maybe they should make the [ultra rich contribute proportionally instead](https://mainlymacro.blogspot.com/2025/06/a-minimum-tax-on-billionaires.html), so they can [re-attach to reality](https://x.com/_The_Prophet__/status/1939099420353798313)?

### Entra Sign-in URL Builder
Useful for testing entra apps, and for browsing Graph scopes

[Entra Sign-in URL Builder](https://signin.merill.net/)

### Google NotebookLM & OneNote Copilot Notebooks
In the note-taking part of my info pipeline, [NotebookLM keeps popping up](https://www.xda-developers.com/notebooklm-changed-view-of-ai/). It has the ability to take a number of documents (markdown, PDF - up to 50 for free) then allow you to chat about it and generate an audio overview.
I plan to try it out for my upcoming Azure certification.

Currently, I use OneNote for note taking, so I am also looking forward to trying out what looks like a copycat feature, Copilot Notebooks

[NotebookLM](https://notebooklm.google.com/)

[OneNote Copilot Notebooks](https://techcommunity.microsoft.com/blog/microsoft_365blog/introducing-copilot-notebooks-a-whole-new-way-to-work-with-ai-in-onenote/4428626)

### The problem with "Vibe" coding
Dylan Beattie makes the important distinction between "program" (what I sometimes call "me-ware"), something that is whipped up quickly, and works for one specific, hardcoded scenario. 
And "product", the program battle-hardened and extended to the point where it can be actually useful for other people, tested, maintainable and have other important quailities.

His experience match my own - LLMs are absolutely fantastic at cranking out me-ware, but struggles as soon as we are talking products.

[The problem with Vibe coding](https://dylanbeattie.net/2025/04/11/the-problem-with-vibe-coding.html)

### Logout isn't a signal - it's a decision
If I understand the message correctly, the author wants to reverse the traditional logout flow of say OIDC. Here the RP asks the IdP to initiate federated logout and in turn expect it to request each client it knows to be participating in the session to perform local logout. In the proposed flow, as I understand it, instead each RP should expicitly ask for a session to be started, gets a session token, and can then ask for the session status by requesting a revocation list published by the IdP.
This sounds a bit weird to me, as it does nothing to solve the "how long should the IdP SSO session live in face of individual client logout" (in Enterprise typically you want everything signed out, consumer login based on Facebook not so much), and I have a hard time imagining risk signals being better at the IdP than at the actual client, unless we also invent a "communicate risk back to the IdP" protocol...

Time will tell if any of this moves towards standardization, I at least agree there is a lot of room to improve the current situation.

[Session JWT tokens](https://www.linkedin.com/pulse/session-jwt-token-weve-been-missing-mike-schwartz-xtljc/)

[Logout isn't a signal](https://www.linkedin.com/pulse/logout-isnt-signalits-decision-mike-schwartz-poonc/)

### ServicesDebugger
Nice little tool to help figure out why something isn't resolving in ASP.NET

[ServicesDebugger](https://gist.github.com/khalidabuhakmeh/066fa8b2ced6f85424c16146ecb7b55b)

### 
This quote

> This is the valley playbook for business software:
> 
> Create a great product by selling it to small teams in the early days,
> then pivot to the enterprise sales model and "call us" pricing after a while.
> 
> The reputation from the early days can then slowly be drawn down,
> and by the time it's gone, you've locked in a bunch of top-dollar
> enterprise customers who are never going to switch.

hits the nail on the head. At work I have been at the "small team" end of this a couple of times, and been burned enough to list it as an explicit risk point
to consider when choosing new third party dependencies.

[On Basecamps "no nonsense" approach](https://www.linkedin.com/posts/david-heinemeier-hansson-374b18221_after-selling-basecamp-for-two-decades-its-activity-7320709707101327360-usYK/)
