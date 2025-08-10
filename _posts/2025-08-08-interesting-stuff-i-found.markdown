---
layout: post
title:  "Interesting stuff i found - August 2025"
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
