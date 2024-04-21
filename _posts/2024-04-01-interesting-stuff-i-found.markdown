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
Are we are getting [there](https://alphacentauri.fandom.com/wiki/Digital_Sentience) or is it the [stochastic parrot squawking](https://en.wikipedia.org/wiki/Stochastic_parrot)?

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
Not sure I need another framework right now (moving forward with Blazor WASM for next project), but this looks likae an opinionated backend-driven front-end stack built on .NET (like Rails maybe?), something I have not seen in a while (remember [FubuMVC](https://fubumvc.github.io/)?)

[https://spark-framework.net/docs/introduction/](https://spark-framework.net/docs/introduction/)

### Equalizer APO
Spotify Desktop finally has an equalizer after many years, but if you play back music in something else, this is useful:

[https://sourceforge.net/projects/equalizerapo/](https://sourceforge.net/projects/equalizerapo/)

[https://sourceforge.net/projects/peace-equalizer-apo-extension/](https://sourceforge.net/projects/peace-equalizer-apo-extension/)

### Writing async/await from scratch in C# with Stephen Toub
I strongly prefer text to video/audio when consuming technical content, but this is very, very good:

[https://www.youtube.com/watch?v=R-z2Hv-7nxk&list=PLdo4fOcmZ0oVlZCosDDwS9fkVtrLYxGt6&index=2](https://www.youtube.com/watch?v=R-z2Hv-7nxk&list=PLdo4fOcmZ0oVlZCosDDwS9fkVtrLYxGt6&index=2)

### Device Bound Session Credentials - binding cookies to devices
[Google killed token binding](https://youtu.be/BkigVNNSurI?si=sJOww_--GSDvbnuL&t=1058) but now they are pushing a new approach to prevent cookie theft. Interesting to see if that gains traction (and if it will also be [killed by Google](https://killedbygoogle.com/).

[https://blog.chromium.org/2024/04/fighting-cookie-theft-using-device.html](https://blog.chromium.org/2024/04/fighting-cookie-theft-using-device.html)

### Bruno - a better Postman
Did a bit of trialing after seeing it in the Tech Radar blips - it does work (with a [workaround for using OAuth at the collection level](https://github.com/usebruno/bruno/issues/1704#issuecomment-2002763091)) but it is clearly still work-in-progress. For instance, exporting the collection did not include any Auth setup.

But give it a year or so, and I see this replacing Postman for me.

[https://www.usebruno.com/](https://www.usebruno.com/)

### Microsoft SBOM
Another Tech Radar blip (alongside the many, many LLM/AI blips...), Microsoft SBOM is pretty easy to use out of the box. I am still not sure how SBOM relates to other supply-chain attack quelching initiatives like [signed nuget packages](https://learn.microsoft.com/en-us/nuget/create-packages/sign-a-package) and [nuget lockfiles](https://devblogs.microsoft.com/nuget/enable-repeatable-package-restores-using-a-lock-file/)

[https://github.com/microsoft/sbom-tool](https://github.com/microsoft/sbom-tool)

### Security Theater vs Resilience infographic
There is so much security theater in IT, how to spot it

[https://hachyderm.io/@shortridge/111262394587906664](https://hachyderm.io/@shortridge/111262394587906664)

### Data Annotation Validation of .NET Configuration
A lot simpler than [CUE](https://cuelang.org/) and [PKL](https://pkl-lang.org/), but I see two issues:

- logging startup issues in ASP.NET properly is hard [[1]](https://nblumhardt.com/2020/10/bootstrap-logger/)  [[2]](https://github.com/dotnet/aspnetcore/issues/19807) [[3]](https://github.com/MV10/GenericHostBuilderLogger#generichostbuilderlogger)
- it is difficult to apply at configuration rollout / "deployment" time (when my app is starting up, it is too late to find out it is missing config!)

[https://www.milanjovanovic.tech/blog/adding-validation-to-the-options-pattern-in-asp-net-core](https://www.milanjovanovic.tech/blog/adding-validation-to-the-options-pattern-in-asp-net-core)


### Generative AI beyond developer assistance - CodeScene ACE
Generative AI is moving beyond developer assistance, examples are GitHub AutoFix and CodeScene ACE. Interesting to see where it goes from here. Stuff like ACE could be a key factor in making agents like ~~[Devin](https://www.cognition-labs.com/introducing-devin)~~ [SWE-agent](https://github.com/princeton-nlp/SWE-agent) work, without producing a long stream of low-quality, unmaintainable code.

[https://codescene.com/hubfs/whitepapers/Refactoring-vs-Refuctoring-Advancing-the-state-of-AI-automated-code-improvements.pdf](https://codescene.com/hubfs/whitepapers/Refactoring-vs-Refuctoring-Advancing-the-state-of-AI-automated-code-improvements.pdf)

[https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning](https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning)

### Shipping to production
Been a long time since I did "YOLO Shipping" for anything important, but I sometimes dream of getting a more mature setup with staged rollout and telemetry monitoring, which could support faster iteration. We can move fast if we have to, but cadence tends to slow down when we do not, spending too much time verifying in preproduction.

[https://newsletter.pragmaticengineer.com/p/shipping-to-production](https://newsletter.pragmaticengineer.com/p/shipping-to-production)

### OAuth: "grant" vs "flow" vs "grant type" 
Not sure if being precise here is super important, but kudos for taking the time to hunt down the defintions.

[https://aaronparecki.com/2024/03/29/3/oauth-terminology](https://aaronparecki.com/2024/03/29/3/oauth-terminology)

### Semantic conventions for observability
The simple stuff like namespacing key names makes a lot of sense, have not yet dug deep enough to digest the rest

[https://www.honeycomb.io/blog/effective-trace-instrumentation-semantic-conventions](https://www.honeycomb.io/blog/effective-trace-instrumentation-semantic-conventions)

### LM Studio
While not on winget yet, [https://lmstudio.ai/](https://lmstudio.ai/) is a very easy way to get up-and-running with publicly available LLM models like Llama 3.

### Tailscale
[Late to the party](https://www.hanselman.com/blog/using-tailscale-on-windows-to-network-more-easily-with-wsl2-and-visual-studio-code), but Tailscale offers something unique: A seamless VPN across your home network and mobile devices, with options to open it up to others (parent support network for fixing that pesky printer?). And with [funnel](https://tailscale.com/kb/1223/funnel), you can expose devices behind your firewall permanently on the internet (think cloudflared, but permanent).

Both impressive (it works seamlessly in my limited experience) and scary, if you consider how it could backdoor the entire network. Of course, this kind of software has no role on a corporate network, something I consider more and more important these days.

[https://tailscale.com/](https://tailscale.com/)

### Oracle Cloud Free Tier
Oracle Cloud [free tier](https://free-for.dev/#/?id=major-cloud-providers) is very generous, but while the small x64 VMs provision without issue, the 4-core 24GB ram Ampere ARM instance can be tough to provision, as the data centers are often out of capacity (for the free tier, presumably).

One guy figured out to use scripting to force provisioning as soon as capacity frees up: [https://archive.ph/OjSqw](https://archive.ph/OjSqw). No luck yet here, but I keep trying every 15 minutes...
