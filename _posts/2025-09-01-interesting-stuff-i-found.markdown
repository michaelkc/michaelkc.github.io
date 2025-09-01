---
layout: post
title:  "Interesting stuff i found - September 2025"
date:   2025-09-01 07:49:00 +0200
---
### Refactoring Stubborn, Legacy Codebases
Stripe rediscovers that strong typing is great, unfortunately their code base is in Ruby so they have to write a type checker themselves :P

I do like the approach of gradual rollout though, and the architectural-constraints-as-code approach is something I also use on complex projects 
(usually [NetArchTest](https://github.com/BenMorris/NetArchTest/) but I am not sure it is maintained anymore?) 

[Refactoring Stubborn, Legacy Codebases](https://www.infoq.com/presentations/refactoring-legacy-codebases/)

### Mackie's Pizza
If you live in Aarhus, you probably remember Mackie's Pizza. It turns out one of the people who made pizza there now has a food truck

[Mackie's Pizza](https://mackiespizzatruck.dk/om-mackies/)

### TUnit
Another contender in the NUnit/MSTest/XUnit space. Since I maintain code in both .NET Framework Classic and .NET 8+, a framework that can work in both is appealing.
Not sure how Playwright integration looks atm, but one to watch.

[Converting an xUnit test project to TUnit](https://andrewlock.net/converting-an-xunit-project-to-tunit/)

### Decision tree for app authentication
One of the greatest features of public cloud is the ability to simply not have any passwords to steal, i.e. managed identities. While I have previously been bitten 
by the fact that Azure Managed Identities do not have a SLA (and they started running slowly), I still promote and use them heavily.

Workload identity federatuib is also great if your platform supports it. Certs are a bit of a pain, but still better than rotating client secrets...

[Decision tree for app authentication](https://x.com/merill/status/1718897891018965266?t=sx3hI-hS2SAT4K5KNsvbyA)


