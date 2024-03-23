---
layout: post
title:  "Interesting stuff i found - march 2024"
date:   2024-03-10 21:50:20 +0100
---
### Making nix click
It solves the "I need to run 10 versions of node at the same time, and switching requires special tooling / is sensitive to multiple processes running at once". 
With a story for taking what you do locally to production.

[https://mitchellh.com/writing/nix-with-dockerfiles](https://mitchellh.com/writing/nix-with-dockerfiles)

### Record you screen and get AI recommendations
Reminds me of a program i ran 15 years ago which recorded your workday using screenshots. Eerie, but might be useful for work stuff.

[https://augmend.com/](https://augmend.com/)

### TestContainers for XUnit tests
I've used GitHub TestContainers, but using them directly in XUnit looks promising for integration testing. I've used sqllite previously and stubbed other dependencies, but this would be a better solution

[https://blog.jetbrains.com/dotnet/2023/10/24/how-to-use-testcontainers-with-dotnet-unit-tests/](https://blog.jetbrains.com/dotnet/2023/10/24/how-to-use-testcontainers-with-dotnet-unit-tests/)

### Generate local nuget packages
Interesting approach, which could probably streamline testing packages locally without the current prerelease scheme I tend to rely on. 
I see why you would use MSBuild for easy executing, but would probably go with the VS post build tooling instead of dealing with that.

[https://hachyderm.io/@scottgal/111427297956576007](https://hachyderm.io/@scottgal/111427297956576007)

### Okta FGA go-live
FGA got go-live (and Okta branding, not Auth0), now interesting to see pricing.

[https://auth0.com/blog/getting-unlimited-scalability-with-okta-fine-grained-authorization/?s=09](https://auth0.com/blog/getting-unlimited-scalability-with-okta-fine-grained-authorization/?s=09)

[https://www.ericksegaar.com/2024/03/04/introduction-into-openfga/](https://www.ericksegaar.com/2024/03/04/introduction-into-openfga/)

[https://pages.okta.com/2024-03-WBN-Introduce-FGA](https://pages.okta.com/2024-03-WBN-Introduce-FGA)

### Fluent and Material comparison
I am still torn on the approach to take for an upcoming Blazor project. Might end up with hand-rolling components/behaviour on top of Bootstrap, but it seems we might be missing out on consistency and some nice OOTB components?
Both MS Fluent UI Blazor components and MudBlazor are one-man bands though (like so much OS software), which has its own risk.

[https://www.uxpin.com/studio/blog/fluent-ui-vs-mui/](https://www.uxpin.com/studio/blog/fluent-ui-vs-mui/)

### v86 - emulate x86 in the browser
This never ceases to amaze me

[https://github.com/copy/v86](https://github.com/copy/v86)

### Gamify the hard decisions in security
It is hard

[https://trustandsafety.fun/](https://trustandsafety.fun/)

### A long list of resources to develop your career as a programmer
Can't say I read through them all, but there is a lot of good stuff to keep around for reference

[https://github.com/charlax/professional-programming](https://github.com/charlax/professional-programming)

[https://github.com/jordan-cutler/path-to-senior-engineer-handbook](https://github.com/jordan-cutler/path-to-senior-engineer-handbook)

### Trapping SMTP locally when developing
I have used a Smartermail installation and Mailtrap previously. This looks nice - no API though AFAICT.

[https://github.com/rnwood/smtp4dev?tab=readme-ov-file](https://github.com/rnwood/smtp4dev?tab=readme-ov-file)

### OpenTelemetry is ready for primetime
I spent some time pointing the ASP.NET Core sample from OpenTelemetry to AppInsights and Elastic, both of which work well. 
The application map and drilldown functionality in AppInsights seemed to be working great, not so familiar with the Elastic APM stack, but data showed up.
That is the way going forward, it might mean a few features from the vendor-specific instrumentation does not carry over, but what we have now is Good Enough.

[https://www.meziantou.net/monitoring-a-dotnet-application-using-opentelemetry.htm](https://www.meziantou.net/monitoring-a-dotnet-application-using-opentelemetry.htm)

[https://www.elastic.co/blog/manual-instrumentation-of-net-applications-opentelemetry](https://www.elastic.co/blog/manual-instrumentation-of-net-applications-opentelemetry)

[https://github.com/open-telemetry/opentelemetry-dotnet/tree/main/examples/AspNetCore](https://github.com/open-telemetry/opentelemetry-dotnet/tree/main/examples/AspNetCore)

### Developer portals
I spent some time trailing Atlassians entry in the developer portal ("Backstage") category, Compass. Seeing another take on what it should include made som things click (software catalog, one unified entry per component and dependencies are key).
It does seem it is early days for Compass though; considering the stack I usually work with, lots of stuff for which there are Backstage plugins was missing. I will check back if they keep at it.
Regardless of the product though, driving the culture change of valuing the platform enough to maintain the stuff inside is a Very Hard Problem.

[https://developer.atlassian.com/cloud/compass/overview/what-is-compass/](https://developer.atlassian.com/cloud/compass/overview/what-is-compass/)

### Aspire
I really liked Project Tye, but did not care for the deployment bits. Aspire models service discovery and container orchestration locally, but I need to look into how it would play with my usual 
non-containerized stack of Azure App Service (and other Azure SaaS services) with Azure SQL backend. The OpenTelemetry stuff is cool, and in any case, there are good conventions to steal in the project templates 
for that and resiliency. The FAQ indicates some thought went into App Services (vs most of the docs mentioning Container Apps, which I still consider a bit immature for general consumption), stuff to dig into:

[https://learn.microsoft.com/en-us/dotnet/aspire/reference/aspire-faq#why-would-i-use--net-aspire-service-discovery-when-docker-compose-has-it-built-in-and-works-with-kubernetes-](https://learn.microsoft.com/en-us/dotnet/aspire/reference/aspire-faq#why-would-i-use--net-aspire-service-discovery-when-docker-compose-has-it-built-in-and-works-with-kubernetes-)https://learn.microsoft.com/en-us/dotnet/aspire/reference/aspire-faq#why-would-i-use--net-aspire-service-discovery-when-docker-compose-has-it-built-in-and-works-with-kubernetes-

### Avoiding exceptions for flow control in C#
I have previously used [https://github.com/vkhorikov/CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions) to avoid flow control with exceptions, e.g. when validating.

[https://github.com/mcintyre321/OneOf](https://github.com/mcintyre321/OneOf) also looks nice / more general, with source generation.

And [https://github.com/MrDave1999/SimpleResults](https://github.com/MrDave1999/SimpleResults) is another option, with some nice translation options to ASP.NET results.

Sometimes it is easier to avoid the dependency and just roll your own, like [https://github.com/DuendeSoftware/IdentityServer/blob/main/src/IdentityServer/Validation/Models/ValidationResult.cs](https://github.com/DuendeSoftware/IdentityServer/blob/main/src/IdentityServer/Validation/Models/ValidationResult.cs)

Even more functional extensions in C#: [https://github.com/louthy/language-ext](https://github.com/louthy/language-ext)

### Cloudflared - tunnels from internt to local development
[https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)

`winget install --id Cloudflare.cloudflared`

Microsoft is also working on an offering, and I have used tools like NGrok before

### WireMock & TestContainers
Might be useful for some scenarios, I usually capture dependencies in a proxy class which I can stub during testing. This would allow to dig a little bit deeper, and run a pipeline slightly closer to production.

[https://cezarypiatek.github.io/post/mocking-outgoing-http-requests-p1/](https://cezarypiatek.github.io/post/mocking-outgoing-http-requests-p1/)

Another approach - run containers during testing:

[https://testcontainers.com/guides/getting-started-with-testcontainers-for-dotnet/](https://testcontainers.com/guides/getting-started-with-testcontainers-for-dotnet/)

I have used GitHub Actions SQL Server testcontainers for testing database changes, this could be used for slower-but-more-like-prod integration tests (where I usually reach for SQLite)

### Threat modelling and attack trees

This is a good and fast overview of threat modelling with data flow and STRIDE:

[https://www.youtube.com/watch?v=sreJHjS73uY](https://www.youtube.com/watch?v=sreJHjS73uY)

For more detail, attack trees built with 

[https://kellyshortridge.com/blog/posts/deciduous-attack-tree-app/](https://kellyshortridge.com/blog/posts/deciduous-attack-tree-app/)

looks nice. Have not worked with either for a while though, but there are some interesting design challenges popping up at work.

### Dotnet architecture
The poor eShop gets all sorts of treatments, like Blazor, DAPR, MediatR and containers. Go-to for running code when Redmond pumps out something new:

[https://github.com/dotnet-architecture](https://github.com/dotnet-architecture)
