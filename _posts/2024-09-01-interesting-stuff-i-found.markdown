---
layout: post
title:  "Interesting stuff i found - september 2024"
date:   2024-09-01 12:53:20 +0200
---
### GameNGen - generative AI recreating Doom in real-time
Impressive stuff, interesting to imagine possibilities in the future.

[Diffusion Models Are Real-Time Game Engines](https://gamengen.github.io/)

### The Nature of Code
Like the Sam Rose visualization of CS basics, [The Nature of Code](https://natureofcode.com/) explains and visualizes various natural phenomena. This could be useful for a bit of home teaching when the kids are older. Via Scott Hanselman.

### How Uber tests payment (in production)
TL;DR staging environments cannot catch all bugs. I really like the "staged deploy to subset of production users" approach but when your market is not global but consist of ~50.000 potential users, getting useful feedback is tricky. Also the engineering challenge of running multiple copies of an application/service side-by-side (while presumably sharing persistent state in a forward/backward compatible way) is not trivial.

Would be nice to have this setup, but for now I am sticking to staging environments with fast rollback options (and sometimes feature flags), which is working ok for us.

[https://news.alvaroduran.com/p/cringey-but-true-how-uber-tests-payments](https://news.alvaroduran.com/p/cringey-but-true-how-uber-tests-payments)

### The Staff Engineer's Path
I just finished listening to the audio book of [The Staff Engineer's Path](https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/) by Tanya Reilly. Lots of good stuff, the author gathered up the resources referenced in the book here:

[https://www.noidea.dog/staff-resources](https://www.noidea.dog/staff-resources)
