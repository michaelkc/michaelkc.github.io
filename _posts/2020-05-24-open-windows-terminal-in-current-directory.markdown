---
layout: post
title:  "Open Windows Terminal in current directory"
date:   3030-03-28 20:28:20 +0100
---
As a long time [Total Comamnder](https://www.ghisler.com/) user, I rely heavily on opening cmd.exe/powershell.exe/pwsh.exe/bash in the currently selected directory. So I was a bit annoyed when i found out that the new Windows Terminal, wt.exe, by default opens in your home directory.

It turns out to be a [regression](https://github.com/microsoft/terminal/issues/620#issuecomment-535228867). For now, the workaround is to add 

`"startingDirectory": null`

to the default profile in settings.json (Windows Terminal -> dropdown -> Settings), e.g.

{% highlight json %} 
{
	// Make changes here to the powershell.exe profile
	"startingDirectory": null,
	"guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
	(...)
}
{% endhighlight %} 
