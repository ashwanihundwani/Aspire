import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AppColors, layouting, WeeklySpendingString, testIDs } from '../utils/constants';
import { avenirFont, FontStyle, windowHeight, windowWidth } from '../utils/utils';
import Images from '../../src/assets/images';
import CurrencyWithAmount from '../components/CurrencyWithAmount';
import AmountButton from '../components/AmountButton';
import { DebitCardResponse, DebitCardRequest } from '../models/DebitCardModel';
import { useSelector, useDispatch } from 'react-redux';
import { updateDebitCard } from '../store/actions/debitCardActions';

const amounts: string[] = ["5,000", "10,000", "20,000"]
const spacingFactor = layouting.spacingFactor
const screenWidth = windowWidth()
const bottomSheetHeight = windowHeight() - 130 // Calculation based on layouts in design
const separatorWidth = screenWidth - (spacingFactor * 2)
const buttonContainerWidth = separatorWidth
const saveButtonSpacing = 0.135 * screenWidth
const saveButtonWidth = screenWidth - (saveButtonSpacing * 2)

const WeeklySpendingLimit = (props: any) => {

  const dispatch = useDispatch();
  const debitCardResponse: DebitCardResponse = useSelector((state: any): DebitCardResponse => state.debitCardReducer.debitCard)

  const [selectedAmount, setSelectedAmount] = useState(debitCardResponse ? debitCardResponse.weeklySpendLimit : "")

  const amountButtonClicked = (index: number) => {
    setSelectedAmount(amounts[index])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{WeeklySpendingString.headerTitle}</Text>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetContentContainer}>
          <View style={styles.descriptionContainer}>
            <Image style={styles.descriptionIcon} source={Images.weeklySpent.spent} />
            <Text>{WeeklySpendingString.descriptionMessage}</Text>
          </View>
          <CurrencyWithAmount amount={selectedAmount} textColor={AppColors.descriptionColor} />
          <View style={styles.separator} />
          <Text style={styles.infoText}>{WeeklySpendingString.infoMessage}</Text>
          <View style={styles.buttonsContainer}>
            <AmountButton amount={amounts[0]} onClick={() => {
              amountButtonClicked(0)
            }} />
            <AmountButton amount={amounts[1]} onClick={() => {
              amountButtonClicked(1)
            }} />
            <AmountButton amount={amounts[2]} onClick={() => {
              amountButtonClicked(2)
            }} />
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            disabled={selectedAmount.length == 0}
            onPress={() => {
              let debitCardRequest: DebitCardRequest = { ...debitCardResponse }
              debitCardRequest.weeklySpendLimit = selectedAmount
              dispatch(updateDebitCard(debitCardRequest))
              props.navigation.goBack()
            }}
            style={[styles.saveButton, selectedAmount.length > 0 ? { backgroundColor: AppColors.lightGreen } : { backgroundColor: AppColors.disabledSaveButton }]}>
            <Text style={styles.saveButtonText}>{WeeklySpendingString.saveButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.navigationBackColor
  },
  headerTitle: {
    marginTop: 10,
    fontFamily: avenirFont(FontStyle.Bold),
    fontSize: 24,
    color: AppColors.navigationTintColor,
    marginLeft: layouting.spacingFactor
  },
  bottomSheet: {
    flex: 1,
    width: "100%",
    height: bottomSheetHeight,
    marginTop: 60,
    backgroundColor: AppColors.whiteColor,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottomSheetContentContainer: {
    flex: 1
  },
  descriptionContainer: {
    flexDirection: "row",
    marginLeft: layouting.spacingFactor,
    marginTop: layouting.spacingFactor,


  },
  descriptionIcon: {
    marginRight: 12
  },
  descriptionText: {
    color: AppColors.descriptionColor,
    fontSize: 14,
    fontFamily: avenirFont(FontStyle.Medium)
  },
  separator: {
    marginLeft: spacingFactor,
    width: separatorWidth,
    height: 0.7,
    marginTop: 3,
    backgroundColor: AppColors.separatorColor
  },
  infoText: {
    marginTop: 14,
    fontSize: 13,
    fontFamily: avenirFont(FontStyle.Regular),
    color: AppColors.darkTextColor,
    marginLeft: spacingFactor
  },
  buttonsContainer: {
    marginTop: spacingFactor,
    width: buttonContainerWidth,
    marginLeft: spacingFactor,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  saveButtonContainer: {
    justifyContent: "flex-end",
    marginBottom: 50
  },
  saveButton: {
    backgroundColor: AppColors.lightGreen,
    width: saveButtonWidth,
    height: saveButtonSpacing,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: saveButtonSpacing,
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: avenirFont(FontStyle.DemiBold),
    color: AppColors.whiteColor,
    textAlign: "center",
  }

});

export default WeeklySpendingLimit

