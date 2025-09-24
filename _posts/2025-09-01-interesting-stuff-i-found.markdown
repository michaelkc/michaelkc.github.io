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

Workload identity federation is also great if your platform supports it. Certs are a bit of a pain, but still better than rotating client secrets...

[Decision tree for app authentication](https://x.com/merill/status/1718897891018965266?t=sx3hI-hS2SAT4K5KNsvbyA)

### AutoHideMouseCursor
I have purchased an OLED screen, and of course I now have burn-in anxiety. So I have switched everything to dark mode, and am looking for tools to remove static elements from the screen.
AutoHideMouseCursor is an older but no-nonsense tool that will hide the mouse cursor after N seconds

[AutoHideMouseCursor](https://www.softwareok.com/?seite=Microsoft/AutoHideMouseCursor)

### TranslucentTB
Also in the "burn-in prevention" category, this tool allows control of the task bar. Install with

`winget install 9pf4kz2vn4w9`

[TranslucentTB](https://github.com/TranslucentTB/TranslucentTB)

### Rooting every Entra tenant
Insane vulnerability. I remember early Azure and the ACS, and have gone many rounds with SAML-based actor tokens - never without signatures though!
I guess it all still exists behind the scenes. 

Really shows why security infra legacy and bridging is not just a maintenance burden - it is also a ripe opportunity for holes and unintended access paths to creep in.

[One Token to rule them all - obtaining Global Admin in every Entra ID tenant via Actor tokens](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/)

### Azure RG Janitor
Nice little example of using Spectre.Console and the dotnet 10 features around scripting C#. I like TUIs almost as much as my favorite iconoclast [DHH](https://www.youtube.com/watch?v=gcwzWzC7gUA) does.

[cleanup-rg.cs](https://gist.github.com/davidfowl/5e049dcbdeaa485fbafdbc0b9feeaab7)

### Aikido Safe Chain
NPM [Supply chain security](https://www.microsoft.com/en-us/securityengineering/sdl/s2c2f) is a huge issue, this tool looks like an easy way to at least stop some of the malicious stuff being pushed again and again.

[Aikido Safe Chain](https://www.aikido.dev/blog/introducing-safe-chain)

### CloudKitchens Study on GenAI DevEx
A nice point-of-view on pratical usage of AI coding agents. I have not tried Cursor, but I find it interesting that they rate Copilot highly - need to look into that, as my use so far has not left me impressed.

[Study on GenAI DevEx](https://techblog.cloudkitchens.com/p/study-and-update-on-genai-devex)

### From CQRS and back - Netflix Tudum
Reading the article, I also question if this is not a case of too many resources leading to extreme over-engineering. I would think cloud services like CosmosDB (of which I am sure there is an alternative in AWS where Netflix lives) 
could handle the scale with read-your-writes, and even if it cannot, I would imagine ample opportunity to leverage output caching before reaching for dedicated read models with Kafka in between. 

I guess the takeaway is like Kelly writes: "Consistency at scale is easier than ever.". Many architectural patterns exists to handle extreme scale, which in itself is a shrinking concept as cloud services, networks and even [on-prem hardware](https://www.eveonline.com/news/view/a-history-of-eve-database-server-hardware) gets more and more powerful.

[Netflix revamps Tudum with RAW Hollow](https://www.infoq.com/news/2025/08/netflix-tudum-cqrs-raw-hollow/) (via the brilliant [Kelly Sommers](https://x.com/kellabyte/status/1957933408698400931))

### AZ-204
Passed the exam this month. I found the [Whizlabs](https://www.whizlabs.com/) material and practice tests quite nice for preparation, and reasonably priced, so a completely unbiased recommendation from here. Together with Microsoft Learn (which can be [used during the exam](https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience#accessing-microsoft-learn-during-your-certification-exam) but [beware](https://certs.msfthub.wiki/guide/takingtheexams/#microsoft-learn-during-your-exam)), that was what I needed to pass.

### Liberating structures & Open Practice Library
I do not have a use case right now, but these team practices seem like a nice catalog to get inspiration from, if you need to run team sessions or tighten up some internal processes.

[Liberating structures](https://www.liberatingstructures.com/) 
[Open Practice Library](https://openpracticelibrary.com) 
via [Gregor Hophe](https://www.linkedin.com/posts/ghohpe_architectelevator-liberatingstructures-activity-7361507837325295616-ljJj) - looking forward to attending his workshop next week!

### Vibe coding a "me-ware" tool - wslcd
I was annoyed that I could not `cd` to Windows paths (like `C:\foo\bar`) copied from [Total Commander](https://www.ghisler.com) to the inside of WSL (which mounts them under `/mnt/<drive letter>`). Copilot had little trouble conjuring up [wslcd](https://github.com/michaelkc/wslcd). I have not even looked at the code (beyond basic "is it deleting my drive" review), and it seems to be working well.

A fun exercise, and "my" first, actually useful Golang project. Perhaps long term using [zoxide](https://github.com/ajeetdsouza/zoxide) or even Mark Russinovich' new [jcd](https://learn.microsoft.com/en-us/sysinternals/downloads/jcd) would be a better option, but for now this tool solves exactly what annoyed me. 

### Azure Front Door Gateway Timeout issues
We have been troubleshooting an incident with Azure Front Door, which seems to have [lingered for a while](https://learn.microsoft.com/en-ie/answers/questions/1331370/front-door-responds-with-origintimeout-after-4-sec). I hope Microsoft will eventually produce a more robust solution of the root causes than retries...
