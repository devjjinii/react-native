import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNaviOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    }, {
         // initialRouteName: 'MealDetail',
        defaultNavigationOptions : defaultStackNaviOptions
    });

const FavNavigator = createStackNavigator(
    {
       Favorites: FavoritesScreen,
       MealDetail: MealDetailScreen
    }, {
         // initialRouteName: 'MealDetail',
        defaultNavigationOptions : defaultStackNaviOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, 
        navigationOptions : {
            tabBarIcon: tabInfo => {
                return (
                    <Icon name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.primaryColor
        }},
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Icon name='ios-star' size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
    barStyle: {
        backgroundColor: Colors.accentColor
    }
}) 
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);
