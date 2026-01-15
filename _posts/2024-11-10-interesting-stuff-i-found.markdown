---
layout: post
title:  "Interesting stuff I found - November 2024"
date:   2024-11-10 21:57:00 +0200
---
### Scripting change pull requests (or direct commits) in multiple Git repos
As my team is pushing close to a hundred repos, having a way to bulk-update various stuff like dependabot settings and whatnot is starting to become highly relevant. 
I spent a bit of time scanning the options, and came upon [git xargs](https://github.com/gruntwork-io/git-xargs/) (with [multi-gitter](https://github.com/lindell/multi-gitter) 
as an alternative that looks nice, but I never tried it as git xargs worked well).

The idea is that you produce a script assuming the root of the repo, like

```
mkdir .github
copy /y c:\absolute-path-to-desired\dependabot.yml .\.github\
```
set up an appropriate personal access token like
```
$env:GITHUB_OAUTH_TOKEN="ghp_x5q...
```
and then run it on a set of repos in a flat text file (or optionally all repos in an organization) with a command like
```
git-xargs.exe --branch-name xargs-updates --loglevel DEBUG --commit-message "Update dependabot.yml" --repos data\testrepos.txt --skip-archived-repos --seconds-between-prs 5  c:\absolute-path-to-script\copy_dependabot.bat
```
For more advanced manipulation of source code in the scripts, someone mentioned [ast-grep](https://github.com/ast-grep/ast-grep?tab=readme-ov-file). It looks very powerful, but I have not had time to try it out yet.

### Handling intra-network service-to-service security
Unauthenticated calls between internal services, relying on the [network being secure](https://particular.net/blog/the-network-is-secure) from outside interference always make me cringe.

Typical solutions have been client_credential authentication for trusted subsystem style calls and more complex token exchange setups for delegation scenarios, where the end user must be independently verifiable by the called service. 

The latter has not seen standardized support (at least I am aware of) since WS-Trust ActAs, so it is great to see new spec initiatives like [transaction tokens](https://www.ietf.org/archive/id/draft-ietf-oauth-transaction-tokens-03.html) and implementations like [Tratteria](https://sgnl.ai/2024/09/secure-identity-and-context-in-microservices-with-tratteria/). Unfortunately, being heavily tied to Kubernetes makes adoption hard in my context for now...

### Kamal 2
Kubernetes is a beast, as DHH puts it. [Kamal](https://kamal-deploy.org/) offers imperative, fully automated deployment of anything you can put in a container (including worker services) to VMs via SSH. 
New in Kamal 2 is the ability to host multiple services on a single machine (great for dev/test and penny pinching).

While i still prefer Azure cloud solutions like App Service and Container Apps for professional .NET app hosting (the former of which has a non-container deployment story, while the latter has a great control plane for things like scale-to-zero), 
Kamal 2 is working wonders for my hobby projects, being deployed via [GitHub Actions](https://gist.github.com/acidtib/df6fcdacfcf6063d2ec3d399e5ae8f5c) and [Tailscale](https://github.com/tailscale/github-action) to my home lab setup. 

The only rough spot with Kamal 2 currently is the docs - but with the help of searching the project Discord (which seems lively if you encounter issues not) I was quickly able to iron out the kinks.

### Nextcloud
I finally got around to trying out [Nextcloud](https://github.com/nextcloud/all-in-one), a host-it-yourself OneDrive/Office Online/Teams alternative, on an ~~old~~ ancient [HP EX490 HomeServer](https://en.wikipedia.org/wiki/HP_MediaSmart_Server) I have repurposed as a Linux box (side note: [headless Linux install is fun](https://microsolutions.info/2016/06/hp-ex490-6tb-gpt-boot.html); the machine has no graphics card and no expansion slots to add one).

It turns out you to be a bit more work than I had anticipated, as Nextcloud will not operate without being able to get a valid HTTPS cert. And my ISP does not allow any incoming traffic (no easy Let's Encrypt). 

I ended up combining the Docker-based install of Nextcloud
```
sudo docker run \
--init \
--sig-proxy=false \
--name nextcloud-aio-mastercontainer \
--restart always \
--publish 80:80 \
--publish 8080:8080 \
--publish 8443:8443 \
--env SKIP_DOMAIN_VALIDATION=true \
--env NEXTCLOUD_DATADIR="/some/data/store" \
--env APACHE_PORT=11000 \
--env APACHE_IP_BINDING=0.0.0.0 \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
nextcloud/all-in-one:latest
```
with [Cloudflare tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) to reverse-proxy the traffic in (and use Cloudflare for the HTTPS cert). It seems to be working fine.

Amongst other things, Nextcloud support WebDav, which allows you to [rclone](https://rclone.org/) folders to the user data store in Nextcloud. I had a bit of trouble with the paths
```
https://<nextcloud-public-hostname>/remote.php/dav/files/<nextcloud-user>/<folder-in-nextcloud-files>
```
was what was needed in the end.

### Find people on BlueSky based on who the people you follow follow
As more and more people leave or at least disengage from the trash heap that is X, BlueSky is picking up steam.

[BlueSky Follow Finder](https://bsky-follow-finder.theo.io/) is pretty nifty for rediscovering people you used to follow on the bird site.

### Async (await) guidance for .NET
[https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md](https://github.com/davidfowl/AspNetCoreDiagnosticScenarios/blob/master/AsyncGuidance.md#asynchrony-is-viral)

Lots of gotchas, worth a read. Maybe one day there will be more than "TBD" for the horrible `.ConfigureAwait()`? 

### Mastering Programming
[https://tidyfirst.substack.com/p/mastering-programming](https://tidyfirst.substack.com/p/mastering-programming)

Succint, food for thought. Being able to slice  problems until you can deliver them in hours & days instead of weeks & months (years?) is certainly a universally useful skill.

### Debugging architects
[https://architectelevator.com/transformation/debugging-architect/](https://architectelevator.com/transformation/debugging-architect/)

Gregor argues that debugging is a good activity for architects to keep in touch with the engine room. 

### IaC & modern workloads
[https://architectelevator.com/cloud/iac-architecture-as-code/](https://architectelevator.com/cloud/iac-architecture-as-code/)

Gregor argues that modern serverless architecture, which is heavy on "lines" (e.g. message passing with queues) between small "boxes" (e.g. Azure functions) lends itself poorly to the hierarchical paradigm utilized by traditional IaC tooling like Bicep and Terraform. In the process, he touches upon some of the same stuff rolling out via Aspire, representing the application architecture as code, with optional infra generation behind that model.
