---
layout: post
title:  "Templates"
date:   3030-03-28 20:28:20 +0100
---
Last week I was troubleshooting a nasty bug, where a single action in a multi-action wizard used by one of our applications failed to emit an updated cookie, causing the wizard to fail. This happened in about 95% of invocations, and only in our production environment.
Working through possible causes, I ended up noticing that the action was seemingly served via the cache of Citrix Netscaler (as indicated by the `Via: NS-CACHE-10.0: 2` header), the ADC product we use for (public) TLS termination and load balancing.

The really weird part - the Integrated Cache feature was unlicensed and disabled (memory limit of 0). But still, the overview in Netscaler showed about 1800 objects cached, including POST requests in other applications.

![](/assets/images/test.png)

I worked with our internal operations staff and a Netscaler consultant, but we were not able to pinpoint why Netscaler was serving the pages through the cache. Nor were we able to prevent it - most operations (e.g. flush cache) were unavailable, as Netscaler was well aware that the feature was unlicensed.

Eventually, we created a support case with Citrix, and the nice support technician suggested disabling the so-called "AAA cache" with the command

{% highlight powershell %}
set aaa parameter -enableStaticPageCaching NO
{% endhighlight %}

I did previously [notice other people](https://discussions.citrix.com/topic/388657-netscaler-caches-files-even-if-integrated-cache-is-not-licensed-disabled/) suggesting this command to prevent caching of the Netscaler [AAA login pages](https://docs.citrix.com/en-us/netscaler/12/aaa-tm/ns-aaa-how-it-works-con.html). But we were not using AAA, so I did not think to try it.

Yet - when we ran the command above, the cache was instantly flushed, and no further urls from our applications were cached. So it clearly disables the caching a more basic level.
