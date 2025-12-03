---
layout: post
title:  "Interesting stuff i found - December 2025"
date:   2025-12-03 12:31:00 +0200
---
### NUKE in trouble? How about Dagger
I am heavily invested in [NUKE build](https://nuke.build/), however its author has been having a bad time with [nasty community engagement](https://github.com/nuke-build/nuke/discussions/1564#discussioncomment-15001502). 

I hope he will consider taking it commercial, as the product brings a lot of value.

That did, however, prompt me to consider alternatives. The core issue is the well known difficulty of developing and testing GitHub Action workflows locally, which leads to a long stream of error correcting commits when you work with CI.

NUKE mostly solves this, by capturing the build script in strongly-typed, imperative .NET/C# (no more YAML debugging), and allows you to easily run the pipeline locally. 
[Dagger](https://docs.dagger.io/) offers an alternative solution for the same problem; here an underlying execution engine is used to orchestrate functions written in Go/Typescript (or untyped alternatives) that chain together.

It allows you to take input (e.g. code in repo) to output (e.g. versioned deployment artifact, such as a container image) and can potentially also be used for code-based CD of those artifacts.

I made a [small spike of building a basic .NET solution](https://github.com/michaelkc/dagger-dotnet-spike/) (with heavy aid from Copilot)

In principle, this sounds great, but lack of .NET support and lack of Microsoft engagement in the Daggerverse for common tasks curbs my enthusiasm a bit. Staying with NUKE for now, but keeping an eye on Dagger.

[CI/CD with Dagger and Azure](https://bakson.dev/2023/07/03/deploy-azure-webapp-dagger.html)

