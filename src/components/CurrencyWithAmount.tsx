import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
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
 
  balanceContent: {
    flexDirection: "row",
    marginLeft: spacingFactor,
    marginTop: Platform.OS === 'ios' ?  10 : 0,
  },
  balanceLabelContainer: {
    marginTop: Platform.OS === 'ios' ? 5 : 10,
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
    marginTop: Platform.OS === 'ios' ? 4 : 0,
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