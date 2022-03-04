# Aspire

Aspire app allows users to view the debit card information & track their weekly spend limits.

### User Story - 1: "Debit Card" screen.
- When user launches the app. Tab bar at the bottom should be shown. It should have options (Home, Payment, Debit Card, Payments, Credit, Profile)
- By default, Debit Card Tab should be selected.
- The user should see the Debit card information.
- Header Section - The user should see the Debit Card title, application logo & available balance.
- Card Section - The user should be able to see the Virtual Debit Card with information card holder name, card number, exiry & CVV.
- On click of show/hide button, the card number's first 12 digits and expiry should be hidden using `.` & `*` characters respectively. Show button should change to hide button. This is applicable for the alternate case as well, on clicking button in hidden state the card should show the complete information and `hide button` should change to `show button`.
- Spent Progress - If weekly spend limit is set, the User should see the spent vs weekly limit progress. The progress should be filled with green color & a UI spent (in green color) | weekly limit (light gray color) format should be shown on the right top. Example - `$5,000 | $10,000`.
- Card Options - The user should see the card options (Top-up, Weekly spending limit, Free card, Get a new card & Deactivate cards)
- If Weekly spent limit is not set, the user should be able to click on the Weekly spending limit row.
- If Weekly spent limit is set, the user should not be able to click on the Weekly spending limit row. The user should see the message - `Your weekly spending limit is S$ 5,000` (Example)
- If Weekly spent limit is set, user should be able to toggle the progress UI using the Switch button provided in the weekly spend limit row.

### User Story - 2: "Weekly spending limit" screen.
- Upon click Weekly Spending Limit row in the Debit card screen, the user should be shown Weekly Spending Limit screen with title `Spending Limit` & app logo.
- User should see the 3 options(buttons) `5,000`, `10,000` & `20,000` to set the weekly spending limit.
- Intially, the Weekly Spending Limit label should show blank value & Save button should be grayed out and disabled.
- On clicking any of the options(buttons) the label above show the respected amount & Save button should be enabled and Save button color should be changed to theme green.
- User can any time go back to previous screen (Debit Card screen) by click `>` button on top left.
- Upon clicking Save button, the Weekly Spending Limit should be saved and user should be taken back to the Debit Card screen.

[![React Native](https://img.shields.io/badge/React%20Native-v0.67.2-green.svg)](https://facebook.github.io/react-native/) [![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v6.0-blue.svg)](https://reactnavigation.org/)

## Prerequisites

- [Node](https://nodejs.org) v16.13.2 and NPM v8.1.2
- [Yarn](https://yarnpkg.com/) v1.22.17
- Mac machine for React Native Development by following
  [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo,
   `git clone https://github.com/ashwanihundwani/Aspire.git`
2. Go to project's root directory, `cd Aspire`
3. Run `yarn` to install dependencies
4. Start the packager with `yarn start`
5. Use Emulator/Simulator or Android/iOS or Connect a mobile device to your development machine
6. Run the test application.

- On Android:
  - Run `react-native run-android` or Use Android Studio
- On iOS:
  - Open `ios/aspireapp.xcworkspace` in Xcode
  - Hit `Run` after selecting the simulator / desired device

## Development Points

- Used [jsonplaceholder.typicode.com](https://my-json-server.typicode.com/ashwanihundwani/mockJSONServer/debitCard) for API.
- Used `Avenir Next` font in both Android & iOS. In Android the text takes extra padding. Hence some adjustments are done using platform specific checks.

##### API Mock Response

`{"debitCard": { "holderName": "Ashwani Hundwani","cardNumber": "5702-6007-4060-0198", "expiry": "12/22","cvv": "405", "balance": "3,000", "weeklySpendLimit": "5,000", "spentAmount": "5,000"}}`

## Unit Testing
- Run command "jest" or "jest -u" (to update snapshots) to run the unit tests.

## User Stories

## List of Dependencies used

- [Typescript](https://www.typescriptlang.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Testing Library](https://github.com/testing-library/react-testing-library) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Jest Snapshot](https://jestjs.io/docs/snapshot-testing) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### NETWORKING

- [axios](https://github.com/axios/axios) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### STORAGE

- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux Saga](https://redux-saga.js.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Areas of imporvements

- More extensive testing can be done using react-testing-library.
- Linting tool like ESLint should be integration to catch code quality issues.

