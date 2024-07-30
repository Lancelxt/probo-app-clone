import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcHeight, calcWidth } from '../helper/res';

const HomeHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person-outline" size={26} color="black" />
            
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconContainer} >
        <Ionicons name="wallet-outline" size={26} color="black" />
        </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} >
        <Ionicons name="notifications-outline" size={26} color="black" />
        </TouchableOpacity>
          
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    header: {
      width:calcWidth(100),
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: calcWidth(2),
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
      borderColor: '#ccc',
      borderWidth:1,
      alignItems:"center",
      justifyContent:"center"
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green'
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap:20,
    }
  });
  
export default HomeHeader