---
layout: post
title:  "Interesting stuff i found - February 2025"
date:   2025-02-10 22:09:00 +0200
---
### Using Nix with GitHub Actions
Nix is great for ensuring reproducable environments, I am going to trial this approach for a few GH Actions workflows I have for
working with automated testing of DbUp-revisioned schemas on live data.

For run-of-the-mill builds, NUKE + GitHub Actions works very well, so not much need there. 

[Streamline your GitHub Actions dependencies using Nix](https://determinate.systems/posts/nix-github-actions/)

### HTMX for ASP.NET Core Developers
At work we mostly use Blazor, but it is not without issues. I would like to trial HTMX with Razor Pages/Static Blazor, 
it looks like a solid alternative (in the vein of Rails Turbo/Stimulus) in between old-school server-side web and Blazor.
[https://www.jetbrains.com/guide/dotnet/tutorials/htmx-aspnetcore/](https://www.jetbrains.com/guide/dotnet/tutorials/htmx-aspnetcore/)

### Build your own voice assistant and run it locally
Whisper, Ollama and Bark, then stitch it together for a voice assitant with LLM "intelligence". My Python-foo is not strong, but it would be fun to use C# to recreate this. 

[https://blog.duy.dev/build-your-own-voice-assistant-and-run-it-locally/](https://blog.duy.dev/build-your-own-voice-assistant-and-run-it-locally/)

### An actual useful Blockchain case
Beyond Bitcoin (which I consider mostly evil, being an enabler/driver of corruption, terrorism, cyber crime and green house emissions), I had yet to see a use case for Blockchain, and the hype has mostly died down with the new LLM craze (some time before actually). But the other day at an event, I ran into an employee from [Partisia](https://www.partisia.com/about/), who described their actual useful software, which relies on Blockchain to reach consensus between multiple parties with no peer-to-peer trust. Interesting.

### Stripe on the common 4-step data migration process
While not at their scale or tech stack, we do operate a platform with ~0 downtime requirement at work. I have performed many migrations like this, I like
the explicit framing of the process presented.

[https://stripe.com/blog/online-migrations](https://stripe.com/blog/online-migrations)

### Replacing Exceptions as flow control
A great, quick-to-read series balancing pros and cons, with current best-practice (using LINQ SelectMany) applied.
I dabbled in Result<T> before, but fell into many of the traps listed. 

[https://andrewlock.net/working-with-the-result-pattern-part-1-replacing-exceptions-as-control-flow/](https://andrewlock.net/working-with-the-result-pattern-part-1-replacing-exceptions-as-control-flow/)

### Developer "Bad Days"
Interesting paper i skimmed - not a lot of hard conclusions, but I can relate to the pain of days where you feel you have a hard time making progress matching your expectations.

[Identifying Factors Contributing to "Bad Days" for
Software Developers: A Mixed-Methods Study](https://arxiv.org/pdf/2410.18379)

### Non-JS frontend alternatives for .NET Developers
I agree with the [critisism of Blazor going backwards in approachability](https://github.com/dotnet/aspnetcore/issues/60236) while chasing frontend trends (server-side prerendering etc.).
I hate having to split my Frontend feature organization across 2-3 projects, and having to debug weird issues when stuff runs on the server in prerendering steps quickly leads to me disabling all the "fun" stuff anyway.

Not sure I have the capacity to investigate alternatives, but I would like to find time for the [JetBrains HTMX series for ASP.NET Core Developers](https://www.jetbrains.com/guide/dotnet/tutorials/htmx-aspnetcore/) and perhaps spike a bit on [Hydro](https://usehydro.dev/) (which tickles my [Turbo/Hotwire](https://hotwired.dev/) envy)

EDIT 2025-02-24 Did a little [Hydro spike](https://github.com/michaelkc/hydro-passwords), ended up battling more than i liked with TailwindCSS (which is new to me, been using MudBlazor material and Bootstrap mostly) but Hydro itself performed well.
I also like the technique used by Hydro sample I based my work on, where they do dev-only work (here: do Tailwind CSS transform in the background) via an IHostedService.

Or I could just bite the bullet and invest in TypeScript/Angular, which is widely used at work...

### Can You Measure a Technology Team's Efficiency?
The article is partially paywalled, but the summary resonated with me: 

_If tech workers are doing measurable work, they're doing easy work. They're doing repetitious work. This work isn't the most valuable work, and you should minimize it when possible._

_If tech workers are adding huge value, such as inventing new things their company (or the world) hasn't seen, then their work is hard/impossible to measure. They can swag (guess), but not accurately predict their work._

[https://www.scarletink.com/p/can-you-measure-technology-teams-efficiency](https://www.scarletink.com/p/can-you-measure-technology-teams-efficiency)

### draw.io integration in VSCode (and GitHub)
It works flawlessly, and supplements the support in Confluence nicely. I can see myself using this for things Mermaidjs cannot visualize.

![100](/assets/images/100.drawio.svg)

[draw.io VSCode extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)

### Fluentd
A coworker had positive experience with using Fluentd to unify log streams from different sources. However in a world of .NET, seeing an [8 year old NLog target](https://github.com/fluent/NLog.Targets.Fluentd) as the only .NET option does not inspire confidence (but indicates a lot of work ahead). Similarly, the presence of a [Twitter plugin](https://www.fluentd.org/datasources/twitter) indicates that keeping up with sources is not a priority...

[https://www.fluentd.org/architecture](https://www.fluentd.org/architecture)

### Why dynamically-typed languages exist or "No one wants to program in a dynamically typed language"
I am sure [many would disagree](https://x.com/dhh/status/1329115220778823688), but I like the take that they exist mostly because they are easy to create,
while providing good ergonomics for small solutions (vs old-school staticly typed languages which offers poor ergonomics but scales to large solutions). 

That at least is the story of JavaScript, and each time I take a look at the [Python ecosystem](https://xkcd.com/1987/) I project the [signal of poor code quality](https://muhammad-rahmatullah.medium.com/wtf-per-minute-an-actual-measurement-for-code-quality-780914bf9d4b)

[No one wants to program in a dynamically typed language](https://x.com/relizarov/status/1869037223695581567)

### Hard code feature flags
There is certainly a place for hardcoded feature flags for not-done features when doing trunk-based development, but i think the author is missing the primary appeal of feature flags to many: [Decoupling deployment from release](https://www.thoughtworks.com/radar/techniques/decoupling-deployment-from-release). That wont work with hardcoded feature flags, but it can work with less capable systems than what the big feature flag vendors push. 

[https://code.mendhak.com/hardcode-feature-flags/](https://code.mendhak.com/hardcode-feature-flags/)
