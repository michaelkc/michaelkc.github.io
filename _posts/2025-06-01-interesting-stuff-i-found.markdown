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
