import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLOR from '../../constants/Colors';
import PAGES from '../../constants/Pages';

const color = COLOR.DARK_TEXT;
const size = 30;

const Icon = ({ focused, screen }) => {
    if (screen === PAGES.QUESTIONS) {
        return null; // Hide the icon for the Questions screen
    }

    const icons = {
        [PAGES.HOME]: focused ? (
            <>
                <MaterialCommunityIcons name="home" size={size} color={color} />
                <Text style={{ fontWeight: "600" }}>Home</Text>
            </>
        ) : (
            <>
                <MaterialCommunityIcons name="home-outline" size={size} color="grey" />
                <Text style={{ fontWeight: "600", color: "grey" }}>Home</Text>
            </>
        ),
        [PAGES.SEARCH]: focused ? (
            <>
                <MaterialCommunityIcons name="magnify" size={size} color={color} />
                <Text style={{ fontWeight: "600" }}>Search</Text>
            </>
        ) : (
            <>
                <MaterialCommunityIcons name="magnify" size={size} color="grey" />
                <Text style={{ fontWeight: "600", color: "grey" }}>Search</Text>
            </>
        ),
        [PAGES.PORTFOLIO]: focused ? (
            <>
                <MaterialCommunityIcons name="briefcase-variant" size={size} color={color} />
                <Text style={{ fontWeight: "600" }}>Portfolio</Text>
            </>
        ) : (
            <>
                <MaterialCommunityIcons name="briefcase-variant-outline" size={size} color="grey" />
                <Text style={{ fontWeight: "600", color: "grey" }}>Portfolio</Text>
            </>
        ),
        [PAGES.REWARDS]: focused ? (
            <>
                <MaterialCommunityIcons name="gift" size={size} color={color} />
                <Text style={{ fontWeight: "600" }}>Rewards</Text>
            </>
        ) : (
            <>
                <MaterialCommunityIcons name="gift-outline" size={size} color="grey" />
                <Text style={{ fontWeight: "600", color: "grey" }}>Rewards</Text>
            </>
        ),
    };

    return icons[screen] || null;
};

export default Icon;
