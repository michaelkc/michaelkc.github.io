---
layout: post
title:  "Interesting stuff i found - April 2025"
date:   2025-04-03 14:05:00 +0200
---
### FastEndpoints
I have been looking into ways to organize ASP.NET Minimal APIs, FastEndpoints offer another approach. Seems to suffer from the "one primary contributor" issue of most open-source .NET projects, which leaves you with high risk when adopting it.

[FastEndpoints](https://fast-endpoints.com/)

### Design Token-Based UI Architecture 
I mostly work in the backend, but I find this article on how to manage design abstractions and changes across technologies fascinating. 

[Design Token-Based UI Architecture ](https://martinfowler.com/articles/design-token-based-ui-architecture.html)

### Mapping the Mind of a Large Language Model
Really interesting look into how the internals of a LLM work. While they are sometimes derided as "next token predictors" (which they are), maybe so are we in a sense, given that the internal state is continually evolving with input. 
That being said, I [do not think we are on the verge of AGI](https://www.heise.de/en/news/Meta-s-head-of-AI-Yann-LeCun-does-not-believe-in-the-future-of-generative-AI-10276181.html), that seems like hype cycle hyperbole (remember Blockchain?) from people who like to pocket billions on [vague promises](https://pivot-to-ai.com/2025/03/06/ilya-sutskever-ex-openai-gets-2b-funding-not-to-release-anything-until-he-has-super-intelligence/).

[Mapping the Mind of a Large Language Model](https://www.anthropic.com/research/mapping-mind-language-model) (via [Techspot](https://www.techspot.com/news/107347-finally-beginning-understand-how-llms-work-no-they.html))

### Le Chat
European LLM chatbot alternative, haven't used it much yet but nice to see European tech companies in the mix

[Le Chat](https://chat.mistral.ai/chat)

###  The AI Engineer Roadmap
Not sure that I buy that "AI engineer" is fundamentally different from tradtional software engineering (not mentioning "Vibe coding"), but there are some interesting ideas on how to handle the inherent non-deterministic nature of LLMs, when embedding them as part of a software solution. Also I like the razor focus on being a LLM _user_, which is what most developers are going to be.

[What is an AI engineer](https://www.aihero.dev/what-is-an-ai-engineer)

### How FIDO2 works, a technical deep dive
Good overview, also includes a short video demonstrating [evilgnix](https://evilginx.com/). In related news, a collegaue tipped me off today that 

[https://michaelwaterman.nl/2025/04/02/how-fido2-works-a-technical-deep-dive/](https://michaelwaterman.nl/2025/04/02/how-fido2-works-a-technical-deep-dive/)

### Developer Machines are getting so powerful they can run your CI pipeline
DHH shares that they have started running their CI pipelines locally, instead of on cloud runner like GitHub Actions. I find this very interesting given

- you can ensure environment is reproducable by running the entire build inside a container
- GH runners are painfully slow compared to local desktop
- I already internalize all build steps using NUKE build, and I am a big believer in the "build.sh should build locally" approach that eschews using CI-provided tooling like GitHub Actions.
- I typically separate [deployment from build](https://octopus.com/blog/build-your-binaries-once)

There are valid caveats in the comments, e.g. how do you prevent compromised clients from injecting bad builds (this is harder, but of course not impossible, on the GitHub infra, see also Solarwinds hack...).

Additionally, getting NUKE to run inside a container is not trivial, especially when you need legacy build tools or [sibling containers](https://dotnet.testcontainers.org/dind/).

[Developer Machines are getting so powerful they can run your CI pipeline](https://www.linkedin.com/posts/david-heinemeier-hansson-374b18221_developer-machines-are-getting-so-powerful-activity-7316734186025885696-rylA/)

### Deploys Are the ✨WRONG✨ Way to Change User Experience
The big issue making this approach impractical on most systems I work on is that producing a comprehensive test suite, which can catch

- security issues from partially developed features (beyond what SAST tooling can dig up)
- performance regressions
- specific integration issues (we have lots of fan-in dependencies on our services)

is very, very hard. But I can certainly agree with the listed drawbacks. Even with automated and fast deployment pipelines with rollback support, and the ability to deploy feature branches to staging for verification pre-merge, we are rarely hitting more than a few deploys a week for any individual service.
And that hurts the small stuff, which tends to get bunched up in big upgrades, which no one wants, as they add risk of breakage with no new features.

[https://www.honeycomb.io/blog/deploys-wrong-way-change-user-experience](https://www.honeycomb.io/blog/deploys-wrong-way-change-user-experience)

### Foldable color E-ink reader
I remember buying one of the first E-ink readers with Android. It never saw much use (unlike my Kindle), as it had horrible text rendering for some reason I was never able to pinpoint.
This device is probably going to be too expensive and brittle (judging by the price of folding phones), but nice to see innovation happening around E-ink, which is still very superior 
when it comes to reading on a screen.

[MooInk V](https://gizmodo.com/the-first-folding-e-ink-tablet-turns-an-e-reader-into-a-high-end-paperback-2000591230)

Edit: See also a new [E-ink Dumbphone](https://mobile.slashdot.org/story/25/04/26/078214/can-a-new-dumbphone-with-an-e-ink-display-help-rewire-your-brain). Sadly, I need a great camera and it does not have one

### Koppla - manage Active Directory via an LLM chat interface
With MCP being all the rage we are seeing lots of "manage XYZ with LLM" implementations pop up. Here, as usual, the write scenarios must be wrapped in extra care and per-operation confirmation, 
given the fundamental unpredictability of the technology. I would like to try it out on a preprod environment with a local model, if time permits.

[https://lazyadmin.nl/koppla/](https://lazyadmin.nl/koppla/)

### Auth0 for GenAI
In the same vein, Auth0 for GenAI previews continue the work on solving some of the issues MCP-integrated agents presents. I hope this will eventually lead to standardization around 
async authorization and fine-grained authz, issues I have struggled with for many years in per-user secured content via messaging and permission-filtered search....

[https://auth0.com/ai](https://auth0.com/ai)

### Disable Bing search in the start menu
Hope this will fix the semi-regular hangs and subsequent restarts of explorer.exe I end up with at work. TL;DR is 

`Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled" -Value 0`

and

`Get-Process explorer | Stop-Process`

[https://awakecoding.com/posts/disable-bing-search-in-start-menu-for-faster-results/](https://awakecoding.com/posts/disable-bing-search-in-start-menu-for-faster-results/)

### Detecting weak passwords in Active Directory
Nice and detailed guide on how to do this, without using shady tools and/or having hashes transmitted to third parties

[https://michaelwaterman.nl/2025/04/10/detecting-weak-passwords-in-active-directory/](https://michaelwaterman.nl/2025/04/10/detecting-weak-passwords-in-active-directory/)

### Stacked diffs
The visual explanation makes the concept easy to grasp, and I have certainly had the issue stacked diffs set out to solve even in a small team. The tooling looks a bit spooky though, 
and I am not feeling enough pain to pay for [Graphite](https://graphite.dev/pricing) (yet?)

[Stacked diffs](https://newsletter.pragmaticengineer.com/p/stacked-diffs)

### How rich is Elon Musk
Beyond demonstrating how powerful data visulization can be, it also presents a strong argument for enacting a global ["you won capitalism" taxation scheme](https://www.reddit.com/r/SandersForPresident/comments/fnm2ff/after_you_reach_999_million_you_get_a_trophy_that/). And while we are at it, how about a global [Tobin tax](https://en.wikipedia.org/wiki/Tobin_tax).

[How rich is Elon Musk](https://engaging-data.com/how-rich-is-elon-musk/)

### European alternatives to US soft- and hardware
And cars. Nice list (in Danish)

[Bedste europæiske alternativer til amerikansk teknologi og elbiler](https://mobilsiden.dk/nyheder/it-tele-tech/bedste-europaeiske-alternativer-til-amerikansk-teknologi/)

### Selling Chrome
While Google is certainly no longer in "don't be evil" land, I feel a bit like a person I once saw interviewed on why he did not support overthrowing Putin, after revelations of widespread corruption and self-enrichment: "We cannot afford to fatten up another one". 

If Yahoo ends up paying "tens of billions" for a product with a huge operating expense, given away for free, how many awful "the-user-is-the-product" features are going to be implemented to recoup that cost? Maybe they should rebrand Chrome "HellScape"...?

[Yahoo wants to buy Chrome](https://www.theverge.com/policy/655975/yahoo-search-web-browser-prototype-google-trial-antitrust-chrome)
