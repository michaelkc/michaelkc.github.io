---
layout: post
title:  "Interesting stuff i found - June 2025"
date:   2025-06-01 13:51:00 +0200
---
### LegoGPT
Create (simple) lego structures based on text instructions. I was not terribly impressed with the results when I tried it, but hey, it's lego!

[LegoGPT](https://huggingface.co/spaces/cmu-gil/LegoGPT-Demo)

### OneNote Markdown Exporter
This can export OneNote notes to folders in markdown or in the 
[import format](https://discourse.joplinapp.org/t/onenote-importer/37720/6) of [Joplin](https://joplinapp.org/). 
I am considering alternatives for note taking/archiving/search, this will come in handy to be able to work with my actual data, 
as well being a more vendor neutral back up format than what I currently have.

[OneNote MD exporter](https://github.com/alxnbl/onenote-md-exporter)

### Semantic Kernel
I finally got around to actually builing a small demo with Semantic Kernel. The tool integration is very smooth, but I had trouble getting it to work
with locally-running ollama and phi4-mini. While the latter claimed tool support, it simply did not call them, no matter how i prompted.
Using an Azure AI foundry deployment of GPT-4 worked flawlessly though. I can see this being super powerful, but currently have no real-world case where I can
apply it.

[Understanding the Kernel](https://learn.microsoft.com/en-us/semantic-kernel/concepts/kernel?pivots=programming-language-csharp#the-kernel-is-at-the-center)

### (A) LLM CodeGen Workflow
I have tried various approaches to throwing problems at multi-edit LLM tools like Cursor and GitHub CoPilot Edits, but have had limited success. Some of the issues
seem to be related to my tech stack (Blazor, .NET, bleeding edge), but I suspect part of the problem has also been "chunking" the problem space into something the 
LLM can handle.

Some people recommend going in very small steps, like manual TDD. But I found this description of a process with distinct ideation, planning and 
todo->execution phases interesting, and will try that out soon.

[My LLM CodeGen Workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

Edit 03/06: Same idea: [Chain-of-Vibes](https://blog.thepete.net/blog/2025/04/14/chain-of-vibes/)

### CSharpier
I am less opinionated about style than many developers I have worked with, so I never bothered to set up tools like Visual Studio or Rider with specific styles. I can work with most styles.

But the idea of a tool which is basically not configureable, resulting in near-zero effort to get a consistent style has some appeal. 

[CSharpier](https://csharpier.com/)

[CSharpier VS 2022 Extension](https://marketplace.visualstudio.com/items?itemName=csharpier.CSharpier)

### On Entrepreneurship
I like this framing. So many people attribute the fact that they have been successful to their skills and hard work (which certainly helps), while in practice your environment and even luck plays a big role.
Vibes well with [Fooled by Randomness](https://en.wikipedia.org/wiki/Fooled_by_Randomness) which i recently "read" (as an audiobook)

>Entrepreneurship is like one of those carnival games where you throw darts or something.
>
>Middle class kids can afford one throw. Most miss. A few hit the target and get a small prize. A very few hit the center bullseye and get a bigger prize. Rags to riches! The American Dream lives on.
>
>Rich kids can afford many throws. If they want to, they can try over and over and over again until they hit something and feel good about themselves. Some keep going until they hit the center bullseye, then they give speeches or write blog posts about "meritocracy" and the salutary effects of hard work.
>
>Poor kids aren't visiting the carnival. They're the ones working it.


[https://news.ycombinator.com/item?id=15659076](https://news.ycombinator.com/item?id=15659076) via [https://mas.to/@carnage4life/114594622023167481](https://mas.to/@carnage4life/114594622023167481)

### CoPilot chat cookbook
Learning how to prompt the various LLM tools correctly for desired outcomes is evolving fast, I am going to browse the cookbook to see if I have missed anything

[CoPilot Chat Cookbook](https://docs.github.com/en/copilot/copilot-chat-cookbook)

### The AI model collapse
Unless some breakthroughs occur in the ability to synthesize high-quality input for training upcoming LLMs, the logic seem sound. 

[Prediction: General-purpose AI could start getting worse](https://www.theregister.com/2025/05/27/opinion_column_ai_model_collapse/)

### The Testing Pyramid is upside-down
This resonates well with my experience; I worked for years in a team where 95% of our testing was E2E, and that worked pretty great. 
The only real downsides were that the E2E tests were 

- slow (mitigated somewhat by running a farm of machines to run the tests on)
- required preprod environments to be available
- externalized from the main project (different tool, different people)

But we did release lots of high-quality software with very few incidents.
These days I mostly develop APIs, and when writing tests I put most effort into E2E tests where the real hosting pipeline is running, with any out-of-process dependencies stubbed out.
That also works pretty great, and is well supported by tooling like ASP.NET TestServer and [Alba](https://github.com/JasperFx/alba)

During build it was mentioned that support for hosting Kestrel from TestServer was coming, which will enable non-API projects to run Playwright on top of such a stubbed hosting pipeline as well. My old team actually built that themselves some time ago and really like it, so I have great expectations for the official bits.

[The Testing Pyramid is upside-down](https://www.antithesis.com/blog/testing_pyramid/)

### MCP and Authn/Authz
There is a price to starting out with a vendor spec and slapping various missing parts on top in a hurry. 
I hope future revisions of MCP can go through a better process to avoid similar issues. There are going to be a lot of work cleaning up
security issues caused by the LLM gold rush in the coming years (maybe the LLM agents can do it? ;-))

[What MCP Gets Wrong](https://www.featureform.com/post/what-mcp-gets-wrong)

[Treat the MCP server as an OAuth resource server rather than an authorization server](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/205)

### Fiddler in 2025
Like its author, I never switched from the original Fiddler, and here Eric Lawrence gives out a lot of great tips on how to use it in 2025.

SingleBrowserMode sounds super useful, I will set that up immediately. Also I did not know about the ability to do [NetLog logging in Chromium](https://textslashplain.com/2020/01/17/capture-network-logs-from-edge-and-chrome/) - 
I have previously captured HAR traces via browser tools and loaded those into Fiddler. Sounds like both are lossy though, so I think I will stick with Fiddler capture where possible.

[Fiddler in 2025](https://textslashplain.com/2025/05/16/fiddler-in-2025/)

### On Being Liked or "Mistaking Harmony for Health"
A strong argument for setting baseline expectations as a leader, and engaging with your teams. I have rarely seen teams as unproductively autonomous as described in the article, but I have certainly seen technology gold plating and 
"modernization" initiatives, based solely on vibes and not business needs. Hopefully, I have not been guilty of those things myself, but if I had, would i know? 🤔

[On Being Liked](https://jamesjboyer.substack.com/p/on-being-liked-or-mistaking-harmony)

### dotnet run app.cs
I guess this is nice to have built-in, but I feel the community have already stepped up with NUKE, Linqpad or even pwsh for these kinds of scenarios. 

[Announcing dotnet run app.cs – A simpler way to start with C# and .NET 10](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/)

### LLM agents moving out of the dev box and into GitHub
Interesting approach of using Claude in the same way GitHub Copilot was demonstrated at Microsoft Build. Third party integrations is great for innovation, but I must admit I am feeling
quite skittish setting an agent "free" to burn tokens, build minutes and invoke various MCP tools at this point. Especially having seen so poor results from local unattended agent coding, 
but others have [a different experience](https://fly.io/blog/youre-all-nuts/) (see also above).

[Faster Claude Code agents in GitHub Actions](https://dev.to/depot/faster-claude-code-agents-in-github-actions-1p2h)

### Google Jules
I am cleaning out my PhoneShare backlog of AI stuff, guess this shows. Jules is another "async LLM agent", which I have high hopes for as people have written nice things about the Gemini models. 
It has a very clean integration with GitHub, and everything runs in a Google-provided sandbox VM. 

Unfortunately, it did not like my Blazor WASM solution - the ordeal ended with 
`Jules encountered an unexpected error. Please start a new task to try again.` after Jules create a high-level plan and tried to implement. 

[Google Jules](https://jules.google.com/)

### OpenAI Codex
Seeing that the open-codex support for non-OpenAI providers have been rolled into codex proper, I spent quite a few hours working with it yesterday and today.
`ollama` supports seem broken. But with tonnes of elbow grease, I got it working with Azure AI Foundry hosted models. Key points

- it only runs in WSL on Windows. You need node 22+ (documented, but gives strange errors if you do not notice)
- API key variables, it seems you need both the OPENAI and AZURE keys set (assuming bash)
  - export AZURE_API_KEY=<actual key>
  - export OPENAI_API_KEY=$AZURE_OPENAI_API_KEY
- Azure AI Foundry model must be deployed as "Global Standard". That, for me, meant no o4-mini, so I used o3-mini instead. YMMV
- AzureOpenAI support might be broken in current version, so use `npm install -g @openai/codex@0.1.2505160811`, which is known to work
- if things break (401, 400), unset other OPENAI or AZURE-containing env variables, they might conflict with the settings for codex

Working `~/.codex/config.json`:
```
{
  "providers": {
    "azure": {
      "name": "AzureOpenAI",
      "baseURL": "https://<your prefix>.openai.azure.com/openai/",
      "envKey": "AZURE_API_KEY"
    }
  },
  "provider": "azure",
  "model": "o3-mini"
}
```
Note that "AZURE_API_KEY" is literal, it is the name of the env variable it expects to contain the actual key. 

Results with openai were encouraging; it created a nice refactoring plan, which I saved to markdown. Then I switched (I personally pay for OpenAI usage, while I have MSDN credits for Azure AI).

Results with AzureOpenAI were mixed. It did a few minor refactorings well, but ended up grinding for ten minutes / many, many tokens trying to eliminate build warnings.
