import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../../helper/res'
import { MaterialIcons } from '@expo/vector-icons'
import COLOR from '../../constants/Colors'
import PAGES from '../../constants/Pages'
import { useNavigation } from '@react-navigation/native'

const TrendingCard = ({image,text}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(PAGES.QUESTIONS)}>
<Image source={image}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        flexDirection:"row",
        alignItems:"center",
        gap:calcWidth(2),
        paddingHorizontal:calcWidth(2),
        paddingVertical:calcHeight(1.6),
    borderRadius:calcWidth(2),
    },
    text:{
        color:COLOR.DARK_TEXT,
        fontSize:getFontSizeByWindowWidth(12),
        fontWeight:"700",
    },
})
export default TrendingCard