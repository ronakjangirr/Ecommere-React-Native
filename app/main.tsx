import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "./dashComponents/banner";
import FilterButtons from "./dashComponents/filterButtons";
import Products from "./dashComponents/products";

function Main() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.invertedScrollView} // Apply rotation to ScrollView
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Banner />
        </View>
        <View style={styles.filterContainer}>
          <FilterButtons />
        </View>
        <View style={styles.productsContainer}>
          <Products />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // scrollViewContent: {
  //   flexGrow: 1,
  //   justifyContent: 'flex-end', // Align the content to the bottom
  // },
  // invertedScrollView: {
  //   // transform: [{ rotate: '180deg' }], // Invert the scroll direction
  // },
  // container: {
  //   flex: 1,
  //   // backgroundColor: '#e0e0e0', // Add a background color for visibility
  //   height: '100%', // Temporarily set a height

  // },
  // bannerContainer:{
  //   alignItems: 'center', // Center the Banner horizontally
  //   marginVertical:10
  // },
  // filterContainer: {
  //   zIndex: 1000, // Set the zIndex to ensure it appears above other components
  // },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start", // Align the content to the top
  },
  invertedScrollView: {
    // transform: [{ rotate: '180deg' }], // Invert the scroll direction
  },
  container: {
    flex: 1,
    height: "100%", // Set a height
  },
  bannerContainer: {
    alignItems: "center", // Center the Banner horizontally
    marginVertical: 10,
  },
  filterContainer: {
    marginVertical: 20,
  },
  productsContainer: {
    marginTop: 80, // Adjust this value to give space for the FilterButtons
  },
});

export default Main;
