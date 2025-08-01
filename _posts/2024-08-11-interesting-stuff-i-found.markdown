---
layout: post
title:  "Interesting stuff i found - August 2024"
date:   2024-08-11 20:13:20 +0200
---
### Acknowledge the rising importance of understanding code over merely writing
A great quote, which reflects the message I heard at SDD from Adam Thornhill - LLMs need to help us understand and maintain code, not just create code, as that is not where we spend most of our time as software developers:

> Even if the marketed AI productivity gains of becoming "55% faster" materialize, it won't mean we can ship new features 55% faster. This becomes evident when looking at the software life cycle. 
> 
> In software, maintenance accounts for over 90% of a typical product’s life cycle costs. This means that if AI-assisted coding tools help with the programming, that coding amounts to only 10% of a workweek. An improvement for sure, but neither groundbreaking nor a free lunch. 
> 
> Those software life cycle numbers imply that the primary task of a developer isn’t to write code, but rather to understand existing code.

[via Fortune Buchholtz@LinkedIn](https://www.linkedin.com/posts/fortune-buchholtz-40266229_succeed-with-ai-assisted-coding-the-guardrails-activity-7213286816378949632--mQy)

(see also [Navigating the huge number of icons in FontAwesome with LLM chatbots](https://www.linkedin.com/posts/chrissylemaire_genai-claude-openai-activity-7217178595159404544-DTtF) )

### Roadmaps and their relationship to bread going stale
Kent Beck weighs in - guess this applies to the backlog as well. At least that is our experience at work, these days we try to keep stuff out of Jira (and as more loose roadmap ideas in Confluence, Mural or similar) unless we are able to execute soon-ish.

[A loaf of roadmap](https://tidyfirst.substack.com/p/a-loaf-of-roadmap)

### Control Flow - The Other Half of Integration Patterns
A nice pattern language and names for common control flow constructs in messaging.

[https://www.enterpriseintegrationpatterns.com/ramblings/queues_control_flow.html](https://www.enterpriseintegrationpatterns.com/ramblings/queues_control_flow.html)

The follow up about various means of control flow with queues is also great:

[https://www.enterpriseintegrationpatterns.com/ramblings/queues_flow_control.html](https://www.enterpriseintegrationpatterns.com/ramblings/queues_flow_control.html) but it is on the list!

### GDPR for busy developers
I like this technology-anchored overview of GDPR. But I think the author got Data Controller and Data Processor mixed up?

[https://event-driven.io/en/gdpr_for_busy_developers/](https://event-driven.io/en/gdpr_for_busy_developers/)

### Testcontainers - Integration Testing Using Docker In .NET
[TestContainers](https://www.milanjovanovic.tech/blog/testcontainers-integration-testing-using-docker-in-dotnet) in .NET for integration testing looks interesting. I have used GitHub Actions [Service Containers](https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/about-service-containers) for basic integration testing before, but having the ability to control them directly within the test lifecycle opens up additional scenarios and increases coherence of the tests.

### Claude AI Artifacts
[Claude AI](https://claude.ai/), one of the best LLM chatbots for code, has gained the ability to generate interactive, shareable artifacts, like simple HTML apps, Mermaid diagrams and SVG images. Super useful, I anticipate using that a lot.

[https://substack.com/@pragmaticengineer/p-148191807](https://substack.com/@pragmaticengineer/p-148191807)

### Interactive learning of CS basics
Via Hanselminutes - [Sam Rose](https://x.com/samwhoo) makes wonderful interactive explanations of basic CS concepts, like [queuing](https://encore.dev/blog/queueing) and [load balancing](https://samwho.dev/load-balancing/). Highly recommended, I learned something from each of them.

### Permify hits 1.0
At work we have been eyeballing Auth0/Okta FGA for a while. So it is nice to see traction in the Zanzibar-clone space with Permify hitting 1.0

[https://docs.permify.co/permify-overview/intro](Permify)

### Mind mapping like it's 2024
At work we are trying to modernize a messy part of our code base, and for me that means a return to mind mapping.
I have previously used [Mindomo](https://www.mindomo.com/) (commercial), and I heard good things about [Mindmup](https://www.mindmup.com/) (also commercial, but with generous free tier). But for now I am cheapskating it and running the actively developed Freemind fork [FreePlane](https://github.com/freeplane/freeplane)

```pwsh
scoop install freeplane
winget install Microsoft.OpenJDK.21
```

### Font with built-in syntax highlighting
Interesting deep dive into what is possible with OpenType, being able to syntax highlight a textarea is nice.

[https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)

### nuclei - open source, command-line DAST scanner
[Nuclei](https://github.com/projectdiscovery/nuclei) looks like a promising alternative to tools like OWASP Zap, Nessus and Burp suite, with a strong automation story given its command-line nature.

Currently, I am not actively looking into DAST (hands full with SAST tooling), but I am saving it for later. 

[https://www.helpnetsecurity.com/2024/08/26/nuclei-open-source-vulnerability-scanner/](https://www.helpnetsecurity.com/2024/08/26/nuclei-open-source-vulnerability-scanner/)
