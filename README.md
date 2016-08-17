# Angular 2 SPA displaying upcoming Marathons

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html).  After following
the 5 min quickstart, I built an app displaying upcoming marathons.  This was just
to get a better feel for Angular2 new design and features. I found the collected
the content myself, so I do not feel it is maintainable at scale.


<img width="1002" alt="screen shot 2016-08-17 at 12 37 10 am" src="https://cloud.githubusercontent.com/assets/12709735/17728915/713adb20-6416-11e6-9c43-4cfe60464159.png">

<img width="1020" alt="screen shot 2016-08-17 at 12 37 28 am" src="https://cloud.githubusercontent.com/assets/12709735/17728905/6055b4b0-6416-11e6-8c61-f3dc60b9140e.png">

# Difficulties
- The quick start package is quite big. I spent a large portion of development reading docs.
on the unfamiliar technologies.

# Future Development
- If i planned to maintain this app, I would need to find a great api or website to scrap for content.  
- The next step is expanding on the app features.
- The quickstart is set up for Karma/Jasmine testing, so I would like to dabble with those programs.


## Install app

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/relative-rene/racingapp-ng2.git my-proj
cd my-proj

```
Node.js and npm are essential to Angular 2 development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.


Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

### npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

### Unit Tests
Run it with `npm test`

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (Ctrl-C) and quick restart it.

The `HTML-Reporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`.

### End-to-end (E2E) Tests
run them with `npm run e2e`.
