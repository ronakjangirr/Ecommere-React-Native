import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Banner from './dashComponents/banner';
import FilterButtons from './dashComponents/filterButtons';

function Main() {
  return (
    <View style={styles.container}>
      <View style= {styles.bannerContainer}>
      <Banner/>
      </View>
      <View style={styles.filterContainer}>
        <FilterButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0', // Add a background color for visibility
    height: '100%', // Temporarily set a height

  },
  bannerContainer:{
    alignItems: 'center', // Center the Banner horizontally
    marginVertical:10
  },
  filterContainer: {
    zIndex: 1000, // Set the zIndex to ensure it appears above other components
  },

});

export default Main;
