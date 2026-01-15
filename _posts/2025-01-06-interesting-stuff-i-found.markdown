---
layout: post
title:  "Interesting stuff I found - January 2025"
date:   2024-01-06 09:14:00 +0200
---
### Real Time Sources for Azure Event Hubs / Kafka
Real data like public transportation or weather, pushed as CloudEvents to Azure Event Hubs or Kafka. Could be useful for test and design work on event driven architectures. Something I am beginning to dabble in.

[https://github.com/clemensv/real-time-sources](https://github.com/clemensv/real-time-sources)

### Building a Container Runtime by Hand & How to Manually Download Container Images
I really like this concise breakdown of how containers work, including interactions with underlying kernel features

[Building a Container Runtime by Hand](https://medium.com/@donovan.hubbard/demystifying-containers-part-1-4555311061fc)

[How to Manually Download Container Images](https://medium.com/@donovan.hubbard/how-to-manually-download-container-images-8189bb60baa5)

### Entra ID AI-powered free text query "agent" 
Cool stuff, very approachable. But still a huge problem that the models cannot be trusted to not go haywire. Lots of innovation going on in this space, maybe someone will come up with a good enough solution...

[https://blog.darrenjrobinson.com/an-entra-id-ai-agent-using-powershell/](https://blog.darrenjrobinson.com/an-entra-id-ai-agent-using-powershell/)

### Nullables for testing
[Nullables](https://www.jamesshore.com/v2/projects/nullables) presents an alternative approach to slow end to end tests, or brittle Mock-based tests which constrains refactoring and often end up testing too little to be representative of actual behaviour.

I second his analysis of the issues with end to end and mock-heavy tests, and i like the use of a consistent pattern language.

For me the issue is not so much including stub code in production as it is going from DI to instantiating dependencies inline (with Nullable propagation). 

Would love to try out this approach and/or go through the [free course](https://www.jamesshore.com/v2/courses/testing-without-mocks), if time permits.

### Cognitive load is what matters
Short but still lots of good stuff. The discussion of Shallow vs Deep modules and their impact on cognitive load puts words on something I often pondered when reading "5 lines of code" style guidance.

[https://minds.md/zakirullin/cognitive](https://minds.md/zakirullin/cognitive)
