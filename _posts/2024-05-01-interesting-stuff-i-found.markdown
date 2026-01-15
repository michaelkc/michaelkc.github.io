---
layout: post
title:  "Interesting stuff I found - May 2024"
date:   2024-05-01 22:48:20 +0200
---
### MicroK8s, k3s and minikube
Small scale, opinionated and supposedly much easier to get running than Kubernetes used to be, this is something I am considering dedicating some time to. 

For production work, App Service and more PaaS-y services like Container Apps still seems preferable to running Kubernetes proper.

[https://microk8s.io/compare](https://microk8s.io/compare)

### Squooosh
Got reminded of this one today. Easy way to optimize and/or analyze impact of optimizing images, e.g. to optimized WebP with reduced palette

[https://squoosh.app/](https://squoosh.app/)

### Fermyon Spin - WebAssembly FaaS
Attended a workshop on this last year, interesting to track how it evolves

[https://developer.fermyon.com/](https://developer.fermyon.com/)

### .http files in Rider
Like old-school Postman, with env/secret/oauth support. But sucks that you need Rider or IntelliJ Ultimate to run them. Visual Studio has some support, but seems to be missing the authn stuff at least. I will probably stick to Postman and/or Bruno for now.

Edit 28/5 [https://www.leeholmes.com/security-risks-of-postman/](https://www.leeholmes.com/security-risks-of-postman/) - true, it is incredibly difficult to navigate Postman config values to avoid them being cloud synced.

[https://www.jetbrains.com/help/rider/OAuth_2.0_authorization.html](https://www.jetbrains.com/help/rider/OAuth_2.0_authorization.html)

### How developers spend their time
Via Adam Thornhill / CodeScene "The Code Quality Advantage"

Developers spend only 5% of time writing code, so until LLMs can maintain huge codebases, optimizing for generation is optimizing 5% of time spent.

[https://robertominelli.com/assets/downloads/publications/Mine2015b.pdf](https://robertominelli.com/assets/downloads/publications/Mine2015b.pdf)

### Third party cookie phaseout rolling out in Chrome
After going back and forth a number of times, Google is finally rolling it out, initially to 1% of users.
This is going to produce a lot of "interesting" error reports on legacy software...

[https://developers.google.com/privacy-sandbox/3pcd](https://developers.google.com/privacy-sandbox/3pcd)

### Maester - Pester tests to compare an Entra tenant to best practice setup
Useful if you are responsible for the security of an Entra tenant

[https://maester.dev/](https://maester.dev/)

### Local coding assistant
Use Llama3 as a GitHub CoPilot-like coding assistant in VSCode with [Ollama](https://ollama.com/) (available on winget) and [Continue](https://docs.continue.dev/intro)

[Let's build an AI Coding assistant with Llama3](https://x.com/paulabartabajo_/status/1785006607253852281)

### NetArchTest to enforce structural constraints
I have been using [NetArchTest](https://github.com/BenMorris/NetArchTest) in combination with Feature Folders with great success for a while. Recommended.

[https://www.milanjovanovic.tech/blog/enforcing-software-architecture-with-architecture-tests](https://www.milanjovanovic.tech/blog/enforcing-software-architecture-with-architecture-tests)

### On matching problem at hand with the right technology
I love this line of thinking. So often I encounter the solution (e.g. shiny new tech) looking for a problem to solve, but you should absolutely reach for complex tech (like lower-level Kubernetes) when it is warranted by the requirements.

[You can’t assess whether Kubernetes is a poor choice because of “high operational burden” without understanding the problem we are solving.](https://x.com/samgoodwin89/status/1784414025323049235)

### Scaling history at Uber
When people want to go microservices from day 1 for imaginary scaling concerns, it is nice to be able to remind them that Uber started life as a LAMP stack monolith

[https://highscalability.com/brief-history-of-scaling-uber/](https://highscalability.com/brief-history-of-scaling-uber/)

### Authn & authz -> login & permissions
Via Slashdot, makes sense

[https://ntietz.com/blog/lets-say-instead-of-auth/](https://ntietz.com/blog/lets-say-instead-of-auth/)
