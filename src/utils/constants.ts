import { windowWidth, windowHeight } from "./utils";
import { Platform } from "react-native";

// Tab Name Constants
export const Tabs = { 
    home: "Home", 
    debit: "Debit Card", 
    payments: "Payments",
    credit: "Credit",
    account: "Profile"
} as const;

// Stack Route/Name Constants
export const StackScreens = { 
    debitCardTab: "Tab", 
    weeklySpentLimit: "WeeklySpendingLimit", 
    
} as const;

// Font Name Constants
export const FontNames = { 
    Avenir: "AvenirNext"  
} as const;

export const AppColors = {
    lightGray: "#DDDDDD",
    lightGreen: "#01D167",
    navigationBackColor: "#0C365A",
    navigationTintColor: "#FFFFFF",
    whiteColor: "#FFFFFF",
    darkTextColor: "#22222266",
    descriptionColor: "#222222",
    spentLimitText: "#22222233",
    separatorColor: "#DDDDDD",
    lightGreenWithOpacity: 'rgba(1,209,103, 0.07)',
    debitCardTitleColor: "#25345F",
    disabledSaveButton: "#EEEEEE"
}

export const CommonString = {
    currencySign: "S$",
    dollarSign: "$",
    switchSuffix:"_Switch"
}

export const DebitCardString = {
    headerTitle: "Debit Card",
    expiry: "Thru: ",
    cvv: "CVV: ",
    showCard: "Show card number",
    hideCard: "Hide card number",
    availableBalance: "Available Balance",
    spendLimitLabel: "Debit card spending limit",
    cardInfo: {
        cardNumberSplitter:"-",
        hiddenCVV: "* * *",
        dotString: '\u2022\u2022\u2022\u2022'
    }
}

export const WeeklySpendingString = {
    headerTitle: "Spending Limit",
    descriptionMessage: "Set a weekly debit card spending limit",
    infoMessage: "Here weekly means the last 7 days - not the calendar week", 
    saveButton: "Save",
    buttonTitle1: "S$ 5,000",
    buttonTitle2: "S$ 10,000",
    buttonTitle3: "S$ 20,000",
}

export const DebitCardOptions = {
    Titles : {
        topup: "Top-up account",
        weeklyspent: "Weekly spending limit",
        freezeCard: "Freeze card",
        newCard: "Get a new card",
        deactivated: "Deactivated cards"
    },
    Descriptions: {
        topup: "Deposit money to your account to use with card",
        weeklyspent: "You haven’t set any spending limit on card",
        freezeCard: "Your debit card is currently active",
        newCard: "This deactivates your current debit card",
        deactivated: "Your previously deactivated cards"
    },
}

export const layouting = {
    // Standard margin calculation to accomodate various screen sizes accross devices.
    spacingFactor: 0.058 * windowWidth(),
}

export const testIDs = {
    showHideButton: "DebitCard.CardInfo.showHide",
    cardOption: "DebitCard.CardOption",
    spendProgress:"DebitCard.SpendProgress"
}

  