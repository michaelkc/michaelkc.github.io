---
layout: post
title:  "Interesting stuff I found - October 2024"
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

### Philosophy
This made me laugh, I am a sucker for any trolley-problem setup

[Philosophy](https://www.threads.net/@smbccomics/post/DAteBbuRYlg/)

### Making ASP.NET Core Controllers internal
Was doing some refactoring in a project and once more needed this to control "viral" public visibility in the project. 

[ASP.NET (Core)'s zombie virus of 'public': can controllers be internal?](https://stackoverflow.com/q/64165215)

### How hard should your employer work to retain you?
Great article by Charity Majors from Honeycomb.

[How hard should your employer work to retain you?](https://charity.wtf/2024/10/11/how-hard-should-your-employer-work-to-retain-you/)

### Things I Wished More Developers Knew About Databases
Lots of interesting stuff here. 

[Things I Wished More Developers Knew About Databases](https://rakyll.medium.com/things-i-wished-more-developers-knew-about-databases-2d0178464f78)

### Least privileged role for a given task (in Entra)
[This LinkedIn post](https://www.linkedin.com/posts/jrdodson_security-secops-infosec-activity-7251026681803497473-0WHc/) led me to the very useful [Least privileged roles by task in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task)

As the author states, a similar list for all of the Azure roles would be extremely useful; sadly none seem to exist. 

### Azure CDK
I browsed around some Aspire pull requests, and it seems the "Azure CDK" (at least in their context) is this nuget package.

[Azure.Provisioning](https://www.nuget.org/packages/Azure.Provisioning/)

### System Initiative
Initial reaction was "this is Terraform, with a GUI". Basically they
- pulled the "code" part of the infrastructure model out of Git and into their database as data
- made a GUI the primary way to interact with the infrastructure model

Interesting to see where this goes. They adress common concerns, including most drag'n'drop GUI tools for DevOps being toys, but if their take will stand the test of time remains to be seen

[https://devclass.com/2023/08/17/system-initiative-automated-cloud-deployment-tool-now-open-source-devs-hope-it-improves-on-terraform/](https://devclass.com/2023/08/17/system-initiative-automated-cloud-deployment-tool-now-open-source-devs-hope-it-improves-on-terraform/)
[System Initiative FAQ](https://www.systeminit.com/)

### Tab with invalid CSS crashes with STATUS_BREAKPOINT when F12 tools are opened
We encountered a weird bug with Chrome/Edge 130, where F12 tools would crash the tab of one of our Blazor apps. I managed to boil it down to a very small repro, hope the Chromium guys and girls can get it fixed

[https://issues.chromium.org/issues/376084069](https://issues.chromium.org/issues/376084069)

### oauth.dev
[oauth2.dev](https://oauth2.dev) [sounds useful](https://www.linkedin.com/posts/andy-barlow_openidconnect-oauth2-iam-ugcPost-7256735933448777728-1cUy/), but there is currently an issue with the site cert which prevents it from working. I hope Andy gets it fixed, as a hobby project I guess other things tend to take priority :-)

### Various authentication mechanisms vs Evilginx
Not normally much into videos, but here it works well. The main point is that only FIDO keys and Passkeys prevent token theft if you are phished using something like [Evilginx](https://github.com/kgretzky/evilginx2)

[Microsoft Passkeys vs Evilginx Token Theft](https://www.youtube.com/watch?v=V4ud5IeFRSA)

(this and the following security links via [Anton W](https://www.linkedin.com/posts/anton-willoughby_entraid-cybersecurity-mfa-activity-7255934046134755328-C8HB/))

### Conditional Access Evaluation Protocol (CAEP) and Microsoft Cloud
While the [CAEP](https://openid.net/specs/openid-caep-1_0-03.html) spec brews, Microsoft has been implementing the revocation mechanisms for a while in Entra and associated services.
The author of [this article](https://cloudbrothers.info/continuous-access-evaluation/) took the time to dig into the details, including testing the documented signals causing revocation and how long it took for them to work. 

### Understanding tokens in Entra ID
Great overview of the basics and Microsofts implementation of multiple layers of refresh tokens

[https://www.xintra.org/blog/tokens-in-entra-id-guide](https://www.xintra.org/blog/tokens-in-entra-id-guide)
