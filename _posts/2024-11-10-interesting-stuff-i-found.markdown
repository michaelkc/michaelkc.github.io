---
layout: post
title:  "Interesting stuff i found - november 2024"
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
