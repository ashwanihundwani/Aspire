import React from 'react'
import { View, StyleSheet, Switch, Image, Text, TouchableOpacity } from 'react-native';
import { layouting, AppColors, CommonString } from '../utils/constants';
import { windowWidth, avenirFont, FontStyle, windowHeight } from '../utils/utils';

const spacing = layouting.spacingFactor
const width = windowWidth() - (spacing * 2)
const textSpacingMarginRight = 100
const textWidth = width - textSpacingMarginRight

export interface CardOptionProps {
    title: string,
    description: string,
    icon: any,
    showSwitch: boolean,
    switchEnabled?: boolean,
}

export interface CardOptionDisplayProps extends CardOptionProps {
    id: string,
    index: number
    onSwitchValueChanged?: (on: boolean, index: number) => void
    onClick: (index: number) => void
}
const DebitCardOption: React.FC<CardOptionDisplayProps> = (props: CardOptionDisplayProps) => {
    return (
        <TouchableOpacity
            testID={props.id}
            onPress={() => {
                // For this exercise, handling only Weekly spend action.
                if (props.index === 1) {
                    props.onClick(props.index)
                }
            }}
            style={styles.container}>
            <View style={styles.content}>
                <Image source={props.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.title} >{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>
            {props.showSwitch ? <Switch testID={props.id + CommonString.switchSuffix} onValueChange={(value) => {
                props && props.onSwitchValueChanged && props.onSwitchValueChanged(value, props.index)
            }} value={props.switchEnabled} /> : null}
        </TouchableOpacity>
    )
}

export default React.memo<CardOptionDisplayProps>(DebitCardOption);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 34,
        width: width,
        marginHorizontal: spacing
    },
    content: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    textContainer: {
        marginLeft: 12,
    },
    title: {
        color: AppColors.debitCardTitleColor,
        fontFamily: avenirFont(FontStyle.Medium),
        fontSize: 14,
        width: textWidth,
        marginTop: 4
    },
    description: {
        marginTop: 2,
        color: AppColors.darkTextColor,
        fontFamily: avenirFont(FontStyle.Regular),
        fontSize: 13,
        width: textWidth,

    }
})