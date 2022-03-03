import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { windowWidth } from '../utils/utils'

interface ProgressBarProps {
    tintColor: string,
    backgroundColor: string,
    width: number,
    height: number,
    percentage: number
    borderRadius: number
}

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {

    const containerStyle = {
        width: props.width,
        height: props.height,
        borderRadius: 15,
        backgroundColor: props.backgroundColor
    }
    const trapezoidStyle = {

        width: props.width * props.percentage / 100,
        height: 20,
        borderTopColor: props.tintColor,
        borderTopWidth: 40,
        borderRightWidth: 20,
        borderRightColor: 'transparent',
    }
    const solidStyle = {
        width: "100%",
        backgroundColor: props.tintColor,
        height: 20
    }

    return <View style={[containerStyle, { overflow: "hidden" }]}>
        <View style={props.percentage < 100 ? trapezoidStyle : solidStyle}>
        </View>

    </View>
}

export default React.memo<ProgressBarProps>(ProgressBar)

const styles = StyleSheet.create({
})