---
layout: post
title:  "Interesting stuff i found - july 2024"
date:   2024-07-01 14:26:20 +0200
---
### Octopus Deploy alternatives - FDeploy and thinking about the Octopus model on GitHub Actions
Octopus Deploy keeps hiking/changing their pricing model toward "Enterprise" pricing, while they add features we do not need.

[DotNet Reddit](https://www.reddit.com/r/dotnet/comments/125otok/octopus_deploy_alternatives/) picked up on this, and it seems someone 
is rebooting the old Octopus core functionality in a product called [FDeploy](https://www.fdeploy.com/)

Nothing out yet though, and also unclear how pricing will look beyond the community edition.

I like the Octopus [ten pillars of pragmatic deployments](https://octopus.com/whitepapers/ten-pillars-of-pragmatic-deployments) over the
seemingly industry-"standard" merge-rebuild-and-pray approach spearheaded by GitHub (who, presumably has a lot of engineering resources to 
ensure their pipelines never fail, and the scale to actually do meaningful N% blue-green staged rollouts, which we don't), so I spent the weekend experimenting.

My current thinking is using two separate GitHub Actions workflows, one builds and creates a release tied to a SHA ref (pointing to build-produced binaries, containers etc.), another reacts on Deployment
events and deploys the release. Tying them together is an Octopus-style dashboard application, which queries GitHub for deployment status and has 
buttons to roll stuff out (by creating the appropriate deployments i GitHub, based on the releases)

### ttl.sh - Ephemeral container registry
One of many things challenging the switch from packages to containers for deployment is the fact that you suddenly need a service running (in a different trust boundary) instead of a place to put some files.

[https://ttl.sh/](https://ttl.sh/) aims to change this, by offering an anonymous registry. Like old-time DNS names resolving to 127.0.0.1 to properly test cookie domain restrictions, this feels like something you should control yourself for optimal security though - what if something malicious happens inside ttl.sh between you pushing and you pulling?

### Auditing client_credential usage on Entra
Auditing client_credential usage on Entra app registrations is essential to remove unused principals and prevent app registrations from being "append only"

[https://f12.hu/2023/06/12/fighting-azuread-app-registration-client-secrets-step1-reviewing-client-secret-usage/](https://f12.hu/2023/06/12/fighting-azuread-app-registration-client-secrets-step1-reviewing-client-secret-usage/)

### OpenSSF Scorecard / scorecard.dev
With supply chain attacks being an ever-present issue, attempting to standardize a best practice which can be quickly checked seems like a good idea.

[https://scorecard.dev/](https://scorecard.dev/)

allows quick lookup of popular public repos, and you can scan other repos (including private) using their docker image, e.g.

`docker run -e GITHUB_AUTH_TOKEN=<your PAT> gcr.io/openssf/scorecard:stable --repo=github.com/MudBlazor/MudBlazor`

### Kamal (formerly known as MRSK)
Been looking into various deployment options, and Kamal is one of the nicer ones if you do not want to go Kubernetes.

It works well, however it is not really designed for hosting multiple apps on the same server, something that is a must-have for self-hosted hobby projects.

[There are hackish workarounds](https://github.com/basecamp/kamal/discussions/257), and according to DHH [support for this is coming in Kamal 2](https://twitter.com/dhh/status/1766151697817313628) (no public timeframe).

Another great article pertains to using [Kamal to deploy ASP.NET Core apps](https://chekkan.com/2024/05/24/kamal-deploy-asp-net-core-website.html)

Still sticking with free tier App Services and/or scale-to-zero Container Apps in Azure, but it is something to keep an eye on. If nothing else, Kamal and tools like it underlines how comparatively easy deployments are in the Azure/IIS world (where web deploy and similar has been available for many, many years).

### The Trimodal Nature of Tech Compensation Revisited
Gergely has many interesting takes, this one in particular attempts to explain how tech compensation works, with three "tiers" coexisting. The highest-paying one goes under the radar for most people. 

[https://newsletter.pragmaticengineer.com/p/trimodal-nature-of-tech-compensation](https://newsletter.pragmaticengineer.com/p/trimodal-nature-of-tech-compensation)
