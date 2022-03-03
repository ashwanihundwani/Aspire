export interface DebitCardModel {

    holderName: string,
    cardNumber: string,
    expiry: string,
    cvv: string,
    balance: string,
    weeklySpendLimit: string,
    spentAmount: string
}

export interface DebitCardResponse extends DebitCardModel {
}

export interface DebitCardRequest extends DebitCardModel {
}
