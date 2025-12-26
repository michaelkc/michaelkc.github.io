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

EDIT: And another take: [90 percent](https://lucumr.pocoo.org/2025/9/29/90-percent/)

### Azure CDK progress
Previously-mentioned Azure CDK seem to be maturing nicely. They are not pushing it very hard, so I guess the intended usage is more via the higher-level deployment story of Aspire?

[Azure CDK](https://www.nuget.org/packages/Azure.Provisioning#readme-body-tab)

### Using SPIFFE as an OAuth client credential
I have not worked with SPIFFE (or mTLS for that matter), only the somewhat-related managed identities inside Azure and GitHub OIDC. But eliminating secrets is great for security, so nice to see traction on standardizing this stuff. 
Perhaps Azure PaaS platform managed identities can offer SPIFFE capabilities in the future for federating passwordless workload identities?

[SPIFFE client auth](https://datatracker.ietf.org/doc/draft-ietf-oauth-spiffe-client-auth/)

### Adapting open source practices in the wrong context
Great quote, which I fully agree with:
> Open source practices are the MOST wasteful way to deliver software.
> They exist to manage the fact that there is no trust and there are no shared incentives.
> When used in an enterprise, they are are wasteful and even dangerous. 

I once encountered a team that had adopted Git Flow for what was basically a web-based SaaS. Predictably, this ran completely off the rails in zero-value overhead. 
They were able to adapt their processes to a better place afterwards, but reckless implementation of open source practices
in the wrong context (just like implementing FAANG architecture in the wrong context) remains a danger.

I also like the [Contrast best practices between OS and enterprise](https://gist.github.com/bdfinst/496d06b057c44edae7fd88d906e78f67) list.

[Bryan Finster on LinkedIn](https://www.linkedin.com/posts/bryan-finster_contrast-best-practices-between-os-and-enterprise-activity-7399522364876840961-CmNj/)

### Mistral Vibe CLI & Devstral Small 2
Nice to see European AI is still there.

I have not tried Devstral Small 2 (or Qwen 3 coder flash for that matter), but a laptop-runnable coding model have a lot of appeal.  My experiments with OpenCode/Cline and 
Grok Code Fast has not been very successful, but not sure if that is mostly the model or the agent...maybe time to give the small models a shot.

It has been many years since I have been able to code efficiently offline; in the old days it was Google, these days it is the coding agent.

For work (with GitHub Copilot), nothing I have tried beat Claude Sonnet 4.5 and Claude Opus 4.5. Although I did read that Gemini had an edge on large, legacy codebases.

[Devstral2 & Mistral Vibe CLI](https://mistral.ai/news/devstral-2-vibe-cli)

### Same Model, Different Results: Why Coding Agents Aren't Interchangeable
Nice overview of some of the tricks Claude Code use to steer the behaviour of the underlying LLM, and reflections on what makes different agents work differently on top of the same model.

[Why Coding Agents Aren't Interchangeable](https://blog.thepete.net/blog/2025/12/10/same-model-different-results-why-coding-agents-arent-interchangeable/)

### Vibe Engineering JustHTML
Great account of vibe engineering in action. I am building an application currently, not a library, but I have similar experience. The process shines when you can guide the agent with key design choices, then it can fill out the blanks. 

[How I wrote JustHTML using coding agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/)

### How I Built a Production App with Claude Code
Interesting observations from Josh Anderson - that agent coding collapse with huge context is a message I have heard before, however I recently say someone report that Gemini 3 Pro works well when things get large. 
It is in preview in GitHub Copilot now, but did not work very well in my (extremely limited, 2-3 prompts) testing today (on a small solution).

[How I Built a Production App with Claude Code](https://leadershiplighthouse.substack.com/p/how-i-built-a-production-app-with)

### GitHub Actions Has a Package Manager, and It Might Be the Worst
On the atrocious security posture of GitHub Actions. To mitigate, I try to stick to GitHub/Microsoft provided actions (in the hope that they know what they are doing) + NUKE + a few, carefully reviewed, forked and SHA-pinned actions.

[GitHub Actions Has a Package Manager, and It Might Be the Worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html)

### MCP 2025-11-25 spec
Digging through it today, I understand the basics of MCP but need to know more about the details. MCP is everywhere right now, 
and the potential (and potential risk) is huge.

[MCP 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25)

### Pydoll - Evasion-first browser automation
TIL there are alternative to Playwright/Selenium browser automation that actively try to evade detection. Evil-ish, reminds me of the AI companies ignoring `robots.txt`.

[Pydoll](https://github.com/autoscrape-labs/pydoll?tab=readme-ov-file)
