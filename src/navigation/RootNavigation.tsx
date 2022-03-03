import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs, StackScreens } from '../utils/constants';
import { avenirFont, FontStyle } from '../utils/utils';
import { AppColors } from '../utils/constants'
import DebitCard from '../screens/DebitCard'
import WeeklySpendingLimit from '../screens/WeeklySpendingLimit';
import Images from '../../src/assets/images';

//Dummy placeholder for rest of the screen that are not the part of excercise.
// Like Home, Payments.
function PlaceHolderScreen() {
    return (
        <View style={styles.placeHolder}>
        </View>
    );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function TabNavigator() {
    return <Tab.Navigator defaultScreenOptions={{
        headerShown: false
    }} initialRouteName={Tabs.debit}
        screenOptions={({ route }) => ({
            tabBarIcon: () => {
                if (route.name === Tabs.home) {
                    return <Image source={Images.bottomTabBar.home}></Image>
                }
                else if (route.name === Tabs.debit) {
                    return <Image source={Images.bottomTabBar.debitCard}></Image>
                }
                else if (route.name === Tabs.payments) {
                    return <Image source={Images.bottomTabBar.payments}></Image>
                }
                else if (route.name === Tabs.credit) {
                    return <Image source={Images.bottomTabBar.credit}></Image>
                }
                else if (route.name === Tabs.account) {
                    return <Image source={Images.bottomTabBar.account}></Image>
                }
            }

        })}>
        <Tab.Screen
            options={{
                tabBarLabelStyle: {
                    fontFamily: avenirFont(FontStyle.Medium),
                    fontSize: 9, color: AppColors.lightGray
                }
            }}
            name={Tabs.home}
            component={PlaceHolderScreen} />
        <Tab.Screen
            options={{
                headerShown: false,
            }}
            name={Tabs.debit}
            component={DebitCard} />
        <Tab.Screen options={{ tabBarLabelStyle: styles.tabLabelStyle }} name={Tabs.payments} component={PlaceHolderScreen} />
        <Tab.Screen options={{ tabBarLabelStyle: styles.tabLabelStyle }} name={Tabs.credit} component={PlaceHolderScreen} />
        <Tab.Screen options={{ tabBarLabelStyle: styles.tabLabelStyle }} name={Tabs.account} component={PlaceHolderScreen} />
    </Tab.Navigator>
}
export default function RootNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={StackScreens.debitCardTab} component={TabNavigator} />
                <Stack.Screen
                    options={{
                        headerTitle: "",
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: AppColors.navigationBackColor
                        },
                        headerShadowVisible: false,
                        headerTintColor: AppColors.whiteColor,
                        headerRight: () => {
                            return (
                                <Image style={{ marginRight: 20, marginTop: 0 }} source={Images.app.logo}></Image>
                            )
                        },
                    }}
                    name={StackScreens.weeklySpentLimit} component={WeeklySpendingLimit} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    placeHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabLabelStyle: {
        fontFamily: avenirFont(FontStyle.Medium), 
        fontSize: 9, 
        color: AppColors.lightGray 
    }
})

