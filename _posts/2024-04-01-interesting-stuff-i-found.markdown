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
