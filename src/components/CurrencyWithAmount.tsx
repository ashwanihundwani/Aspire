import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CommonString, AppColors, layouting } from '../utils/constants'
import { avenirFont, FontStyle } from '../utils/utils'

const spacingFactor = layouting.spacingFactor

interface CurrencyWithAmountProps {
  amount: string,
  textColor?: string
}

const CurrencyWithAmount: React.FC<CurrencyWithAmountProps> = (props: CurrencyWithAmountProps) => {

  return (
    <View style={styles.balanceContent}>
      <View style={styles.balanceLabelContainer}>
        <Text style={styles.balanceLabel}>{CommonString.currencySign}</Text>
      </View>
      <Text style={[styles.balanceValue, props.textColor ? { color: props.textColor } : {}]}>{props.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  balanceContainer: {
    marginTop: spacingFactor
  },
  balance: {
    fontSize: 14,
    color: AppColors.whiteColor,
    marginLeft: spacingFactor,
    fontFamily: avenirFont(FontStyle.Medium),
  },
  balanceContent: {
    flexDirection: "row",
    marginLeft: spacingFactor,
    marginTop: 10,
  },
  balanceLabelContainer: {
    marginTop: 5,
    borderRadius: 4,
    width: 40,
    height: 22,
    backgroundColor: AppColors.lightGreen,
  },
  balanceLabel: {
    color: AppColors.whiteColor,
    fontFamily: avenirFont(FontStyle.Bold),
    fontSize: 12,
    textAlign: "center",
    marginTop: 4
  },
  balanceValue: {
    color: AppColors.whiteColor,
    fontFamily: avenirFont(FontStyle.Bold),
    fontSize: 24,
    textAlign: "center",
    marginLeft: 10,
  }
})

export default React.memo<CurrencyWithAmountProps>(CurrencyWithAmount)