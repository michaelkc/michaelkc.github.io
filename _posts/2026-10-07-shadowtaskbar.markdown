---
layout: post
title:  "ShadowTaskbar - a fake, invisible taskbar for OLED screens"
date:   2026-10-07 18:20:00 +0200
---

I have an OLED screen, which I love, but static screen elements like the Windows taskbar can cause burn-in if they stay lit all the time.
Windows' auto-hide taskbar solves that, by removing the task bar from view when you are not activating it. However, running with auto-hide *also* frees up screen real estate where the task bar used to be.
That means the lower part of open windows gets hidden by the task bar when it does show.

That annoyed me - and so [ShadowTaskbar](https://github.com/michaelkc/shadowtaskbar) was born to get the OLED benefit, while making sure open windows do not move into the newly freed screen real estate.

Actual full screen apps (e.g. RDP) ignore task bars and use the entire screen - as they should. If you RDP to another Windows machine, you might want to run ShadowTaskbar on both; I do.

### Replacing the prototype with Rust

This replaces an earlier prototype of mine, [shadowtaskbar-net](https://github.com/michaelkc/shadowtaskbar-net), which was C# and a heavily stripped-down fork of [AppSwitcherBar](https://github.com/adamecr/AppSwitcherBar). It did the job, but it carried a whole app-switcher with it that I did not want.

The rewrite is a few hundred lines of Rust, which is leaner code, fewer dependencies, and a much smaller exe. It also consumes 10x less ram when running. Build with `build.cmd`, or plain `cargo build --release` if you already have a working MSVC linker on your PATH.

Limitations: primary monitor only, bottom edge only, no settings persistence (as there are none). And, in the spirit of transparency: this was 100% vibe coded, but I did look over the code and it does not look like it is doing anything malicious. And it works for me.