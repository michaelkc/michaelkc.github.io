---
layout: post
title:  "Switching from OneNote to Joplin (via Obsidian)"
date:   2026-09-19 10:30:00 +0200
---

I have dabbled with Linux for a while now - first [BlendOS](https://blendos.co/), currently [Omarchy](https://omarchy.org/) / Hyprland. The recurring pain point has been that there is no OneNote for Linux. At the same time, I want to agent-enable my note collection: navigating, organizing and utilizing notes that have been capturing knowledge and projects for the last 10+ years. Both aims run into the same wall - OneNote does not get along with anyone.

### No OneNote for Linux

I have tried a few options for the "no Linux OneNote" problem:

- **Waydroid with the OneNote Android app** - the app is optimized for mobile, not desktop, and copy-paste between it and the host is difficult. Not suitable as a daily driver.
- **OneNote web** - extremely slow, and search works badly.
- **[P3X onenote](https://github.com/patrikx3/onenote)** - a wrapper around OneNote web with some QoL additions. Bookmarks help a bit.
- **My own fork of P3X with better search** - requires a separate Entra app and login, and while search is fast, _search indexing_ is slow, because there is no change detection to work from - and the API is rate-limited.
- **NoteZero, a complete OneNote editor against the OneNote API** - a huge piece of work, unfeasible even with coding agents. I gave up on that.

### Agent access on Windows

The attempts at agent-driven organization on Windows fared no better. I tried building an MCP server with

- **the OneNote cloud API** - slow and rate limited, and it required the same custom Entra app authentication,
- **the OneNote COM API** - fast, but it mangled the pages when moving them (kept producing black-on-black titles and the like).

None of that has worked out great. The P3X fork is sort of tolerable on Linux, while the cloud/COM attempts have left pages locked away from agents.

### Obsidian

So it was time to consider alternatives. First I tried [Obsidian](https://obsidian.md/). The idea of everything being local markdown is appealing - and super easy for agents to work with - but a few things killed it for me:

- The mobile app is extremely basic. Even something like "take a photo" is a plugin, and that plugin broke on my new Android phone, with no fix in sight.
- Sync is either a subscription or a selection of more or less shady options. I went through several sync providers, set them up on my Proxmox behind a Cloudflare tunnel, and none of them worked reliably.

A shame, because I really liked the canvas. Maybe there is a plugin for...

### Joplin

That brought me to [Joplin](https://joplinapp.org/). Lauded as an Evernote replacement (incidentally, my note-taking career started with pre-cloud Evernote), it takes the same markdown-as-format route as Obsidian, but adds

- Linux, Windows and Android support with feature parity
- a decent mobile app (you can take a picture and add it to a note),
- great search out of the box (everything lives in sqlite),
- sync that is either for-pay or a functioning, if somewhat slow, OneDrive support.

That ticked the boxes, and I am now actively moving over.

### Moving notes

For the note conversion I used [onenote-md-exporter](https://github.com/alxnbl/onenote-md-exporter); there were a few cosmetic issues on some notes, but no content was lost AFAICT.

To let agents work with Joplin, I coding-agent-replicated the [Joplin CLI](https://github.com/vsaw/joplin-cli) in Go ([joplin-cli-go](https://github.com/michaelkc/joplin-go-cli)), and it works great. 

I am not completely done with OneNote - work stuff will stay there for compliance reasons. But I expect my extensive personal and technology notes to do well in their new Joplin home, which should unlock more of their potential now that agents can tap into and expand my personal knowledge base.