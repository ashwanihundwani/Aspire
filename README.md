# Aspire

Aspire app allows users to track their daily spend limits. Below are some of the features in this application:
1. The app allows the user to see the Debit Card available balance & virtual card(Card Number, Expiry, CVV).
2. The app provides the user with the option to show/hide the card number & CVV.
3. User can see his spent vs available limit quota. The app shows a progress/fill UI for this.
4. The app provides the user with the option to show/hide the spent vs available quota UI.
5. The user can choose/update weekly spending limit. The app provides 3 options - S$ 5,000, S$ 10,000, S$ 20,000
6. The app calculates the available spent limit upon choosing the new weekly spending limit, thereby giving user a view of his/her new spending limits.

# Aspire Mobile Dev Challenge

[![React Native](https://img.shields.io/badge/React%20Native-v0.67.2-green.svg)](https://facebook.github.io/react-native/) [![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v6.0-blue.svg)](https://reactnavigation.org/)

## Prerequisites

- [Node](https://nodejs.org) v16.13.2 and NPM v8.1.2
- [Yarn](https://yarnpkg.com/) v1.22.17
- Mac machone for React Native Development by following
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

## User Stories

### US-1: "Debit Card" page functionalities.

- When a user clicks on the Debit Card icon at the bottom tab, the Debit Card details page should be displayed.
- When a user clicks on Debit Card Details, should be displayed with the Available Balance, based on the API response
- When a user clicks on Show card number, the card numbers & CVV should be visible and eye icon should be strikethrough also the text should be changed into "Hide card number".
- When a user clicks on "Hide card number", the card numbers & CVV should be hidden and the strikethrough of the eye icon should be removed also the text should be back to "Show card number"
- When user click on Weekly spending limit, should be redirected to the Spending limit page.
- Based on the amount spent the Debit card spending limit progress bar should be coloured out in green colour. Also the spent amount should be displayed at the right top of the progress bar with the total spending limit amount. Ex: `S$ 345` | `S$ 5,000`.

### US-2: Spending limit functionalities

- When a user clicks on "Weekly spending limit" (the whole row should be clickable when it's in off status) "Spending limit" page should be displayed.
- When a user clicks on any options from the default amounts (Ex: S$ 5000, S$ 10000, S$ 20000), should be populated in the "Set a weekly debit card spending limit" field.
  When a user entered or selected the amount, "Save" button should be enabled (By default without any amount, it should be in disabled status).
- When the user clicks on the "Save" button, should be redirected to the "Debit card" page and below changes should happen in the Debit Card page.
- "Weekly spending limit" default text message should be changed into "Your weekly spending limit is `S$5000`" (the amount should be changed as per the entered or selected value).
- The Weekly spending limit switch should be enabled with green colour.
- Progress bar should be shown with the entered or selected amount.
- When user switch off the "Weekly spending limit" in Debit card,
  Progress bar with amount details should be removed.
- "Weekly spending limit" default text should be changed into "You haven't set any spend limit on card".
- When the user again clicks or enables the "Weekly spending limit", the already entered amount should be maintained in the "Spending Limit" amount field.
- When a user enters the amount manually and then clicks on option amount, the entered value should be replaced by the selected option value (Ex: User entered `S$ 3000` and then clicked on `S$ 5000` from option, the amount should be replaced with `S$ 5000`).
- When the user clicks on the back icon, it should be redirected to the "Debit Card" page.

## List of Dependencies used

- [Typescript](https://www.typescriptlang.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### NETWORKING

- [axios](https://github.com/axios/axios) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### STORAGE

- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux Saga](https://redux-saga.js.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
