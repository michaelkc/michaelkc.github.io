---
layout: post
title:  "Interesting stuff i found - May 2025"
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

and came away with a few insights:

- forget metrics (we run PaaS+ services for everything)
- we need to do something about "dumbing down" logs for our mandated o11y "0.9" platform, which drops log lines at too high cardinality (!)
- we need to move our o11y "1.5" platform instrumentation closer to "canonical logs", wide events with high cardinality. We already do request logging, so filling in the context there could work
- "a practitioners guide" has a great list of candidate dimensions for those wide events. 
   - emitting completely static or easily deriveable information (like slack channel) irks me when we pay for ingress though, but we already use several of these.
   - I like the idea of emitting cpu_count and memory_mb, and their dynamic utilization. An example of rolling metrics into wide events.

- as we make that move, we need to check up on log context and async-await / exceptions in 2025 [A New Pattern for Exception Logging](https://blog.stephencleary.com/2020/06/a-new-pattern-for-exception-logging.html)
- something like [OpenTelemetry / ADX](https://learn.microsoft.com/en-us/azure/data-explorer/open-telemetry-connector?tabs=command-line) / [Raw ADX with long retention](https://mortenknudsen.net/?p=575) could be interesting from a cost perspective, but not sure if we have the manpower to operate it

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
