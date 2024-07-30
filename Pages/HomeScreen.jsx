import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import HomeHeader from "../Components/HomeHeader";
import CategoryCard from "../Components/categoryCard";
import HeroBanner from "../Components/HeroBanner";
import TrendingSection from "../Components/TrendingSection";
import QuestionCard from "../Components/QuestionCard";
import SwipeableButton from "../Components/SwipeableButton";
import bitcoin from '../assets/bitcoin.png'
import Chess from '../assets/chess.png'
import Dollar from '../assets/dollar.png'
import Football from '../assets/football.png'
import Stocks from '../assets/increase.png'
import News from '../assets/newspaper.png'
import Olympic from '../assets/olympic.png'
import Basketball from '../assets/basketball.png'
import COLOR from "../constants/Colors";

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openModal = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOption(null);
  };

  const handleSwipeComplete = () => {
    console.log(`Swiped ${selectedOption}`);
    closeModal();
  };

  const getButtonStyle = (option) => {
    return {
      backgroundColor: selectedOption === option ? (option === "Yes" ? "blue" : "red") : COLOR.BACKGROUND,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.categoryList}
            showsHorizontalScrollIndicator={false}
          >
            <CategoryCard text={"Bitcoin"} image={bitcoin} />
            <CategoryCard text={"Chess"} image={Chess} />
            <CategoryCard text={"Economics"} image={Dollar} />
            <CategoryCard text={"Football"} image={Football} />
            <CategoryCard text={"Stocks"} image={Stocks} />
            <CategoryCard text={"News"} image={News} />
            <CategoryCard text={"Olympics 2024"} image={Olympic} />
            <CategoryCard text={"Basketball"} image={Basketball} />
          </ScrollView>
        </View>
        <View style={styles.heroBanner}>
          <HeroBanner />
        </View>
        <View style={styles.trendingSection}>
          <TrendingSection />
        </View>
        <View style={styles.questionsContainer}>
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
          <QuestionCard openModal={openModal} />
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "500" }}>India to win the 3rd T20I vs Sri Lanka?</Text>
            <View style={styles.selectorContainer}>
              <TouchableOpacity
                style={[styles.button, getButtonStyle("Yes")]}
                onPress={() => setSelectedOption("Yes")}
              >
                <Text style={styles.buttonText}>Yes ₹ 7.3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, getButtonStyle("No")]}
                onPress={() => setSelectedOption("No")}
              >
                <Text style={styles.buttonText}>No ₹ 2.3</Text>
              </TouchableOpacity>
            </View>
            {selectedOption && (
              <SwipeableButton
                // text={`${selectedOption} ₹ ${selectedOption === "Yes" ? "7.3" : "2.3"}`}
                text={`${selectedOption}`}
                onSwipeComplete={handleSwipeComplete}
                style={{ backgroundColor: selectedOption === "Yes" ? "blue" : "red" }}
              />
            )}
            <View style={styles.outcome}>
              <Text style={{ color: "#009933", fontSize: getFontSizeByWindowWidth(12), fontWeight: "600" }}>High Probability of getting a match</Text>
              <View style={styles.moneyContainer}>
                <View style={styles.money}>
                  <Text style={{ color: COLOR.DARK_TEXT, fontSize: getFontSizeByWindowWidth(18), fontWeight: "600" }}>₹7.2</Text>
                  <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "400" }}>You put</Text>
                </View>
                <View style={styles.money}>
                  <Text style={{ color: "#009933", fontSize: getFontSizeByWindowWidth(18), fontWeight: "600" }}>₹10</Text>
                  <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "400" }}>You put</Text>
                </View>
              </View>
            </View>
            <Text style={styles.bottomText}>Available Balance : ₹1580.00</Text>
            <TouchableOpacity onPress={closeModal} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: calcHeight(2),
  },
  categoryList: {
    flexDirection: "row",
    gap: calcWidth(4),
    marginTop: calcHeight(1),
    paddingHorizontal: calcWidth(2),
  },
  heroBanner: {
    marginTop: calcHeight(2),
    paddingHorizontal: calcWidth(2),
  },
  trendingSection: {
    marginTop: calcHeight(2.8),
    paddingHorizontal: calcWidth(2),
  },
  questionsContainer: {
    marginTop: calcHeight(2),
    paddingHorizontal: calcWidth(2),
    flexDirection: "column",
    gap: calcHeight(1),
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    padding: calcHeight(2),
    borderTopLeftRadius: calcHeight(2),
    borderTopRightRadius: calcHeight(2),
    maxHeight: '40%',
  },
  button: {
    alignSelf: 'center',
    borderRadius: calcHeight(8),
    paddingVertical: calcHeight(1),
    paddingHorizontal: calcWidth(16),
  },
  buttonText: {
    color: COLOR.DARK_TEXT,
    fontSize: getFontSizeByWindowWidth(12),
    fontWeight: "600",
  },
  selectorContainer: {
    flexDirection: "row",
    backgroundColor: COLOR.BACKGROUND,
    elevation: calcHeight(0.2),
    borderRadius: calcHeight(8),
    justifyContent: "space-around",
    marginBottom: calcHeight(3),
    marginTop: calcHeight(1),
  },
  bottomText: {
    color: COLOR.PRIMARY_TEXT,
    fontWeight: "500",
    alignSelf: "center",
  },
  outcome: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: calcWidth(15),
    paddingVertical: calcHeight(2),
    borderRadius: calcHeight(1),
    elevation: calcHeight(0.1),
    marginBottom: calcHeight(2),
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: calcHeight(1),
  },
  money: {
    alignItems: "center",
  },
});

export default HomeScreen;