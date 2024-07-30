// SwipeableButton.js
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import COLOR from '../constants/Colors';

const SwipeableButton = ({ text, onSwipeComplete, style, textStyle }) => {
  const handleSwipe = () => {
    onSwipeComplete();
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handleSwipe}>
        <View style={{flexDirection:"row",backgroundColor:COLOR.BACKGROUND,padding:calcWidth(2),borderRadius:calcHeight(100)}}>
        <MaterialIcons name='arrow-forward-ios' size={20}/>
        <View style={{marginLeft:calcWidth(-4)}}>
        <MaterialIcons name='arrow-forward-ios' size={20}/>
        </View>
        </View>
      <Text style={[styles.buttonText, textStyle]}>Swipe for {text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom:calcHeight(2),
    // backgroundColor: '#fff',
    backgroundColor: 'orange',
    paddingVertical: calcHeight(1),
    paddingHorizontal: calcWidth(2),
    borderRadius: 5,
    flexDirection:"row",
    alignItems:"center",
    borderRadius:calcHeight(8),
    elevation: calcHeight(0.2),
  },
  buttonText: {
    paddingHorizontal:calcWidth(16),
    fontSize: getFontSizeByWindowWidth(14),
    fontWeight: '700',
    color: COLOR.BACKGROUND,
  },
});

export default SwipeableButton;
