---
layout: post
title:  "Book - Vibe Coding"
date:   2026-05-17 08:43:00 +0200
---
## Vibe Coding (book)
I am reading the [Vibe Coding](https://itrevolution.com/product/vibe-coding-book/) book.

### On options (p.29)
I like this framing, which is also used by Gregor Hophe. Try out radical ideas and various implementations at low cost.

One recent example: I had to implement refresh-token-only dPoP support in IdentityServer. Since I (and my coding assistent) initially overlooked that 
using bearer tokens with dPoP refresh tokens is allowed in the main dPoP spec, I had a detour, with a full working implementation, around 
[dPoP-RT](https://datatracker.ietf.org/doc/draft-rosomakho-oauth-dpop-rt/).

When I re-read the dPoP spec and figured out there was a main-spec way, I threw away the old implementation and made a new one.

Both with heavy coding agent assistance; I mainly had to review the second solution and prune a few extras I did not need.

Without coding agents, the first solution would have required so much work that pivoting to the "right" solution would have been a much harder
decision, had I figured it out as late as I did.

### On senior-junior mentoring and the surgeon example (p.27)
[Interesting look](https://www.physicianleaders.org/articles/learning-to-work-with-intelligent-machines) at what happened with senior-junior mentorship when
surgical robots could fill the jobs juniors were usually required for. I, like the book authors, think this is going to happen in software development too.

While they (at least in this part of the book) focus on how great that is for the seniors (who are freed from communication tax and can move faster), this is going 
to create huge problems for the business when current seniors start retiring. Maybe coding agents will be ready to take over higher-level work ("taste") reliably then - maybe not...