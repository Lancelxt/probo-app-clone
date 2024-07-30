import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Portfolio = () => {
  return (
    <View style={Styles.container}>
      <Text>Portfolio</Text>
    </View>
  )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
    })
export default Portfolio