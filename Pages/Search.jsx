import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={Styles.container}>
      <Text>Search</Text>
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

export default Search