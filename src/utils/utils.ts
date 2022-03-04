
import { FontNames } from './constants'
import { Dimensions } from 'react-native'

export enum FontStyle {
    Regular = "Regular",
    Medium = "Medium",
    DemiBold = "DemiBold",
    Bold = "Bold",
}

export function avenirFont(style: FontStyle) {
    return FontNames.Avenir + "-" + style
}

export function windowWidth() {
    return Dimensions.get("window").width
}

export function windowHeight() {
    return Dimensions.get("window").height
}

export function parseNumberFromString(str: string) : number {
    
    return str ? parseInt(str.replace(/,/g, ''), 10): 0
}