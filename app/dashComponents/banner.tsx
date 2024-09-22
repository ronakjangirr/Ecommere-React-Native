import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { height, width } = Dimensions.get("window"); // Get screen dimensions

// const responsiveFontSize = (percentage: number) => {
//   return (width * percentage) / 100; // Calculate font size as a percentage of screen width
// };
export default function Banner() {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["#7286B4", "#E794CE"]} // Gradient colors
        start={{ x: 0, y: 0 }} // Start point for the gradient
        end={{ x: 1, y: 0 }} // End point for a 90-degree gradient (horizontal)
        style={styles.linearGradient}
      >
        <View style={styles.parentContainter}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: RFValue(20) }]}>
              {/* {" "} */}
              {/* Use RFValue for responsive text */}
              Grab upto 50% off on Selected headphones
            </Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </Pressable>
          </View>
          <View style={styles.textContainer}>
            <Text>Grab upto 50% off on Selected headphones</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center", // Centers the banner vertically within the parent
    alignItems: "center", // Centers the banner horizontally within the parent
    height: height * 0.5, // 50% of the screen height
    width: "93%", // Full width of the screen
  },
  linearGradient: {
    width: "100%", // Full width inside the wrapper
    height: "100%", // Full height inside the wrapper
    borderRadius: 10, // Rounded corners
    justifyContent: "center", // Center content vertically inside gradient
    alignItems: "center", // Center content horizontally inside gradient
  },
  parentContainter: {
    flexDirection: "row", // Arrange children in a column
    justifyContent: "space-between", // Distribute space between the children
    alignItems: "center", // Center children horizontally
    width: "100%", // Full width of the container
    paddingHorizontal: 20, // Add padding to the sides
  },
  textContainer: {
    flex: 1, // Allow the text container to grow
    marginRight: 10, // Optional margin between text containers
    maxWidth: "80%", // Limit the width to allow for wrapping
  },
  text: {
    color: "#2E0052",
    marginVertical: 20,
  },
  button: {
    width: "70%", // Set button width as a percentage of the container
    backgroundColor: "#2E0052",
    paddingVertical: 10, // Vertical padding inside the button
    borderRadius: 20, // Rounded corners
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    //   fontSize: responsiveFontSize(3), // Make button text responsive as well
  },
});

// NOTE-
// Why No display: flex?
// Not necessary: Flexbox is already the default behavior in React Native, so it’s redundant.
// Not valid: If you try to use display: flex in React Native, it won't work or apply any changes, as it doesn't exist in React Native's style system.
