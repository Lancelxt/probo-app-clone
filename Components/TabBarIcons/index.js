import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import Icon from './icon'; // Adjust the import path as needed
import { calcHeight, calcWidth } from '../../helper/res';

function CustomTabBar({ state, descriptors, navigation }) {
    // Create an array of Animated.Values, one for each tab
    const animations = useRef(state.routes.map(() => new Animated.Value(0))).current;

    const handlePressIn = (index) => {
        // Start animation when the user presses the tab
        Animated.timing(animations[index], {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handlePressOut = (index) => {
        // Reset animation when the user releases the tab
        Animated.timing(animations[index], {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const handlePress = (routeName, index, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: routeName,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(routeName);
        }
    };

    const backgroundColors = animations.map(anim =>
        anim.interpolate({
            inputRange: [0, 9],
            outputRange: ['transparent', 'black'],
        })
    );

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.tabButton}
                        onPress={() => handlePress(route.name, index, isFocused)}
                        onPressIn={() => handlePressIn(index)}
                        onPressOut={() => handlePressOut(index)}
                        activeOpacity={1} // Disable default opacity change
                    >
                        <Animated.View style={[styles.animatedContainer, { backgroundColor: backgroundColors[index] }]}>
                            <Icon
                                focused={isFocused}
                                screen={route.name}
                            />
                        </Animated.View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: calcHeight(0.1),
        borderTopColor: '#ddd',
        height: calcHeight(8),
        overflow: 'hidden',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    animatedContainer: {
        borderRadius: 100,
        height: 88,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CustomTabBar;
