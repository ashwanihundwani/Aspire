import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { AppColors, DebitCardString, layouting, testIDs } from '../utils/constants'
import { windowWidth, avenirFont, FontStyle } from '../utils/utils'

import Images from '../../src/assets/images';
import SpendLimitProgress from './SpendLimitProgress'

const { cardInfo } = DebitCardString

const spacingFactor: number = layouting.spacingFactor
const screenWidth: number = windowWidth()
const screenMargin: number = spacingFactor * 2
const cardNumberSplitter: string = cardInfo.cardNumberSplitter
const dotString: string = cardInfo.dotString
const hiddenCVV: string = cardInfo.hiddenCVV

interface CardInfoProps {
    holderName: string,
    cardNumber: string,
    expiry: string,
    CVV: string,
    weeklySpentLimit: string,
    amountSpent: string,
    showProgress: boolean
}

const CardInfo: React.FC<CardInfoProps> = (props: CardInfoProps) => {

    const [showInfo, setShowInfo] = useState<boolean>(true)
    const [cardNumber, setCardNumber] = useState<Array<string>>([])

    const cardNumberTokens = (cardNumber: string) => {
        const cardNumberTokens: string[] = cardNumber.split(cardNumberSplitter)
        let cardNumberDisplay: string[] = []
        cardNumberTokens.forEach((token) => {
            cardNumberDisplay.push(token);
        })
        setCardNumber(cardNumberDisplay)
    }

    const cardNumberTokensHidden = (cardNumber: string) => {
        const cardNumberTokens: string[] = cardNumber.split("-")
        let cardNumberDisplay: string[] = []
        let index: number = 0
        cardNumberTokens.forEach((token) => {
            if (index < cardNumberTokens.length - 1) {
                cardNumberDisplay.push(dotString)
            }
            else {
                cardNumberDisplay.push(token)
            }
            index++
        })
        setCardNumber(cardNumberDisplay)
    }

    useEffect(()=> {
        if(showInfo) {
            cardNumberTokens(props.cardNumber)
        }
        else {
            cardNumberTokensHidden(props.cardNumber)
        }
    }, [showInfo])

    return <View style={styles.container}>
        <TouchableOpacity
            testID={testIDs.showHideButton}
            style={styles.showButton}
            onPress={() => {
                setShowInfo(!showInfo)
            }}>
            <View style={styles.showButtonContent}>
                <Image source={showInfo ? Images.cardInfo.showIcon : Images.cardInfo.hideIcon} />
                <Text style={styles.showButtonText}>{showInfo ? DebitCardString.showCard : DebitCardString.hideCard}</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.card}>
            <Image style={styles.aspireLogo} source={Images.cardInfo.aspireLogo} />
            <Text style={styles.holderName}>{props.holderName}</Text>
            <View style={styles.cardNumberContainer}>
                <Text style={styles.cardNumber}>{cardNumber[0]}</Text>
                <Text style={styles.cardNumber}>{cardNumber[1]}</Text>
                <Text style={styles.cardNumber}>{cardNumber[2]}</Text>
                <Text style={styles.cardNumber}>{cardNumber[3]}</Text>
            </View>
            <View style={styles.expiryCVVContainer}>
                <Text style={styles.expiry}>{DebitCardString.expiry + props.expiry}</Text>
                <Text style={styles.cvv}>{DebitCardString.cvv}<Text style={showInfo ? styles.cvvValue : styles.hiddenCVV}>{(showInfo ? props.CVV : hiddenCVV)}</Text></Text>
            </View>
            <Image style={styles.visaLogo} source={Images.cardInfo.visa} />

        </View>
        {props.showProgress && <SpendLimitProgress spent={props.amountSpent} limit={props.weeklySpentLimit} />}
    </View>
}

export default React.memo<CardInfoProps>(CardInfo);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 34,
        marginBottom: 34
    },
    card: {
        marginTop: 0,
        alignSelf: "center",
        width: screenWidth - screenMargin,
        aspectRatio: 1.66,
        backgroundColor: AppColors.lightGreen,
        borderRadius: 14,
    },
    aspireLogo: {
        alignSelf: "flex-end",
        width: 74,
        height: 21,
        marginRight: spacingFactor,
        marginTop: spacingFactor
    },
    holderName: {
        color: AppColors.whiteColor,
        marginLeft: spacingFactor,
        marginTop: Platform.OS === 'ios' ? spacingFactor : spacingFactor - 10,
        fontFamily: avenirFont(FontStyle.Bold),
        fontSize: 22
    },
    cardNumberContainer: {
        flexDirection:"row",
        marginLeft: spacingFactor,
        marginTop: Platform.OS === 'ios' ? spacingFactor : spacingFactor - 5,
    },
    cardNumber: {
        marginRight:spacingFactor,
        letterSpacing: 3.46,
        color: AppColors.whiteColor,
        fontFamily: avenirFont(FontStyle.DemiBold),
        fontSize: 14
    },
    expiryCVVContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: Platform.OS === 'ios' ? 15 : 8
    },
    expiry: {
        color: AppColors.whiteColor,
        marginLeft: spacingFactor,
        fontFamily: avenirFont(FontStyle.DemiBold),
        fontSize: 13
    },
    cvv: {
        fontSize: 13,
        color: AppColors.whiteColor,
        marginLeft: 32,
        fontFamily: avenirFont(FontStyle.DemiBold),
    },
    cvvValue: {
        fontSize: 13,
        color: AppColors.whiteColor,
        marginLeft: 32,
        fontFamily: avenirFont(FontStyle.DemiBold),
    },
    hiddenCVV: {
        fontSize: 13,
        color: AppColors.whiteColor,
        marginLeft: 32,
        fontFamily: avenirFont(FontStyle.DemiBold),
    },
    visaLogo: {
        alignSelf: "flex-end",
        width: 59,
        height: 20,
        marginRight: spacingFactor,
        
    },
    showButton: {
        marginBottom: -10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        alignSelf: "flex-end",
        width: 151,
        height: 38,
        marginRight: spacingFactor,
        backgroundColor: AppColors.whiteColor
    },
    showButtonContent: {
        marginTop: 5,
        flexDirection: "row",
        alignSelf: "center"
    },
    showButtonText: {
        marginLeft: 6,
        color: AppColors.lightGreen,
        fontFamily: avenirFont(FontStyle.DemiBold),
        fontSize: 12,
    }
})
