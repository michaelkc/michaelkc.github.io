---
layout: post
title:  "Interesting stuff I found - August 2025"
date:   2025-08-08 14:27:00 +0200
---
### Hosting HTTP(s) enabled endpoints during .NET testing
[Hanselman identified a hackish way to do it for .NET 8](https://www.hanselman.com/blog/updating-to-net-8-updating-to-ihostbuilder-and-running-playwright-tests-within-nunit-headless-or-headed-on-any-os), 
and there is [official support coming in .NET 10](https://www.youtube.com/watch?v=nHUwqsRtPCU).

I might just hold off until .NET 10, but it will be nice, as it will allow less brittle integration tests of Blazor UIs, something that work very poorly against live environments atm.

### Best Current Practice for OAuth 2.0 Security
Spent a bit of time browsing through the new stuff (it was published in January). Even in the final version it still mandates the use of mTLS or DPoP for public client refresh tokens, something the [Duende folks decided was actually not useful](https://duendesoftware.com/blog/20240405-refresh-token-reuse/) when they dropped their rotation-by-default policy around [draft 26](https://datatracker.ietf.org/doc/draft-ietf-oauth-security-topics/26/).

Anyway, the recommendation for me is clear: Make everything confidential clients going forward, use BFF if you have to.

[RFC9700 - Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html)

### Blazor PacMan
Oldie but goldie

[Blazor PacMan](https://dunnhq.com/pacman/)

### PostmarketOS - Self-hosting a cluster on old phones
I find the idea of a home-made cluster of old phones strangely appealing, and PostmarketOS is doing the hard work of making it happen. 
Unfortunately, many old phones are so locked-down they are nothing more than e-waste, and for real world usage 
I think you would want to be able to remove the batteries to avoid making a huge fire hazard. But all that compute...fun stuff could be made.

[Self-hosting a cluster on old phones](https://hackaday.com/2025/04/09/self-hosting-a-cluster-on-old-phones/)

### Pinball (and Batman)
Played on a [Batman '66](https://www.ipdb.org/machine.cgi?id=6354) today. I miss daily pinball (since [Alien Poker](https://www.ipdb.org/machine.cgi?id=48) at work broke :-/) and 1966 Batman.

### Metalama in Linqpad
Query source code with Linq - in Linqpad. Very cool, opens up many of the ad hoc query scenarios that tools like NDepend excels at. 

[Inspecting source code and dependencies using LINQPad](https://doc.metalama.net/conceptual/introspection/linqpad)

### Nowgrep and RipGrep
Interesting to see if [Nowgrep](https://x.com/CharlieMQV/status/1957552694186418228?t=1IpD8H_qo2luEjrDjNp5Jg) can be turned into a viable product, until then [RipGrep](https://github.com/BurntSushi/ripgrep) will do.

`winget install BurntSushi.ripgrep.MSVC`

Having either tool integrated in [Total Commander](https://www.ghisler.com/) search (like Everything) would be even greater. I love Total Commander search, but the combination of node_modules and the .git folders (if you are searching hidden files) 
acts like a tar pit....

### BlendOS
Inspired by DHH and [Omarchy](https://omarchy.org/), I am dabbling with Linux again outside of work, on an old laptop. BlendOS is a representative of an interesting new approach: 
Run the core OS (here Arch) more or less immutable, that is packages are defined and built to a "system image" based on a "track"
(think Phone OS firmware upgrade, with tracks primarily concerned with the Window Manager), then Flatpaks are layered on top for "native"
applications. This is supplemented with "containers", where different distributions (e.g. Ubuntu) can be run inside containers. 
There is also a container that can run Android apps using [WayDroid](https://waydro.id/).

[BlendOS](https://blendos.co/)

### GlazeVM / Tiling window managers
Also inspired by DHH, I gave tiling Window Managers a look. Since i run mostly Windows, I ended up trying out GlazeVM. I can certainly see the appeal, 
but I quickly realized that I do not currently have the mental capacity for such a monumental shift in my daily driver setup. If I get some free time, I will give GlazeWM (or Hyprland) another look though, 
it seems solid.

[GlazeWM](https://github.com/glzr-io/glazewm)

### Practical vs. Strict Semantic Versioning
An older article I saw referenced. Should you follow SemVer strictly, and bump major version for _any_ public change? And does that give you a "golden ticket" for breaking stuff all the time?
Or should you only bump major when something significant _and_ necessary (for new features etc.) change, then document a migration path?
It is a hard call, because on the consumer end, I absolutely do not want to deal with a lot of breakage when bumping non-major versions on a range of components all the time. 
Then again, my experience tells me he is absolutely right in that if you increment major all the time, people will stay on the old versions...

[Practical vs. Strict Semantic Versioning](https://aaronstannard.com/oss-semver/)

### Rebus Sagas
I was implementing a Rebus Saga at work for reconciling event replicas, and this article was very helpful.

[Long-running business processes in C# with Rebus on Azure](https://seankearon.me/posts/2020/12/rebus-sagas-csharp/)
