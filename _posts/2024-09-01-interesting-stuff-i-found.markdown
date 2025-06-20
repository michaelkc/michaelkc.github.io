---
layout: post
title:  "Interesting stuff i found - September 2024"
date:   2024-09-01 12:53:20 +0200
---
### GameNGen - generative AI recreating Doom in real-time
Impressive stuff, interesting to imagine possibilities in the future.

[Diffusion Models Are Real-Time Game Engines](https://gamengen.github.io/)

### The Nature of Code
Like the Sam Rose visualization of CS basics, [The Nature of Code](https://natureofcode.com/) explains and visualizes various natural phenomena. This could be useful for a bit of home teaching when the kids are older. Via Scott Hanselman.

### B-trees and database indexes
Same vibe, but here on a technical topic of which I am blissfully ignorant. I do remember falling asleep when reading [Fundamentals of Database Systems](https://www.amazon.com/Fundamentals-Database-Systems-Ramez-Elmasri/dp/0133970779) back in the day; it has served well as a monitor stand from time to time:

[https://planetscale.com/blog/btrees-and-database-indexes](https://planetscale.com/blog/btrees-and-database-indexes)

### How Uber tests payment (in production)
TL;DR staging environments cannot catch all bugs. I really like the "staged deploy to subset of production users" approach but when your market is not global but consist of ~50.000 potential users, getting useful feedback is tricky. Also the engineering challenge of running multiple copies of an application/service side-by-side (while presumably sharing persistent state in a forward/backward compatible way) is not trivial.

Would be nice to have this setup, but for now I am sticking to staging environments with fast rollback options (and sometimes feature flags), which is working ok for us.

[https://news.alvaroduran.com/p/cringey-but-true-how-uber-tests-payments](https://news.alvaroduran.com/p/cringey-but-true-how-uber-tests-payments)

### The Staff Engineer's Path
I just finished listening to the audio book of [The Staff Engineer's Path](https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/) by Tanya Reilly. Lots of good stuff, the author gathered up the resources referenced in the book here:

[https://www.noidea.dog/staff-resources](https://www.noidea.dog/staff-resources)

### Listening to epub books via Google Books
Nice tip from Paulo Lai - you can import epub books to Google Books, and have them read as audio books by speech synthesis. Since the latter has gotten so much better in recent years, this is a nice option for books which are not yet available as audio books.

[LinkedIn comment](https://www.linkedin.com/feed/update/urn:li:activity:7237553734879182848?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7237553734879182848%2C7239624545593139201%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287239624545593139201%2Curn%3Ali%3Aactivity%3A7237553734879182848%29)

### How Tech Giants make their money
Cannot vouch for the accuracy, but it looks plausible. Interesting visualization too

[How Tech Giants make their money](https://www.threads.net/@dataworld_feed/post/C_fPdaNK-Qv/)

### Dock and float Visual Studio tool windows
The struggle is real - this tip (CTRL-double-click tool window header) will come in real handy, when I once more accidentally pull out a Visual Studio tool window to float....

[https://devblogs.microsoft.com/visualstudio/easily-dock-and-float-tool-windows/](https://devblogs.microsoft.com/visualstudio/easily-dock-and-float-tool-windows/)

### Enhancing .NET Aspire Observability with Seq
Currently i use a combination of log files and AppInsights when running stuff locally. Moving to Aspire, OTEL and a local Seq instance would greatly enhance that experience, so this is definitely on the TODO:

[https://blog.datalust.co/enhancing-net-aspire-with-seq/](https://blog.datalust.co/enhancing-net-aspire-with-seq/)

### Semantic diff
I have been reviewing A LOT of changes lately. This led me to look for semantic diff tools (which understand the language semantics, instead of doing text compare).

[difftastic](https://difftastic.wilfred.me.uk/git.html#one-off-usage) is the only free option i found, and seems to work well from the command line. 
Unfortunately, no VS/vscode or GitHub pull request integration, for that you need to turn to commercial offerings like [SemanticDiff](https://semanticdiff.com/) or [GitClear](https://www.gitclear.com/best_github_alternative_pull_request_review_tool)

### ASP.NET Core Engineering Guidelines
Not updated since 2022, maybe they were just perfect, or they moved on? Anyway, it is interesting to see which things they chose to call out for a big, complex project like ASP.NET Core.

There are also some newer [docs](https://github.com/dotnet/aspnetcore/tree/main/docs) in source control.

[https://github.com/dotnet/aspnetcore/wiki/Engineering-guidelines](https://github.com/dotnet/aspnetcore/wiki/Engineering-guidelines)

### Fan-out work
When you make a change in something others depend on (e.g. deprecate a platform feature) this oftens generates a lot of work outside the team (e.g. platform consumers have to rework) which needs to be taken into account.

We often have features which we could resolve in days internally, but would generate months of work in the rest of the organization. Coordinating this with stakeholders can be tricky.

[https://www.rubick.com/fan-out-work/](https://www.rubick.com/fan-out-work/)
