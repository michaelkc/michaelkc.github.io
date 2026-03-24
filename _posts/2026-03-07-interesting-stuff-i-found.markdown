---
layout: post
title:  "Interesting stuff I found - March 2026"
date:   2026-03-07 14:49:00 +0100
---
### Michaelkc.Extensions.Configuration.Doppler
Not found, but created - a .NET configuration provider for [Doppler](https://www.doppler.com/), something they seemingly intended on delivering 4 years ago, but never finished. It turned out somebody already [did this](https://github.com/anktsrkr/DopplerConfigurationProvider) but it was a fun little exercise in agentic coding, so I wrapped it up. Maybe you like Apache license better than MIT ;-)

In the sample, I also demonstrate a technique I have previously used with Azure Key Vault, where an [entire JSON configuration object is loaded out of a single key](https://github.com/michaelkc/Michaelkc.Extensions.Configuration.Doppler/blob/main/samples/SampleApp/Program.cs#L8). This allows easy transformation from appsettings.json to Doppler (and with Doppler the editing experience is okayish, unlike Key Vault where you more or less need custom tooling to pull it off) 

It also gave me a chance to apply [nuget trusted publishing](https://andrewlock.net/easily-publishing-nuget-packages-from-github-actions-with-trusted-publishing/) 

[Michaelkc.Extensions.Configuration.Doppler](https://github.com/michaelkc/Michaelkc.Extensions.Configuration.Doppler)

[Michaelkc.Extensions.Configuration.Doppler package](https://www.nuget.org/packages/Michaelkc.Extensions.Configuration.Doppler)

### A Language For Agents
Agents prefer strong typing, loose syntax. Python (significant whitespace) and dynamic languages in general are not ideal.

To the list I would add compiled languages where source is not available outright, but that can be [somewhat mitigated with skills](https://github.com/davidfowl/dotnet-skillz/blob/main/skills/ilspy-decompile/SKILL.md).

[A Language For Agents](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/)

### "Nordic" ANSI keyboards on laptops
My old Thinkpad is dying, and I am in the market for a new one. To my dismay, [HP and Asus has started supplying the nordic market with ANSI-keyboard](https://www.doc.ic.ac.uk/~nuric/posts/hardware/why-do-some-uk-laptops-come-with-a-us-ansi-keyboard-layout/) (one-row enter key vs the traditional two-row ISO variant), with nordic characters painted on. 

This bums me out, as [HP is making some really slick hardware at a good price point](https://www.xda-developers.com/hp-omnibook-ultra-flip-review/). But not going to retrain all that muscle memory. I guess Lenovo will get my business again...

EDIT 24/03: Picked up a [Lenovo Yoga Aura 14" with Intel U7-258V and 32 GB ram](https://psref.lenovo.com/Detail/Yoga_Slim_7_14ILL10?M=83JX00AAMX) for 5.500 DKR (~USD 850), 
by trading in an old[^1] PC. 

[^1]: How old? Let's just say its CPU was dual core [BobCat](https://en.wikipedia.org/wiki/Bobcat_(microarchitecture)) 

### Minions
Price for best name for "semi-autonomous coding agents" goes to Stripe - I hope "Minions" will take as an industry standard. But what is up with that page background?

[Minions: Stripe’s one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)

### Peli's Agent Factory
Similar in spirit to Minions, but built on regular GitHub Actions / GitHub Copilot (or Codex/Claude/Gemini), the agent factory looks really interesting. 
I have started trialing some of the workflows on a non-critical repo.

[Welcome to Peli's Agent Factory](https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/)
