---
layout: post
title:  "Interesting stuff i found - december 2024"
date:   2024-12-03 09:05:01 +0100
---
### Low-budget migration from .NET Startup-based hosting to minimal hosting
Minimal hosting is a requirement for onboarding Aspire, and I needed to convert a project where the integration test infrastructure relies heavily on Startup.

I had to adjust the code a bit, but the approach outlined here made the job a lot easier than a huge refactoring

[https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/](https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/)

### Viewing "roundtripped" C# code (C# -> IL -> C#)
Saw this used in a presentation

[https://sharplab.io/](https://sharplab.io/)