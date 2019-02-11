# Test Kitchen Sink v1.0.0

[![Build Status](https://travis-ci.com/santiagotimothy/cypress-web.svg?branch=develop)](https://travis-ci.com/santiagotimothy/cypress-web)
[![Test Status](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/eg39nu/runs)

Example Node.js webpage + container showcasing different testing tools for UI, API and Unit testing including:

  - Selenium
  - Cypress

### Dependencies:

|  | Version |
| ----- | ----- |
| Node | 8.x |
| Express | 4.16.x |
| Cypress | 3.1.4 |
| Selenium Webdriver | 4.0.0 |
| Chai | 4.2.0 |
| Chai-HTTP | 4.2.1 |
| Express BodyParser | 1.18.3 |

### Usage

Install all hard and dev dependencies:

```sh
$ npm install
```

Starting the Express web server instance on port `8008`
```sh
$ npm start
```
which afterwards, you can open your browser to `http://localhost:8008/` to view the built web app.

Run Cypress Test:
```sh
$ npm run cypress:run
```
which runs all of the UI and API tests under the Cypress folder.

Open Cypress App:
```sh
$ npm run cypress:open
```
to open the Cypress app and execute individual test scripts and sessions for debugging.

Record Cypress Run:
```sh
$ npm run cypress:run:record
```
which executes the tests on a headless browser (Electron) and outputs the video recording under `/videos` folder.

Start Selenium test:
```sh
$ npm run selenium:run:chrome
```
starts the Selenium UI and API tests on Chrome and Chai respectively.

### File and Project structure
Folders:
| Folder | Description |
| ----- | ----- |
| `api`| Contains all API code |
| `containers` | Contains all web HTML codes |
| `cypress` | Contains all `Cypress` tests, under `/integration` folder |
| `lib` | Miscellaneous libraries |
| `public` | Contains all public scripts that are used for front-end |
| `selenium` | Contains all Selenium scripts under `/tests` |

Files:
| File | Description |
| `app.js` | Web app engine file |
| `cypress.json` | Cypress config |
| `travis.yml` | TravisCI config |




**As Inspired by:**
Native Base Kitchen Sink (https://nativebase.io/kitchen-sink-app)
