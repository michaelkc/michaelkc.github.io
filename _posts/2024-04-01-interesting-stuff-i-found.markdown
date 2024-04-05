---
layout: post
title:  "Interesting stuff i found - april 2024"
date:   2024-04-01 10:18:20 +0200
---
### .NET Smart Components
LLMs gets embedded everywhere, interesting to see how this one plays out. Still unsupported preview though.

[https://devblogs.microsoft.com/dotnet/introducing-dotnet-smart-components/](https://devblogs.microsoft.com/dotnet/introducing-dotnet-smart-components/)

### Observability Cost Crisis and Observability 2.0
As OpenTelemetry gains traction, these are good points from Charity Majors. We are defintely feeling the pains described with our current stacks (which are more like observability 0.5).

[https://www.honeycomb.io/blog/cost-crisis-observability-tooling](https://www.honeycomb.io/blog/cost-crisis-observability-tooling)

The concept of canonical log lines makes sense - not much experience yet, but I suppose there is a way to enrich the OpenTelemetry traces to achieve this?

[https://baselime.io/blog/canonical-log-lines](https://baselime.io/blog/canonical-log-lines)

### SchemaSpy and  SQLite Schema Diagram
Auto-generating documentation with SchemaSpy would be nice to supplement developer docs. Might go well with an Internal Developer Platform like backstage.

[https://github.com/schemaspy/schemaspy](https://github.com/schemaspy/schemaspy)

For lightweight "what is in this SQLite DB" (where I usually use Linqpad), this looks useful

[https://gitlab.com/Screwtapello/sqlite-schema-diagram](https://gitlab.com/Screwtapello/sqlite-schema-diagram)

### Tricking ChatGPT code interpreter to write and test a SQLite extension in C
We are getting [there](https://alphacentauri.fandom.com/wiki/Digital_Sentience)

>We are no longer particularly in the business of writing software to perform specific tasks. We now teach the software how to learn, and in the primary bonding process it molds itself around the task to be performed. The feedback loop never really ends, so a tenth year polysentience can be a priceless jewel or a psychotic wreck, but it is the primary bonding--the childhood, if you will--that has the most far-reaching repercussions.

[https://simonwillison.net/2024/Mar/23/building-c-extensions-for-sqlite-with-chatgpt-code-interpreter/](https://simonwillison.net/2024/Mar/23/building-c-extensions-for-sqlite-with-chatgpt-code-interpreter/)

### Monolith - save web pages with assets (like mht)
Might come in handy every now and then.

[https://github.com/Y2Z/monolith](https://github.com/Y2Z/monolith)

### The applicability of no-code-low-code ([loco](https://translate.google.com/?sl=es&tl=en&text=loco&op=translate)?)
I like the concept of a succession plan, where do we go if we outgrow the limits of the current solution?

Incidentially had a conversation at work today why our target architecture for CIAM involves a SaaS service _and_ a customized service running on PaaS - because the limits of the SaaS service would not work with current and expected future requirements.

[https://michaelfeathers.substack.com/p/no-code-no-problem](https://michaelfeathers.substack.com/p/no-code-no-problem)

### Favor real dependencies for unit testing (or "use functional core, imperative shell")
[https://stackoverflow.blog/2022/01/03/favor-real-dependencies-for-unit-testing](https://stackoverflow.blog/2022/01/03/favor-real-dependencies-for-unit-testing)

The [DDD trilemma](https://enterprisecraftsmanship.com/posts/domain-model-purity-completeness/) goes into more details about the tradeoff. Sometimes it is difficult to front/backload impure dependencies, and you need the controller to orchestrate the transition between pure/impure, or at least an [impurium sandwich](https://blog.ploeh.dk/2020/03/02/impureim-sandwich/)

Also found this old gem [https://spark-framework.net/docs/introduction/](https://spark-framework.net/docs/introduction/)

### Spark
Not sure I need another framework right now (moving forward with Blazor WASM for next project), but this looks likae an opinionated backend-driven front-end stack built on .NET (like Rails maybe?), something I have not seen in a while (remember FUBUMVC?)

[https://spark-framework.net/docs/introduction/](https://spark-framework.net/docs/introduction/)

### Equalizer APO
Spotify Desktop finally has an equalizer after many years, but if you play back music in something else, this is useful:

[https://sourceforge.net/projects/equalizerapo/](https://sourceforge.net/projects/equalizerapo/)

[https://sourceforge.net/projects/peace-equalizer-apo-extension/](https://sourceforge.net/projects/peace-equalizer-apo-extension/)

### Writing async/await from scratch in C# with Stephen Toub
I strongly prefer text to video/audio when consuming technical content, but this is very, very good:

[https://www.youtube.com/watch?v=R-z2Hv-7nxk&list=PLdo4fOcmZ0oVlZCosDDwS9fkVtrLYxGt6&index=2](https://www.youtube.com/watch?v=R-z2Hv-7nxk&list=PLdo4fOcmZ0oVlZCosDDwS9fkVtrLYxGt6&index=2)
