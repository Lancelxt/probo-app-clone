import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Modal, TouchableOpacity, Text, TouchableWithoutFeedback, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from "../helper/res";
import HomeHeader from "../Components/HomeHeader";
import CategoryCard from "../Components/categoryCard";
import HeroBanner from "../Components/HeroBanner";
import TrendingSection from "../Components/TrendingSection";
import QuestionCard from "../Components/QuestionCard";
import SwipeableButton from "../Components/SwipeableButton";
import bitcoin from '../assets/bitcoin.png';
import Chess from '../assets/chess.png';
import Dollar from '../assets/dollar.png';
import Football from '../assets/football.png';
import Stocks from '../assets/increase.png';
import News from '../assets/newspaper.png';
import Olympic from '../assets/olympic.png';
import Basketball from '../assets/basketball.png';
import COLOR from "../constants/Colors";
import IC from "../assets/soccer.png"


function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [swipedOption, setSwipedOption] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const openModal = (option) => {
    setSelectedOption(option);
    setModalVisible(true);
    setOrderSuccess(false);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOption(null);
    setSwipedOption(null);
    setOrderSuccess(false);
  };

  const handleSwipeComplete = () => {
    setSwipedOption(selectedOption);
    setOrderSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  const getButtonStyle = (option) => {
    return {
      backgroundColor: selectedOption === option ? (option === "Yes" ? "#3366ff" : "#ff471a") : COLOR.BACKGROUND,
    };
  };

  const getSwipeButtonText = () => {
    if (orderSuccess) {
      return "Order Successful";
    }
    return selectedOption === "Yes" ? "Swipe for Yes" : "Swipe for No";
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
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
<Image source={IC} style={styles.ic} />

                <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "500" ,paddingHorizontal: calcHeight(2)}}>
                  India to win the 3rd T20I vs Sri Lanka?
                </Text>
                <View style={styles.selectorContainer}>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: selectedOption === "Yes" ? "#3366ff" : COLOR.BACKGROUND }]}
                    onPress={() => setSelectedOption("Yes")}
                  >
                    <Text style={[styles.buttonText, { color: selectedOption === "Yes" ? COLOR.BACKGROUND : COLOR.DARK_TEXT }]}>
                      Yes ₹ 7.3
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: selectedOption === "No" ? "#ff471a" : COLOR.BACKGROUND }]}
                    onPress={() => setSelectedOption("No")}
                  >
                    <Text style={[styles.buttonText, { color: selectedOption === "No" ? COLOR.BACKGROUND : COLOR.DARK_TEXT }]}>
                      No ₹ 2.3
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.outcome}>
                  <Text style={{ color: "#009933", fontSize: getFontSizeByWindowWidth(12), fontWeight: "600" }}>
                    High Probability of getting a match
                  </Text>
                  <View style={styles.moneyContainer}>
                    <View style={styles.money}>
                      <Text style={{ color: COLOR.DARK_TEXT, fontSize: getFontSizeByWindowWidth(18), fontWeight: "600" }}>
                        ₹7.2
                      </Text>
                      <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "400" }}>
                        You put
                      </Text>
                    </View>
                    <View style={styles.money}>
                      <Text style={{ color: "#009933", fontSize: getFontSizeByWindowWidth(18), fontWeight: "600" }}>
                        ₹10
                      </Text>
                      <Text style={{ color: COLOR.PRIMARY_TEXT, fontSize: getFontSizeByWindowWidth(12), fontWeight: "400" }}>
                        You put
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{backgroundColor:COLOR.BACKGROUND,elevation:calcHeight(0.28),paddingHorizontal:calcHeight(1)}}>
                {selectedOption && (
                  <SwipeableButton
                    text={getSwipeButtonText()}
                    onSwipeComplete={handleSwipeComplete}
                    style={{ backgroundColor: orderSuccess ? "#00cc44" : (selectedOption === "Yes" ? "#3366ff" : "#ff471a") }}
                  />
                )}
                </View>
                <View style={{marginTop:calcHeight(2)}}>
                <Text style={styles.bottomText}>Available Balance : ₹1580.00</Text>
                </View>
        
                
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
    paddingVertical: calcHeight(3), 
    borderTopLeftRadius: calcHeight(2),
    borderTopRightRadius: calcHeight(2),
  },
  button: {
    alignSelf: 'center',
    borderRadius: calcHeight(8),
    paddingVertical: calcHeight(1),
    paddingHorizontal: calcWidth(15),
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
  container: {
    backgroundColor: '#F2F2F2',
    flexGrow: 1,
    paddingBottom: calcHeight(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: calcWidth(4),
    paddingTop: calcHeight(4),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: calcWidth(2),
    marginTop: calcHeight(2),
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: calcHeight(1),
    width:calcWidth(20),
    borderRadius: calcHeight(1.6),
    alignItems: 'center',
    justifyContent:"center",

  },
  cardTitle: {
    fontSize: getFontSizeByWindowWidth(11),
    fontWeight: '600',
    marginBottom: calcHeight(0.4),
  },
  cardValue: {
    fontSize: 12,
    marginBottom: 5,
    color: '#009900',
  },
  cardPrice: {
    fontSize: getFontSizeByWindowWidth(10),
    fontWeight:"500",
  },
  imageContainer: {
    marginTop: calcHeight(2.8),
    paddingHorizontal:calcWidth(2),
  },
  imageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    position:"absolute",
    bottom:calcHeight(1),
    alignSelf:"center"
  },
  indicator: {
   
    width: calcHeight(1),
    height: calcHeight(1),
    borderRadius: calcHeight(2),
    backgroundColor: COLOR.BACKGROUND,
    marginHorizontal: calcHeight(0.28),
  },
  indicator1: {
   
    width: calcHeight(4),
    height: calcHeight(1),
    borderRadius: calcHeight(2),
    backgroundColor: COLOR.BACKGROUND,
    marginHorizontal: calcHeight(0.28),
  },
 
  iconContainer:{
    flexDirection:"row"
  },
  image:{
    resizeMode:"cover",
    width:calcWidth(96),
    height:calcHeight(20),
    borderRadius:calcHeight(1)
  },
  QuestionsContainer:{
    flexDirection:"column",
    gap:calcHeight(2),
    marginTop:calcHeight(2.8),
    paddingHorizontal:calcWidth(2),
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#f2f2f2',
    paddingVertical: calcHeight(3), // Add this is other's too
    borderTopLeftRadius: calcHeight(2),
    borderTopRightRadius: calcHeight(2),
  },
  button: {
    alignSelf: 'center',
    borderRadius: calcHeight(8),
    paddingVertical: calcHeight(1),
    paddingHorizontal: calcWidth(15),
  },
  buttonText: {
    color: COLOR.BACKGROUND,
    fontSize: getFontSizeByWindowWidth(12),
    fontWeight: "600",
    
  },
  buttonText2: {
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
   marginHorizontal: calcHeight(2), // Add this is other's too
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
    marginHorizontal: calcHeight(2), 
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: calcHeight(1),
  },
  money: {
    alignItems: "center",
  },
  ic:{
    position:"absolute",
    top:calcHeight(1.6),
    right:calcWidth(8),
    width:calcWidth(8),
    height:calcHeight(4)
  }
});

export default HomeScreen;
