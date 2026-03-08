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