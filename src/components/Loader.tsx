
import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

interface LoaderProps {
    isLoading?: boolean
    style?: any
}
const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
    if (!props.isLoading) {
        return null
    }
    return (
        <View style={props.style ? props.style : styles.container}>
            <ActivityIndicator size={'large'} color={'white'} animating />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(11, 20, 44, 0.55)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Loader
