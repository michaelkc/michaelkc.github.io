---
layout: post
title:  "Interesting stuff i found - august 2024"
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
