import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import COLOR from "../constants/Colors";

const CategoryCard = ({image,text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLOR.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:calcHeight(1),
    paddingHorizontal:calcWidth(1),
    width:calcWidth(24),
    paddingVertical:calcHeight(1),
    gap:calcHeight(0.8),
    elevation:calcHeight(0.1)
  },
  text:{
    color:COLOR.PRIMARY_TEXT,
    fontSize:getFontSizeByWindowWidth(10)
  },
  image:{
    height:calcHeight(4),
    width:calcHeight(4),
  },
});
export default CategoryCard;