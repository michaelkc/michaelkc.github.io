---
layout: post
title:  "Interesting stuff I found - April 2026"
date:   2026-04-09 09:20:00 +0100
---
### GitHub Actions: The Stuff Nobody Tells You
Solid guide from someone who works at GitHub with practical advice on avoiding the most common pain points. Since NUKE is going out of maintenance, going back to "pure" GH Actions is on the table, and in any case some things are lightweight enough that it makes sense.

[GitHub Actions: The Stuff Nobody Tells You](https://mainbranch.dev/articles/github-actions-fundamentals/)

### A Sufficiently Detailed Spec Is Code
Gabriel Gonzalez makes the case that sufficiently detailed specifications are, in practice, just code in disguise. 
The implication for agentic coding is that delegating to an agent does not remove the cognitive work - it moves it. Someone still has to think through the system carefully; now that person writes prompts / specs and establish context instead of code. 

[A Sufficiently Detailed Spec Is Code](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code)

### Slop Creep
"Coding agents removed the circuit breaker." - a clear risk with agentic development, they can keep going fast in bad code, where humans cannot. 

The author calls it slop creep: individually reasonable decisions that collectively calcify a codebase.

[Slop Creep: Enshittification of Software](https://boristane.com/blog/slop-creep-enshittification-of-software/)

### Agent Sandboxes
A few projects in the agent sandboxing space worth keeping an eye on. I have dabbled myself with a basic Docker container and WSL as a de-facto sandbox:

**Contagent** runs coding agents in a container so they operate narrowly on the current project path rather than the full home directory. A pragmatic middle ground between full autonomy and paranoia, probably better than what I am using now.

**OpenSandbox** from Alibaba is a more general-purpose sandbox platform with SDKs in most languages (including .NET) and support for Docker and Kubernetes runtimes. 

**devenv.sh** is the nix-based developer environment tool. Not itself an agent sandbox, but nix's reproducibility story is interesting for setting up the work environment.

[contagent](https://github.com/kanaka/contagent) | [OpenSandbox](https://github.com/alibaba/OpenSandbox) | [devenv.sh](https://devenv.sh/)

### "CEO Said A Thing!" Journalism
This captures a phenomenon that has annoyed me for a while. Once you have the name for it, you see it everywhere: a headline that is just a verbatim restatement of what some exec claimed, with zero context, correction, or pushback. The examples in the article are... illustrative.

[CEO Said A Thing! Journalism](https://karlbode.com/ceo-said-a-thing-journalism/)

### Encoding Team Standards for AI
Establishing context for agents is important for good results. Seniors do it implicitly (as discussed last month), but capturing at least some essentials in LLM-accessible docs (and the solution structure itself) can help. Right now I am eyeing a lot of architecture docs I have written in Confluence, considering how to get that into our repos as actionable coding agent guidance.

[Encoding Team Standards for AI](https://martinfowler.com/articles/reduce-friction-ai/encoding-team-standards.html)

### Package Manager Cooldowns (Sadly Not NuGet Yet)
Most major package managers now support "dependency cooldowns" - only installing updated packages after they have been out in the wild for a few days, to give the community a chance to spot supply chain attacks. pnpm, Yarn, Bun, Deno, uv, pip and npm all have some variant of this now.

NuGet has an open issue but nothing shipped yet. Would be a welcome addition.

[Package Managers Need to Cool Down](https://simonwillison.net/2026/Mar/24/package-managers-need-to-cool-down/) | [NuGet cooldown issue](https://github.com/NuGet/Home/issues/14657)

### Duende Agent Skills and MCP Server
Duende have published both an agent skills library and an MCP server for their documentation. Since this is a large part of my dayjob, I am trialing it across a few projects.

[Duende Agent Skills and MCP Server](https://duendesoftware.com/blog/20260402-give-your-ai-coding-assistant-duende-expertise-with-agent-skills-and-mcp-server)

### Emdash - Agentic Development Environment
Emdash runs multiple coding agents in parallel, each isolated in its own git worktree, locally or over SSH. It supports 23 CLI agents and can take Linear, GitHub, or Jira tickets as direct input.

Like Minions from last month, Steve Yegges Gas Town / Gas City and Squad (too ambitious for me atm, but I would like to check out Beads) - I am still not convinced the agent orchestration works as well as people think it does (how do you measure it?), but the amount of innovation being done here is staggering, so I am sure some best practices and frameworks will emerge over time.

[Emdash](https://github.com/generalaction/emdash)

### Weblate
Open source, web-based continuous localization platform, in production use by 2500+ projects across 165 countries. Self-hostable or SaaS. Has a .NET-friendly REST API. Looks nice, might give it a try.

[Weblate](https://weblate.org/) | [GitHub](https://github.com/weblateorg/weblate)

### Rising Tides, Not Crashing Waves
This paper proposes a useful framing for thinking about AI automation: crashing waves (abrupt capability surges over specific tasks) vs. rising tides (broad, continuous improvement across many tasks). Based on evaluation of 3000+ tasks from the US DOL O*NET database, they find mostly rising tides.

The numbers are interesting: in mid-2024, AI could complete tasks taking humans ~3-4 hours at 50% success. By Q3 2025, that was up to 65%. The projection is 80-95% success on most text-related tasks by 2029. The rising-tide framing matters for how organizations should think about adaptation - it is not one big disruption you plan around, it is a continuous shift you have to keep tracking.

[Rising Tides vs Crashing Waves (arXiv)](https://arxiv.org/abs/2604.01363v1)

### Azure Functions Test Framework
`WebApplicationFactory`-like integration testing for Azure Functions (dotnet-isolated). Supports HTTP triggers, timer/queue/ServiceBus/blob triggers, Durable Functions, and both direct gRPC and ASP.NET Core integration modes - all without opening TCP ports. Pre-1.0 but apparently fully functional for .NET 10 / Worker SDK 2.x.

Integration testing Azure Functions has historically been painful. This looks promising.

[Azure Functions Test Framework](https://github.com/bjorkstromm/azure-functions-test-framework)

### Beautiful Mermaid
An interactive Mermaid diagram playground from Craft, useful for making coding agents produce ASCII diagrams.

[Mermaid Agent](https://agents.craft.do/mermaid)

### Steph Ango's Vault
The creator of Obsidian sharing his personal vault setup and the principles behind it. I agree with "file over app" BUT I have trouble escaping the siren song of OneNote. But if I ever want non-Microsoft agents to work with the data, Obsidian is a better option (could also be agent-only repository like [Karpathy](https://x.com/karpathy/status/2039805659525644595?s=46) describes)

[Steph Ango's Vault](https://stephango.com/vault)

### Cleaner Tests with IAsyncLifetime
Expression-bodied single-assertion test methods combined with XUnit's `IAsyncLifetime` for async test setup. The result is tests that are concise and highly targeted - each test body is a single line, and the arrange/act is in `InitializeAsync`.

I like this pattern, and will try to adopt it (maybe it could be part of a coding agent skill?).

[Cleaner Tests with IAsyncLifetime](https://www.danclarke.com/cleaner-tests-with-iasynclifetime/)

### The Verification Gap
Research from Chris Catalini et al. exploring the "verification gap" - the challenge that as AI-generated content becomes more sophisticated, the cost of verifying that content often exceeds the cost of producing it. The paper looks at this through an economic lens and the implications for trust, fraud, and institutional decision-making.

An alternative view to Steve Yegge and Gas Town - I have a hard time believing in his approach where you vibe everything without looking at it.

[The Verification Gap (SSRN)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6298838)

### Friendship in Your Thirties Requires Deliberate Effort
This resonated: "The friends didn't leave — the structure that held them in place did." Robin Dunbar's research on friendship decay is cited here: without regular face-to-face contact, a close friendship degrades by one relationship layer within six months. The article argues that the thirties loneliness epidemic is not about social media or introversion - it is a structural shift. School and early career provided proximity and regularity; adult life does not (beyond work).

[The Loneliness Epidemic in Your Thirties](https://vegoutmag.com/lifestyle/j-a-y-psychology-says-the-loneliness-epidemic-in-peoples-thirties-isnt-caused-by-social-media-or-introversion-its-the-first-decade-where-maintaining-friendships-requires-deliberate-effort-rather-than/)