import React, { useRef } from 'react';
import { View, Text, PanResponder, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import COLOR from '../constants/Colors';

const SwipeableButton = ({ text, onSwipeComplete, style, textStyle }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const iconWidth = calcWidth(8); // Set the width of the icon container
  const buttonWidth = calcWidth(86); // Set the width of the button
  const maxTranslateX = buttonWidth - iconWidth - calcWidth(4); // Calculate the maximum translation value

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          let newDx = gestureState.dx;
          if (newDx < 0) newDx = 0;
          if (newDx > maxTranslateX) newDx = maxTranslateX;
          Animated.event(
            [null, { dx: pan.x }],
            { useNativeDriver: false }
          )(e, { ...gestureState, dx: newDx });
        }
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > maxTranslateX / 2) {
          onSwipeComplete();
        }
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return (
    <View style={[styles.button, style]}>
      <Animated.View
        style={[styles.swipeIconContainer, { transform: [{ translateX: pan.x }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.arrowContainer}>
          <MaterialIcons name='arrow-forward-ios' size={16} color={COLOR.DARK_TEXT} />
          <View style={{ marginLeft: calcWidth(-3.6) }}>
            <MaterialIcons name='arrow-forward-ios' size={16} color={COLOR.DARK_TEXT} />
          </View>
        </View>
      </Animated.View>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: calcHeight(2),
    // paddingVertical: calcHeight(1),
    paddingHorizontal: calcWidth(2),
    borderRadius: calcHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: calcHeight(0.2),
  },
  swipeIconContainer: {
    backgroundColor: COLOR.BACKGROUND,
    padding: calcWidth(2),
    margin: calcWidth(0.4),
    borderRadius: calcHeight(100),
    marginRight: calcWidth(2),
  },
  arrowContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.BACKGROUND,
    padding: calcWidth(1),
    borderRadius: calcHeight(100),
  },
  buttonText: {
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: '700',
    color: COLOR.BACKGROUND,
  },
});

export default SwipeableButton;
