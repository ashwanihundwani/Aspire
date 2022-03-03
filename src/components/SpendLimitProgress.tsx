import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { layouting, DebitCardString, AppColors, CommonString, testIDs } from '../utils/constants'
import { avenirFont, FontStyle, windowWidth, parseNumberFromString } from '../utils/utils'
import ProgressBar from './ProgressBar'
const containerPadding = layouting.spacingFactor

interface SpentLimitProps {
    spent: string,
    limit: string,
}


const SpendLimitProgress: React.FC<SpentLimitProps> = (props: SpentLimitProps) => {

    const calculateSpentPercent = () => {
        const spentNumber = parseNumberFromString(props.spent)
        const weeklyLimitNumber = parseNumberFromString(props.limit)
        return (spentNumber * 100) / weeklyLimitNumber
    }
    return <View testID={testIDs.spendProgress} style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.textLabel}>{DebitCardString.spendLimitLabel}</Text>
            <Text style={styles.textValueSpent}>{CommonString.dollarSign + props.spent}<Text style={styles.textValueLimit}>{" | " + CommonString.dollarSign + props.limit}</Text></Text>
        </View>
        <ProgressBar
            backgroundColor={AppColors.lightGreenWithOpacity}
            tintColor={AppColors.lightGreen}
            width={windowWidth() - (layouting.spacingFactor * 2)}
            height={15}
            percentage={calculateSpentPercent()}
            borderRadius={8}
        />
    </View>
}

export default React.memo<SpentLimitProps>(SpendLimitProgress)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 26,
        paddingHorizontal: containerPadding
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6
    },
    textLabel: {
        fontFamily: avenirFont(FontStyle.Medium),
        fontSize: 13,
        color: AppColors.descriptionColor
    },
    textValueSpent: {
        fontFamily: avenirFont(FontStyle.DemiBold),
        fontSize: 13,
        color: AppColors.lightGreen
    },
    textValueLimit: {
        fontFamily: avenirFont(FontStyle.DemiBold),
        fontSize: 13,
        color: AppColors.spentLimitText
    },
})