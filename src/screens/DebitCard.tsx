import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Image, Animated, Platform } from 'react-native';
import { AppColors, DebitCardString, layouting, DebitCardOptions, CommonString, testIDs } from '../utils/constants';
import CardInfo from '../components/CardInfo';
import { avenirFont, FontStyle, windowHeight } from '../utils/utils';
import DebitCardOption, { CardOptionProps } from '../components/DebitCardOption';
import Images from '../../src/assets/images';
import CurrencyWithAmount from '../components/CurrencyWithAmount';
import { useDispatch, useSelector } from 'react-redux';
import { requestDebitCardInfo } from '../store/actions/debitCardActions';
import { DebitCardResponse } from '../models/DebitCardModel';
import Loader from '../components/Loader'

const spacingFactor = layouting.spacingFactor
const bottomSheetMaxOffset = 240;
const bottomSheetMinOffset = 0;
const bottomSheetScrollDistance = bottomSheetMaxOffset - bottomSheetMinOffset;

interface AvailableBalanceProps {
  balance: string
}

const AvailableBalance: React.FC<AvailableBalanceProps> = (props: AvailableBalanceProps) => {
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balance}>{DebitCardString.availableBalance}</Text>
      <CurrencyWithAmount amount={props.balance} />
    </View>
  )
}
const DebitCard = (props: any) => {

  const dispatch = useDispatch();
  const debitCardResponse: DebitCardResponse = useSelector((state: any): DebitCardResponse => state.debitCardReducer.debitCard)
  const loading: boolean = useSelector((state: any): boolean => state.loadingReducer.isLoading)


  const scrollY = useRef(new Animated.Value(0)).current;
  const [debitCardOptions, setDebitCardOptions] = useState<CardOptionProps[]>([
    {
      title: DebitCardOptions.Titles.topup,
      description: DebitCardOptions.Descriptions.topup,
      icon: Images.cardInfo.topup,
      showSwitch: false,
    },
    {
      title: DebitCardOptions.Titles.weeklyspent,
      description: DebitCardOptions.Descriptions.weeklyspent,
      icon: Images.cardInfo.weeklySpent,
      showSwitch: true,
      switchEnabled: true
    },
    {
      title: DebitCardOptions.Titles.freezeCard,
      description: DebitCardOptions.Descriptions.freezeCard,
      icon: Images.cardInfo.freezeCard,
      showSwitch: true,
      switchEnabled: false
    },
    {
      title: DebitCardOptions.Titles.newCard,
      description: DebitCardOptions.Descriptions.topup,
      icon: Images.cardInfo.newCard,
      showSwitch: false,

    },
    {
      title: DebitCardOptions.Titles.deactivated,
      description: DebitCardOptions.Descriptions.topup,
      icon: Images.cardInfo.deactivateCard,
      showSwitch: false
    },
  ])

  const onSwitchValueChanged = (on: boolean, index: number) => {
    let tempOptions = [...debitCardOptions]
    tempOptions[index].switchEnabled = on
    setDebitCardOptions(tempOptions)
  }

  const onClick = (index: number) => {
    if (index === 1) {
      props.navigation.navigate("WeeklySpendingLimit")
    }
  }

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, bottomSheetScrollDistance],
    outputRange: [0, -bottomSheetScrollDistance],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    dispatch(requestDebitCardInfo());
    return () => {
      // Cleanup/unsuscribe from events
    }
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: AppColors.navigationBackColor }}>
      {debitCardResponse &&
        <>
          <View style={styles.logo}>
            <Text style={styles.headerTitle}>{DebitCardString.headerTitle}</Text>
            <Image style={{ marginRight: layouting.spacingFactor, marginTop: 0 }} source={Images.app.logo}></Image>
          </View>
          <AvailableBalance balance={debitCardResponse.balance} />
          <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: headerTranslateY }] }]} />
          <Animated.FlatList testID="dddddd"
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }], // event.nativeEvent.contentOffset.x to scrollX
              { useNativeDriver: true }, // use native driver for animation
            )}
            style={styles.optionsList}
            bounces={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.cardInfo}>
                <CardInfo
                  showProgress={debitCardOptions[1].switchEnabled ? debitCardOptions[1].switchEnabled : false}
                  holderName={debitCardResponse.holderName}
                  cardNumber={debitCardResponse.cardNumber}
                  expiry={debitCardResponse.expiry}
                  CVV={debitCardResponse.cvv}
                  weeklySpentLimit={debitCardResponse.weeklySpendLimit}
                  amountSpent={debitCardResponse.spentAmount}
                />
              </View>
            }
            data={debitCardOptions}
            renderItem={({ item, index }) => {
              const { title, description, icon, showSwitch, switchEnabled } = item
              return <DebitCardOption
                title={title}
                description={description}
                icon={icon}
                showSwitch={showSwitch}
                switchEnabled={switchEnabled}
                index={index}
                onSwitchValueChanged={onSwitchValueChanged}
                onClick={onClick}
                id={testIDs.cardOption + index}
              />
            }}>
          </Animated.FlatList>
        </>
      }
      <Loader isLoading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between"
  },
  headerTitle: {
    marginTop: Platform.OS === 'ios'? 20 : 16,
    fontFamily: avenirFont(FontStyle.Bold),
    fontSize: 24,
    color: AppColors.navigationTintColor,
    marginLeft: 24
  },
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
  optionsList: {
    position: "absolute",
    top: 0,
    bottom: 2
  },
  cardInfo: {
    paddingTop: 150,
    backgroundColor: "transparent"
  },
  bottomSheet: {
    position: "absolute",
    top: 283,
    height: windowHeight() - 50,
    alignSelf: "flex-end",
    borderTopLeftRadius: spacingFactor,
    borderTopRightRadius: spacingFactor,
    backgroundColor: "white",
    width: "100%"
  }
});

export default DebitCard

