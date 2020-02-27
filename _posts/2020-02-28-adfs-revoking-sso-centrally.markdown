---
layout: post
title:  "ADFS - revoking a single-sign-on session centrally"
date:   2020-02-27 21:01:20 +0100
---
Today I was working on enabling KMSI on my companys ADFS v2019 infrastructure, with a long lifetime. Enabling KMSI is easy enough, however I wanted to verify that it was indeed possible to revoke the active KMSI-based login sessions centrally by changing the password of the user, as indicated [here](https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/operations/ad-fs-single-sign-on-settings).

To do so, I signed in a test user in a KMSI-enabled session, ending up with a SAML token backed session at a website. Then I changed the test users password elsewhere (custom profile editing website using LDAP to talk to AD). 

To test whether revocation was working, I needed to attempt re-issuing the SAML token to the website. So I deleted the website SAML token backed session cookie (.AspNet.Cookies), causing the website to redirect back to ADFS.

To my surprise, another SAML token was issued without user interaction. So revocation by changing the user password seemed ineffective.

I did a lot of digging with dotPeek on the ADFS assemblies, and ended up in the class "ActiveDirectoryCpTrustStore".
It has a method "ValidatePasswordChange", which ultimatively compares a "lastPasswordChange" attribute with the authentication instant. However, it does this conditionally, skipping the validation if current time is before (authentication instant + PasswordValidationDelayInMinutes from Service State).

A quick check using Powershell confirmed that "PasswordValidationDelayInMinutes" defaults to 60 minutes:
{% highlight powershell %}
Get-AdfsProperties|findstr PasswordValidationDelayInMinutes
#=> PasswordValidationDelayInMinutes : 60
{% endhighlight %}

Incidentally, my digging around with dotPeek had taken a bit more than hour. When I retested the revocation scenario, I was prompted to authenticate. I concluded that revocation was working, it is just delayed by an hour.