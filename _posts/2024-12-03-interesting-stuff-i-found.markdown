---
layout: post
title:  "Interesting stuff i found - December 2024"
date:   2024-12-03 09:05:01 +0100
---
### Low-budget migration from .NET Startup-based hosting to minimal hosting
Minimal hosting is a requirement for onboarding Aspire, and I needed to convert a project where the integration test infrastructure relies heavily on Startup.

I had to adjust the code a bit, but the approach outlined here made the job a lot easier than a huge refactoring

[https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/](https://www.strathweb.com/2022/02/using-an-existing-startup-class-with-asp-net-6-minimal-hosting-model/)

### Viewing "roundtripped" C# code (C# -> IL -> C#)
Saw this used in a presentation

[https://sharplab.io/](https://sharplab.io/)

### Secret OPerationS & ZAP
I have been eyeing [SOPS](https://getsops.io/) for a while, and I got around to actually using it, as I needed to encrypt the contents of some YAML configuration files for [ZAP](https://www.zaproxy.org/) Automation Framework.

It turns out to be really easy to use when you have a Key Management service available, we are using Azure Key Vault and it works flawlessly. Recommended.

### SWEBOOK - An Evolving Body of Knowledge
A massive tome (400+ pages) attempting to cover software engineering. I did not read much of it, but judging from the ToC it seems comprehensive.

[https://www.computer.org/education/bodies-of-knowledge/software-engineering](https://www.computer.org/education/bodies-of-knowledge/software-engineering)

### Cloudypad - gaming on spot instances
Someone whipped together a script to provision and configure a AWS/Amazon spot VM with NVIDIA T4000 and steam games via Moonlight. That is an interesting concept, but with the cost estimates they provide something like Xbox Ultimate seems like a better deal.

[https://cloudypad.gg/](https://cloudypad.gg/)
