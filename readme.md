# chris-playwright-demo 🎭

## Description

This is a Playwright demo implementation by [Chris Atkinson](mailto:cjatkinson19@gmail.com).

The framework implements the page object pattern. The included spec demonstrates a pattern whereby a spec is optimized to run in serial mode. The spec evaluates four criteria:
* Are all of the interactive elements present on the page?
* Can the page successfully render a front-end error?
* Can the page successfully render a back-end error?
* Can the primary functionality of the page be achieved?

## Installation

1. Clone this repository:

```bash
git clone git@github.com:cjatkinson/chris-playwright-demo.git
```

2. Install the dependencies:

```bash
cd chris-playwright-demo
npm i
```

3. Test the installation:

```bash
npm run test
```

The framework will run the test suite against Chrome and Firefox. The last test is the suite fails intentionally to demonstrate some of the implementaion features. If you run into issues, please let me know [via email](mailto:cjatkinson19@gmail.com).

## Usage

The framework can be run in a variety of modes, abstracted as scripts in `node_modules`.

```bash
# run the framework in headless mode
npm run test
```

```bash
# run the framework in headed mode
npm run test:head
```

```bash
# run the framework in UI mode
npm run test:ui
```

```bash
# run only tests tagged with @smoke
npm run test:smoke
```


## TODO
* Implement API test suite.
* Implement CircleCI.