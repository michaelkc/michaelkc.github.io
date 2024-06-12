---
layout: post
title:  "Interesting stuff i found - june 2024"
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
I plan on taking the latter from spike to limited implementation soon.
