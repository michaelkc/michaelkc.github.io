---
layout: post
title:  "Interesting stuff i found - March 2025"
date:   2025-03-02 22:05:00 +0200
---
### Monkeytype
I write on blank Das Keyboards, but my touch typing is a self-taught 6½-finger system, so I am not a fast typist.

I get by ([programming is not limited by typing speed](https://blog.ploeh.dk/2018/09/17/typing-is-not-a-programming-bottleneck/#b82afa298f114b8c89113ea5f40fc278) anyway), 
but I was looking for something to teach my son the basics.

[Monkeytype](https://monkeytype.com/) seems to hit the marks

- support Danish words and keyboard
- some gamification
- free

### Lettuce out-of-order
Repro of the bug causing headlines for Nordnet, when it caused mixup of users sessions. I have participated in troubleshooting similar bugs before with similar impact (on a smaller scale though; not financial data).

[https://github.com/nordnet/lettuce-out-of-order](https://github.com/nordnet/lettuce-out-of-order)

### uv, an extremely fast Python package and project manager, written in Rust.
Maybe this will emerge at the top to replace all the half-baked Python dependency/tool solutions?

Install with
```
winget install astral-sh.uv
uv python install
cd demo-project
uv init .
uv run main.py
uv add art
```
and run `main.py` as 
```
from art import *

def main():
    print("Hello from demo-project!")
    art_1=art("coffee")
    print(art_1)

if __name__ == "__main__":
    main()
```
[https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)

### Micro-bit and Coding Pirates
I had a lot of fun helping one of my sons build a small car with [micro-bit](https://www.dr.dk/skole/ultrabit) and [Makecode](https://makecode.microbit.org/) (hardware and intro courtesy of [Coding Pirates](https://codingpirates.dk/)). 
Hats off to the volunteers that makes it possible.

### fDeploy, the "dogma" Octopus Deploy alternative
[fDeploy](https://www.fdeploy.com/) finally reached a public release. It will be interesting to see the price point and how well it works in practice. 
There is definitely a "small Windows shop" hole in the market that Octopus Deploy proper is leaving behind with their new pricing...

### CRUD apps are good business
You have got to respect the staying power of Ruby on Rails, and he is certainly right that many apps are needlessly complicated by the factors listed

[https://justin.searls.co/links/2025-02-22-crud-apps-are-good-business/](https://justin.searls.co/links/2025-02-22-crud-apps-are-good-business/)

### Prompt Injection Attacks for Dummies
LLM security is hard, and with agents with access to affect their surroundings it becomes even harder. This list demonstrates some of the issues you need to take into account today.

[https://devanshbatham.hashnode.dev/prompt-injection-attacks-for-dummies](https://devanshbatham.hashnode.dev/prompt-injection-attacks-for-dummies)
