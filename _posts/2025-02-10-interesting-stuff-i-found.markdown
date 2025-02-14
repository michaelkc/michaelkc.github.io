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

Or I could just bite the bullet and invest in TypeScript/Angular, which is widely used at work...

### Can You Measure a Technology Team's Efficiency?
The article is partially paywalled, but the summary resonated with me: 

_If tech workers are doing measurable work, they're doing easy work. They're doing repetitious work. This work isn't the most valuable work, and you should minimize it when possible._

_If tech workers are adding huge value, such as inventing new things their company (or the world) hasn't seen, then their work is hard/impossible to measure. They can swag (guess), but not accurately predict their work._

[https://www.scarletink.com/p/can-you-measure-technology-teams-efficiency](https://www.scarletink.com/p/can-you-measure-technology-teams-efficiency)

### draw.io integration in VSCode (and GitHub)
It works flawlessly, and supplements the support in Confluence nicely. I can see myself using this for things Mermaidjs cannot visualize

[draw.io VSCode extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
