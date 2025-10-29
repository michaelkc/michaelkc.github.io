---
layout: post
title:  "Interesting stuff i found - October 2025"
date:   2025-10-06 21:05:00 +0200
---
### DHH on why he does not have 15 minutes for a "quick call"
Not a fan of video content, but I know this sentiment exactly. A 15 minute meeting at 13:00 can ruin an entire day of deep work.
It goes back to the difference between [makers schedule and managers schedule](https://www.paulgraham.com/makersschedule.html) - meetings cost makers more.
Funny enough, I reflected on my experience today, and 2 x 5 minute interruptions in person in the office was significantly less disuptive than a
chat message "do you have 15 minutes for a quick call". Food for thought.

[When I politely decline scheduling a 'quick call'](https://www.linkedin.com/posts/david-heinemeier-hansson-374b18221_when-i-politely-decline-scheduling-a-quick-activity-7379092346325487616-gzSy)

### The Architect Elevator
Participated in the [workshop](https://architectelevator.com/workshops/), great stuff. Gregor has seen it all, and can challenge your thinking like few others. I come away energized and with lots of food for thought, 
in the areas of political capital and how to spend it, ways to expand the solution space and how to be high level with depth - to name but a few.
I had a blast, colleagues were not quite as enthusiastic though (too many anecdotes for their taste), so YMMV. If you are a fan of the books, definitely go.

### Azure Dev Summit
Microsoft returned to Europe with a developer conference, and it was a great one. Portugal is lovely (first time there), and there was loads of great content. Standout sessions were 

- [Filip W](https://www.strathweb.com/)'s session on patterns for Small Language Models (and fine tuning them)
- [Safia Abdalla](https://blog.safia.rocks/)'s mini-workshop on re-implementing ASP.NET Core Minimal API (the framework) from scratch (2 hours!)
- [Bart De Smet](https://www.linkedin.com/in/bartdesmet/)'s session on implementing a C# feature in the Roslyn compiler (1 hour!)

and a great workshop (with demo of [Sustineo](https://github.com/sethjuarez/sustineo)) about the new (LLM) Agents framework and LLM agents in general by [Seth Juarez](https://www.linkedin.com/in/sethjuarez/)

### GH-500 ESI Training
Triple-up on training, I did the [GH-500](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-500) workshop virtually with a Microsoft trainer today. 
Strange pacing in the material, some of it very basic, some of the stuff around CodeQL very deep and difficult to grasp in a few overloaded slides, but the trainer did his best to make it work.
And I walked away with a better idea of how MS virtual training works.

The labs were somewhat broken (e.g. "do not introduce the synthetic bug in main but make a branch and a PR" ... "fix the bug you introduced in main"), but I found it interesting that they were automated with GitHub Actions, 
that analyzed your progress and updated the lab instructions based on this.

I previously did the MS Learn test exam for GH-500, and it seems way too easy compared to something like AZ-204. Not sure if this reflects the actual exam, but maybe I should give it a shot...

### Paperless-ngx
I have long considered scanning my old physical documents to PDF. Paperless-ngx offers a web interface for ingestion/OCR/tagging of scanned documents (and other document types), and might be a useful part of that.

[Paperless-ngx](https://docs.paperless-ngx.com/)

### The Doom loop
Not as in "Knee-deep in the dead", but as in what happens when you try to get frontier models to solve problems for which their training data was insufficient. E.g. non-tool assisted multiplication, 
representing unusual imagery like "a wine glass filled to the brink" or esoteric application code. Fortunately (?) there is a lot of boilerplate involved in development still...

[The Doom loop](https://codemanship.wordpress.com/2025/10/25/the-ai-ready-software-developer-9-well-trodden-paths/)

### Net Promoter Score
[NPS](https://en.wikipedia.org/wiki/Net_promoter_score) is getting more and more traction, but I cannot help but wonder if 
[cultural bias](https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2F72e03vux9aj11.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3Da7f2f183508eb68a32c57e4867b07607e2260f13) or 
[survey fatigue](https://x.com/GantLaborde/status/1981161493979857290) is setting up organizations for disappointment and false conclusions...

### Macrodata Refinement Keycaps (from Severance)
Finished watching [Severance](https://www.imdb.com/title/tt11280740/) today, and I found out you can get a set of matching 
[Macrodata Refinement-style keycaps](https://spkeyboards.com/products/sa-macrodata-refinement). 
I like the retro style, but they are expensive, and I use [blank keycaps](https://www.daskeyboard.com/daskeyboard-4-ultimate/)...

### Cline + Grok Code Fast 1
I am [vibe coding](https://www.youtube.com/watch?v=JeNS1ZNHQs8) an new version of my PhoneShare app, that I use to capture and LLM 
summarize links from social media (which mostly happens on LinkedIn these days after Twitter imploded). 

The app started out from a oneshot with M365 Copilot + GPT-5 which sorta worked, but I had little luck when I tried to follow up 
with GitHub Copilot, [Senatus](https://github.com/PaodingSoftware/senatus-en/blob/main/docs/github-spec-kit-is-just-too-complex.md) 
and the free GPT-1 / GPT-5-Mini models (my Premium model requests are provided by work, so I do not want to use that for hobby projects). 
It seemed to be stuck in "the Doom loop". So I was looking for alternatives.

After a quick look at market leader Cursor, which I considered subscribing to, I found [Cline](https://cline.bot/), specifically the terminal coding agent. 
And it turns out that currently, usage with [grok-code-fast-1](https://x.ai/news/grok-code-fast-1) is completely free 
(even though Elon went crazy, I do not mind spending his money on tokens)
The results were pretty good - it picked up on the Senatus plan, found the failing tests GPT-5 had created and, given appropriate number of "fix the tests" inputs,
it did.
Since the new architecture is a complete split of a static web app Front End with configureable backend, I might publish the repo when I am done. 
But I guess I should look at the actual code first :-)

### ORAS - use container registries for non-container-image artifacts
As part of my thinking on how to replace Octopus with GitHub flows, there is a need to store binaries with metadata (and perhaps other artifacts like SBOM) between 
the build and release stages (as per [Build Binaries Only Once](https://octopus.com/blog/build-your-binaries-once))

Some workloads naturally use container images for this, but since I use .NET and Azure App Service a lot, simple zip deployment is often all that is needed. 
I have seen examples of using GitHub Releases for this purpose, and while it works, I would really like to store binaries in a single place (like the Octopus feeds), 
with the ability to apply my own retention policies and access control, separate of source access.

That lead me to [ORAS](https://oras.land/) which offers the ability to store arbitrary files as versioned container registry repositories. You install it with

`winget install oras`

then authenticate with

`oras login <container registry url>`

push the file(s) with something like

`oras push <container registry url>/my-application:1.1.1001 --artifact-type application/zip --annotation "org.opencontainers.image.title=My Deployment artifacts" --annotation "..."  MyApplication.1.1.1001.zip`

and can then download it where you need to deploy it with

`oras pull <container registry url>/my-application:1.1.1001`

I have only scratched the surface here, but it looks very promising.
