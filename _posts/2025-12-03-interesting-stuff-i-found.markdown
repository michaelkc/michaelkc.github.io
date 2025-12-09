---
layout: post
title:  "Interesting stuff i found - December 2025"
date:   2025-12-03 12:31:00 +0200
---
### NUKE in trouble? How about Dagger
I am heavily invested in [NUKE build](https://nuke.build/), however its author has been having a bad time with [nasty community engagement](https://github.com/nuke-build/nuke/discussions/1564#discussioncomment-15001502). 

I hope he will consider taking it commercial, as the product brings a lot of value.

That did, however, prompt me to consider alternatives. The core issue is the well known difficulty of developing and testing GitHub Action workflows locally, which leads to a long stream of error correcting commits when you work with CI.

NUKE mostly solves this, by capturing the build script in strongly-typed, imperative .NET/C# (no more YAML debugging), and allows you to easily run the pipeline locally. 
[Dagger](https://docs.dagger.io/) offers an alternative solution for the same problem; here an underlying execution engine is used to orchestrate functions written in Go/Typescript (or untyped alternatives) that chain together.

It allows you to take input (e.g. code in repo) to output (e.g. versioned deployment artifact, such as a container image) and can potentially also be used for code-based CD of those artifacts.

I made a [small spike of building a basic .NET solution](https://github.com/michaelkc/dagger-dotnet-spike/) (with heavy aid from Copilot)

In principle, this sounds great, but lack of .NET support and lack of Microsoft engagement in the Daggerverse for common tasks curbs my enthusiasm a bit. Staying with NUKE for now, but keeping an eye on Dagger.

[CI/CD with Dagger and Azure](https://bakson.dev/2023/07/03/deploy-azure-webapp-dagger.html)

### Fizzy - a fresh take on Kanban
The BaseCamp folks made a Kanban board / task tracker, free for up to 1000 cards. Also the code is open source (like they did with Campfire), 
which I would think is really valueable for upcoming Ruby programmers. At least I always wished for access to commercially-viable codebases to 
learn from early in my career, but that was unfortunately not commonly available for .NET in the early 2000s...

[Fizzy](https://www.fizzy.do/)

### How to write a great agents.md
Nice, actionable guidance.

[How to write a great agents.md: Lessons from over 2,500 repositories](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/)

### The Engineers Who Can’t Use AI Agents Don’t Have a Tools Problem
Postulates that to use AI (coding) agents efficiently, you have to be able to

- understand what you are building
- externalize that understanding in writing

That is defintely true, but not the whole picture (as in: more is needed, context, experience etc.). It made me think of Kent Becks [90% of My Skills Are Now Worth $0...but the other 10% are worth 1000x](https://tidyfirst.substack.com/p/90-of-my-skills-are-now-worth-0)

EDIT: See also Adam Tornhills take [I tend to delete 80% of the generated code. The remaining 20% I refactor](https://www.linkedin.com/posts/adam-tornhill-71759b48_my-quick-and-very-subjective-take-on-ai-coding-activity-7402723654834569216-2zt6/)

[The Engineers Who Can’t Use AI Agents Don’t Have a Tools Problem](https://agentdrivendevelopment.com/the-engineers-who-cant-use-ai-agents-dont-have-a-tools-problem/)
