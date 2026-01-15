---
layout: post
title:  "Interesting stuff I found - May 2025"
date:   2025-05-06 18:10:00 +0200
---
### OpenCodex
Someone forked [OpenAI codex](https://github.com/openai/codex) and made it able to run on any model, including local `ollama`. Pretty cool, although with the lack of sandboxing abilities, I am not going to run it on work code at this point. But I think I will give it a go  for some of my at-home hobby stuff.

[OpenCodex](https://github.com/ymichael/open-codex)

### Conference - SecAppDev
There is little security training out there which specifically targets application security. I previously enjoyed [Hack yourself first](https://www.pluralsight.com/courses/hack-yourself-first) and judging from the [presentations from previous years](https://secappdev.org/previous/), this looks like a great way to refresh and get in on the latest developments. The scheduling sucks though, do they not know that [Europe is closed for vacation during the summer](https://knowyourmeme.com/photos/2092429-twitter-x)? 😋

[SecAppDev](https://secappdev.org/)

### Conference - Troopers
I have looked at Troopers for a few years, but I think much of the content is too pentester+ focused for my taste. Not going this year, but will keep looking.

[Troopers](https://troopers.de/)

### lazygit
Like Dive for containers, a wonderful TUI for Git. Makes it easy to clean up those pesky left-behind branches post-merge.

[lazygit](https://github.com/jesseduffield/lazygit)

### Vibe coding 12.000 lines of code per day
[Vibe coding 12.000 lines of code each day sound absolutely insane](https://www.linkedin.com/posts/realgenekim_vibe-coding-workshop-for-leaders-september-activity-7325638022572429314-HP7m) ([archive](http://web.archive.org/web/20250509070022/https://itrevolution.com/articles/vibe-coding-workshop-for-leaders/)) and I have a hard time believing that is actually useful, maintainable code. But I guess Gene Kim has some credibility from his DORA work?

Maybe they are taking a page out of Erik Meijers ["embrace the chaos"](https://x.com/headinthebox/status/1918030539958972507), and just letting the AI brute force things with no abstractions, given that no human is ever going to look at it? I have not seen that work well yet though, but maybe they have?

### Observability 2.0 & wide events - the backlog
I have been gnawing my way through my "Observability" backlog:

- [A Practitioner's Guide to Wide Events ](https://jeremymorrell.dev/blog/a-practitioners-guide-to-wide-events/)
- [The bridge from observability 1.0 to observability 2.0 is made up of logs, not metrics](https://www.honeycomb.io/resources/bridge-from-observability1dot0-2dot0-logs-not-metrics)
- [The Amazon docs mentioned in the above paper](https://aws.amazon.com/builders-library/instrumenting-distributed-systems-for-operational-visibility/#Request_log_best_practices)
- [How much instrumentation is enough / when am I done?](https://blog.toshokelectric.com/blog/how-much-is-enough/)
- [Replacing testing with observability in the age of non-deterministic AI generated code](https://www.linkedin.com/posts/gergelyorosz_one-interesting-outcome-of-building-ai-applications-activity-7325520762339999762-FOer)

and came away with a few insights:

- forget metrics (we run PaaS+ services for everything)
- we need to do something about "dumbing down" logs for our mandated o11y "0.9" platform, which drops log lines at too high cardinality (!)
- we need to move our o11y "1.5" platform instrumentation closer to "canonical logs", wide events with high cardinality. We already do request logging, so filling in the context there could work
- "a practitioners guide" has a great list of candidate dimensions for those wide events. 
   - emitting completely static or easily deriveable information (like slack channel) irks me when we pay for ingress though, but we already use several of these.
   - I like the idea of emitting cpu_count and memory_mb, and their dynamic utilization. An example of rolling metrics into wide events.

- as we make that move, we need to check up on log context and async-await / exceptions in 2025 [A New Pattern for Exception Logging](https://blog.stephencleary.com/2020/06/a-new-pattern-for-exception-logging.html)
- something like [OpenTelemetry / ADX](https://learn.microsoft.com/en-us/azure/data-explorer/open-telemetry-connector?tabs=command-line) / [Raw ADX with long retention](https://mortenknudsen.net/?p=575) could be interesting from a cost perspective, but not sure if we have the manpower to operate it
- we should switch primary focus from comprehensive test coverage to comprehensive monitoring pre/post deployment/release

### AuthZEN
AuthZen looks interesting in that it defines a technology-agnostic way to communicate subject/resource/action/context between PEP (e.g. API middleware) and PDP (e.g. FGA, a custom RBAC solution or similar)

```
{
  "subject": {
    "type": "user",
    "id": "alice@acmecorp.com"
  },
  "resource": {
    "type": "account",
    "id": "123"
  },
  "action": {
    "name": "can_read",
    "properties": {
      "method": "GET"
    }
  },
  "context": {
    "time": "1985-10-26T01:22-07:00"
  }
}
```
Something to watch, especially in terms of vendor support as the spec matures.

### (Naive) Reuse considered harmful
Having worked with providing externalized CIAM services and integration for much of my career, this clicks. Rarely do people consider the availability impact of taking on external dependencies without excessive nudging, and a service-is-a-service (with no consideration for operational characteristics) is, unfortunately, also a classic. 
As others have put it "Duplication is cheaper than the wrong abstraction".

[(Naive) Reuse considered harmful](https://architectelevator.com/architecture/reuse-harmful/)

### Amazon 2>0, 1>2, Rule of three
In the same vein, I came across this discussion of how Amazon prefers duplication (of services with the same or multi-modal operational characteristics, presumably) initially to prevent stifling innovation, but seeks consolidation down the line. Similarly, the rule of three warns against premature abstraction of the small stuff, with too few concrete cases the risk of getting it wrong is high.

[A Lesson In Effective Innovation From Amazon](https://www.linkedin.com/pulse/lesson-effective-innovation-from-amazon-bill-franks/)

[Rule of three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))

### Duplicati Backup
After reading I set it up in about 30 minutes and am now backing up my home OneDrive. The experience was very smooth.

[https://www.xda-developers.com/finally-started-using-duplicati-should-have-sooner/](https://www.xda-developers.com/finally-started-using-duplicati-should-have-sooner/)

### AnythingLLM
Found AnythingLLM, a nice all-in-one, offline capable solution for AI agents (haven't tested) and RAG.

Everything is abstracted; it runs out of a Docker container, and maintains its own vector database for embeddings. The LLM part is handled by a provider, e.g. OpenAI API or local `ollama` 
(which I am using, as I do not want my RAG'd personal documents leaving my desktop). Install is [easy](https://github.com/Mintplex-Labs/anything-llm/blob/master/docker/HOW_TO_USE_DOCKER.md).

My RAG use "for fun" use cases is feeding it the contents of this blog (easy) and emails I sent over the years (harder). 

The former works fine, the latter has [some](https://github.com/Mintplex-Labs/anything-llm/blob/4b09a065908d572c4527a1962c25b74749f4cc55/collector/utils/constants.js#L32) [support](https://github.com/Mintplex-Labs/anything-llm/issues/102), but seems to choke on my particular mbox format.

The whole experience has been very smooth, it just worked OOTB. This is more than I can say for other, similar products I have tried in the past.

[AnythingLLM](https://anythingllm.com/)

### Claude system prompts
Interesting to see what they are seeding Claude with. I wonder why they need to call out explicitly that Donald Trump is president, but it might be related to a training cutoff very close to the election?

[Anthropic system prompts](https://docs.anthropic.com/en/release-notes/system-prompts)

### Pico CSS
I needed a nice looking CSS framework for some test applications at work. Having done very little frontend work in recent times (I get by with MudBlazor/Blazor and focus on the APIs), I considered looking into
Tailwind CSS, which seems to be very popular. But I wanted something less ambitious, with fewer classes needed, no JavaScript and loadable from a CDN without a client side build pipeline.

That brought me to Pico CSS, which looks nice out of the box and has the most essential components styled. It is not big on grid systems and layouting in general, but I did not need this, so it was perfect for
my use case. Recommended for simple stuff.

[Pico CSS](https://picocss.com/)

### Windows Administrator Protection
Evolving UAC and [sudo for Windows](https://learn.microsoft.com/en-us/windows/advanced-settings/sudo/?wt.mc_id=windows_inproduct_sudo), Administrator Protection offers an alternative to Admin by Request, Intune PEM 
and running a separate admin account with runas. Not available yet outside of preview, but will be interesting to see how it works when it is mainstream released. 

My guess is that it will work well - running as non-admin is not too difficult these days (unless you need to debug code running in IIS, that is).

[Administrator Protection](https://blogs.windows.com/windowsdeveloper/2025/05/19/enhance-your-application-security-with-administrator-protection/)
