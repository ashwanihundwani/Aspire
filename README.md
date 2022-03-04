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

- [Node](https://nodejs.org) v14.16 and NPM v7.7.5
- [Yarn](https://yarnpkg.com/) v1.22.10
- A development machine set up for React Native by following
  [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo,
   `git clone https://github.com/manimaran-c/aspiretask`
2. Go to project's root directory, `cd aspiretask`
3. Run `yarn` to install dependencies
4. Start the packager with `yarn start`
5. Connect a mobile device to your development machine
6. Run the test application:

- On Android:
  - Run `react-native run-android` or Use Android Studio (Recommended)
- On iOS:
  - Open `ios/aspireapp.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

## Development Points

- Used [mockapi.io](https://6208a5be90422d00173aee9a.mockapi.io/getCardInfo) for API and it's not stable, sometimes you may face timeout issue.
- In `debitcardReducer` given some default values due to unstable condition of mockapi
- As `Avenir Next` font is not available for free, I used `Metropolis` font
- I Used `React Native Paper` for Switch UI, so iOS and Android switches will be different as they are displayed in their native UI

##### API Mock Response

`{ "data": [ { "cardDetails": { "cardHolderName": "Jessie Kerluke", "cardNumber": "3056-9309-0259-0486", "cardValidity": "10/24", "cardCvv": "590" }, "balance": "5000", "amountSpend": "1000", "id": "1" } ] }`

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
- [React Native Paper](https://callstack.github.io/react-native-paper/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Number Format](https://github.com/s-yadav/react-number-format) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [RN Sliding Panel](https://octopitus.github.io/rn-sliding-up-panel/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### NETWORKING

- [axios](https://github.com/axios/axios) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### STORAGE

- [AsyncStorage](https://github.com/react-native-async-storage/async-storage) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux Saga](https://redux-saga.js.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux Persist](https://github.com/rt2zz/redux-persist/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [Redux Logger](https://github.com/LogRocket/redux-logger) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
