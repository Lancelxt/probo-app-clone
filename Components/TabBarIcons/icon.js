import React from 'react';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLOR from '../../constants/Colors';
import PAGES from '../../constants/Pages';

const color = COLOR.DARK_TEXT;
const size = 30; 

const Icon = ({ focused, screen }) => {
    const icons = {
        [PAGES.HOME]: focused ? (
            <MaterialCommunityIcons name="home" size={size} color={color} />
        ) : (
            <MaterialCommunityIcons name="home-outline" size={size} color="grey" />
        ),
        [PAGES.SEARCH]: focused ? (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
        ) : (
            <MaterialCommunityIcons name="magnify" size={size} color="grey" />
        ),
        [PAGES.PORTFOLIO]: focused ? (
            <MaterialCommunityIcons name="briefcase-variant" size={size} color={color} />
        ) : (
            <MaterialCommunityIcons name="briefcase-variant-outline" size={size} color="grey" />
        ),
        [PAGES.REWARDS]: focused ? (
            <MaterialCommunityIcons name="gift" size={size} color={color} />
        ) : (
            <MaterialCommunityIcons name="gift-outline" size={size} color="grey" />
        ),
    };

    return icons[screen] || null;
};

export default Icon;
