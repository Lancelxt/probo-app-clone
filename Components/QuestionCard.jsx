import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import COLOR from "../constants/Colors";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import { MaterialIcons } from "@expo/vector-icons";
import PAGES from '../constants/Pages';
import IC from "../assets/soccer.png"

const QuestionCard = ({ openModal }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(PAGES.QUESTIONS)}>
      <View style={styles.header}>
        <MaterialIcons name="people-outline" size={calcHeight(2.4)} color="grey" />
        <Text style={styles.text}>28701 traders</Text>
        <MaterialIcons name="keyboard-arrow-right" size={calcHeight(2)} color="grey" />
      </View>
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            { color: COLOR.DARK_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "500" },
          ]}
        >
          India to win the 3rd T20I vs Sri Lanka?
        </Text>
      </View>
      <View style={styles.description}>
        <MaterialIcons name="description" size={calcHeight(2)} color="black" />
        <Text
          style={[
            styles.text,
            { color: COLOR.DARK_TEXT, fontSize: getFontSizeByWindowWidth(10), fontWeight: "400" },
          ]}
        >
          H2H last 5 T20 : IND 4, SL 1, DRAW 0
        </Text>
        <Text
          style={[
            styles.text,
            { color: COLOR.DARK_TEXT, fontSize: getFontSizeByWindowWidth(10), fontWeight: "500", color: COLOR.LINK },
          ]}
        >
          Read More
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => openModal("Yes")}>
          <Text style={styles.btnTxt}>Yes ₹ 7.3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#ffe0cc" }]} onPress={() => openModal("No")}>
          <Text style={[styles.btnTxt, { color: "#ff6600" }]}>No ₹ 2.3</Text>
        </TouchableOpacity>
      </View>
<Image source={IC} style={styles.ic} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: calcWidth(2),
    paddingVertical: calcHeight(1),
    borderRadius: calcHeight(0.8),
    elevation: calcHeight(0.08),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: calcWidth(1),
  },
  content: {
    marginRight: calcWidth(16),
    marginTop: calcHeight(2),
  },
  text: {
    color: COLOR.PRIMARY_TEXT,
    fontSize: getFontSizeByWindowWidth(10),
    fontWeight: "400",
  },
  description: {
    flexDirection: "row",
    gap: calcWidth(2),
    marginTop: calcHeight(2),
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: calcHeight(1),
  },
  button: {
    backgroundColor: "#e6ecff",
    paddingVertical: calcHeight(1.2),
    paddingHorizontal: calcWidth(14.6),
    borderRadius: calcHeight(1),
  },
  btnTxt: {
    color: "#4d79ff",
    fontSize: getFontSizeByWindowWidth(12),
    fontWeight: "800",
  },
  ic:{
    position:"absolute",
    top:calcHeight(3.2),
    right:calcWidth(3.2),
    width:calcWidth(8),
    height:calcHeight(4)
  }
});

export default QuestionCard;
