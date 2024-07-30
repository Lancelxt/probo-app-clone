import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import TrendingCard from './trendingCard';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../../helper/res';
import COLOR from '../../constants/Colors';
import bitcoin from '../../assets/bitcoin.png'
import Chess from '../../assets/chess.png'
import Dollar from '../../assets/dollar.png'
import Football from '../../assets/football.png'
import Stocks from '../../assets/increase.png'
import News from '../../assets/newspaper.png'
import Olympic from '../../assets/olympic.png'
import Basketball from '../../assets/basketball.png'

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending Now</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
        <View style={styles.cardContainer}>
          <TrendingCard image={bitcoin} text={"Bitcoin"}/>
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard  image={News} text={"News"}/>
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard image={Olympic} text={"Olympics-2024"} />
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard image={Stocks} text={"Stocks"} />
        </View>
      </ScrollView>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
        <View style={styles.cardContainer}>
          <TrendingCard image={Olympic} text={"Olympics-2024"} />
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard image={Stocks} text={"Stocks"} />
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard image={bitcoin} text={"Bitcoin"}/>
        </View>
        <View style={styles.cardContainer}>
          <TrendingCard  image={News} text={"News"}/>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: calcHeight(1.6),
  },
  row: {
    flexDirection: 'row',
  },
  cardContainer: {
    marginRight: calcWidth(2.8), // Apply margin to create space between cards
  },
  text:{
    color:COLOR.PRIMARY_TEXT,
    fontSize:getFontSizeByWindowWidth(12),
    fontWeight:"500",
  },
});

export default TrendingSection;
