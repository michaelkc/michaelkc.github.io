---
layout: post
title:  "Interesting stuff i found - october 2024"
date:   2024-10-05 21:48:00 +0200
---
### Service Granularity
I liked the notion of "integration" and "disintegration" drivers. In my team, we run about 20 services. I sometimes wonder if we have the granularity correct and/or if our team is too small...

[Software service granularity: Getting it right](https://www.thoughtworks.com/insights/podcasts/technology-podcasts/software-service-granularity-getting-it-right#Transcript)

### Microsoft.FeatureManagement
This is probably not as spiffy as LaunchDarkly or even the stuff in (ridiculously expensive) Azure App Configuration, but as a free service I could see myself using this in combination with my modified Key Vault config provider (which can reload on an interval; something which is required, as the feature is built on top of .NET configuration).

[.NET Feature Management](https://learn.microsoft.com/en-us/azure/azure-app-configuration/feature-management-dotnet-reference)

[https://www.milanjovanovic.tech/blog/feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing](https://www.milanjovanovic.tech/blog/feature-flags-in-dotnet-and-how-i-use-them-for-ab-testing)

### Microsoft Clarity
Saw a demo at work the other day - it is pretty crazy to be able to track frustrated users attempting on stuff you did not intend them to click on, while overlooking the button you thought they would see.

They are very honest about

- it is and will remain a free service
- they run it, because they gets loads of profiling data sent in they can use themselves

[https://clarity.microsoft.com/](https://clarity.microsoft.com/)

### Cloud Cloak
Great stuff - hiding secrets in Azure and elsewhere while streaming.

[https://github.com/microsoft/cloudcloak](https://github.com/microsoft/cloudcloak)
