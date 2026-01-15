---
layout: post
title:  "Interesting stuff I found - June 2024"
date:   2024-06-04 14:19:20 +0200
---
### Messaging with Transactional Outbox
We are once more looking at eventing architecture in my team, and I spent some time looking into messaging wrappers with built-in [Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html). 
The point being that we want business logic SQL transactions to encompass delivery (or lack thereof) of messages based on commit/rollback.

A few projects exist which are "pure" outbox approaches, like

- [SlimMessageBus](https://github.com/zarusz/SlimMessageBus)
- [SqlTransactionalOutbox](https://github.com/cajuncoding/SqlTransactionalOutbox)
- [TransactionalOutbox](https://transactionalbox.com/) (work-in-progress)

In the end, we wanted something more popular though. That left NServiceBus, Rebus and MassTransit

NServiceBus is a commercial product, and while that is not necessarily a showstopper, it adds a lot of friction internally.

MassTransit has no support for _Transactional_ Outbox, but tries to approach it with an [in-memory / disk-persistent (as I understand it) outbox](https://masstransit.io/documentation/patterns/transactional-outbox)

I spent most time with Rebus, specifically [Rebus.SqlServer](https://github.com/rebus-org/Rebus.SqlServer), which has historically supported [transactional sending of events when using the SQL Server transport](https://github.com/rebus-org/RebusSamples/tree/master/SqlAllTheWay/SqlAllTheWay).

More recently, support for [SQL-based transactional outbox](https://github.com/rebus-org/Rebus/issues/819#issuecomment-1118565853) was added, which can work with the other transports as well (Azure Service Bus etc.). 
I plan on taking the latter from spike to limited implementation soon. EDIT 26/06/2024 I did and still happy with the results.

### App Service Web App for Containers vs Azure Container Apps
We use App Service for most workloads, but are looking into Container Apps for its Aspire & DAPR support + scale to zero. Currently, the Kubernetes bits seem to bleed through when you hit custom networking, which is curbing our enthusiasm. But I am sure it will get better.

[https://www.blueboxes.co.uk/app-service-web-app-for-containers-vs-azure-container-apps](https://www.blueboxes.co.uk/app-service-web-app-for-containers-vs-azure-container-apps)

### user-jwts
Similar to user-secrets (which we are phasing out on new projects in favor of KeyVault-only config) and the .NET config system, user-jwts has the ability to locally intercept the JWT Bearer middleware to whitelist the locally-generated tokens for calls to the developer machine. It works well, even if the Duende guys [think it is the wrong approach](https://x.com/BrockLAllen/status/1517854469047914496)

[https://learn.microsoft.com/en-us/aspnet/core/security/authentication/jwt-authn](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/jwt-authn)

### Building Messaging Endpoints in Azure: Container Apps
Jimmy is a great educator, and after thinking and trialing a few options I fully agree with his statement _At this point, I'd say Container Apps would be my go-to choice for deploying message endpoints to Azure._
I just tried out the Keda autoscaler in Container Apps with a worker and a Rebus Azure Service Bus queue, and it scaled to zero and back based on queue length with zero issues.

[https://www.jimmybogard.com/building-messaging-endpoints-in-azure-container-apps/](https://www.jimmybogard.com/building-messaging-endpoints-in-azure-container-apps/)

### Vertical Slice Architecture / feature folders
Speaking of Jimmy Bogard, we  try to move stuff to [vertical slice archicture](https://www.jimmybogard.com/vertical-slice-architecture/) / [feature folders](https://scottsauber.com/2016/04/25/feature-folder-structure-in-asp-net-core/) internally. I can see why Microsoft push out layering-by-technical-function by default, but it sure sucks as soon as things get largish. 
