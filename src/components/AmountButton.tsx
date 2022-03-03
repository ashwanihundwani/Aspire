import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AppColors, CommonString } from '../utils/constants'
import { FontStyle, avenirFont, windowWidth } from '../utils/utils'

const amountButtonWidth = windowWidth() * 0.275

interface AmountButtonProps {
    amount: string,
    onClick: () => void
}

const AmountButton: React.FC<AmountButtonProps> = (props: AmountButtonProps) => {
    return <TouchableOpacity
        onPress={() => {
            props.onClick()
        }}>
        <View style={styles.content}>
            <Text style={styles.buttonText}>{CommonString.currencySign + " " + props.amount}</Text>
        </View>
    </TouchableOpacity>
}

export default React.memo<AmountButtonProps>(AmountButton)

const styles = StyleSheet.create({

    content: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: amountButtonWidth,
        backgroundColor: AppColors.lightGreenWithOpacity,
        borderRadius: 4,
    },
    buttonText: {
        position: "absolute",
        color: AppColors.lightGreen,
        fontSize: 12,
        textAlign: "center",
        fontFamily: avenirFont(FontStyle.DemiBold)
    }
})