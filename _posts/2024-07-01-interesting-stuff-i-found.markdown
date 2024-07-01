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
