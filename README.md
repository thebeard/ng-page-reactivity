# Angular Page Reactivity

## Angular Boilerplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1. See [Angular CLI repo](https://github.com/angular/angular-cli/blob/main/packages/schematics/angular/library/files/README.md.template) for the rest of the boilerplate.

| Running this project                          | Command / URL           |
| --------------------------------------------- | ----------------------- |
| To start a local development server, run:     | `ng serve`              |
| To access the local development server, open: | `http://localhost:4200` |

## About this project

> An approximate excerpt of [src/app/routes/rationale/rationale.route.component.html](./src/app/routes/rationale/rationale.route.component.html)

We use frameworks and libraries because they do a lot of boilerplate and heavy lifting for us, often because we don't necessarily **want to** or **have the time to** understand all the lower level complexities of our corresponding front- and back-end; or full-stack principles.

At least for me, for the longest time **change detection** was one of the pieces of "magic" that I took for granted in my favourite Single Page Application framework, <a href="http://angular.dev">Angular</a>. The Angular team has been making very impressive changes since version 9 (now ten versions ago!); with some of biggest milestones for me being the Ivy Compiler, standalone components and improved control-flow handling in our Angular templates.

In this small project I am specifically tackling two things:

### An opinion of opinion

Unlike other SPA tools like Vue, React and Svelte, Angular is a fully-fledged, (consired very) opinionated, front-end framework. In turn, this is merely my opinion, but I believe Angular has already, and will continue to introduce alternative ways of building the same thing.

Often one use case requires nuances of an approach A and would suffer under an approach B, while vice versa the same might or might not be true.

In the past there would usually be a prescribed (not necessarily forced) way of doing things in Angular, where now the options to solve our challenges are not just becoming more expansive, but often comes down to language- or browser native approaches; or even in the form of industry-acknowledged agnostic library "primitives". I trust you will see some motivation towards that opinion of mine in this mini-project.

### The signal behind Signals

One of the other milestones is the use of Signals being adopted; or being encouraged for adoption, by the Angular team. There are enough articles on the internet related to the evolution of <a href="https://angular.dev/essentials/signals" target="_blank">Signals</a>, but this project would like to highlight the "long play" or the core driver behind the introduction of Signals.

Since inception Angular has been using <a href="https://www.npmjs.com/package/zone.js?activeTab=readme" target="_blank">zone.js</a> as it's foundation for change detection. The primary use case of this foundational element (and use within the Angular framework), is that it allowed developers to not "think" about change detection in their components. Angular is slowly removing, what has not been an inclusion ill-advised, but rather a "stay overwelcomed" by zone.js in the Angular framework.

Removing zone.js not only improves bundle size and performance, but it also steers us in new ways of thinking about- and writing Angular applications. Without zone.js many implementations of page state rendering in our existing solutions will merely stop working. A good command of Signals (and to a smaller degree rxjs coupled with asynchronous pipes/mechanisms) is required to enter the world of a zoneless Angular application.

This project uses the experimental Zoneless Change Detection provider and encourages the use of alternative change detection mechanisms. Review the following routes and their implementations of alternative change detection:

- Signals
- httpResource
