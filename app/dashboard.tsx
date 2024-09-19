import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TextInput, Pressable, View, Text, Dimensions } from "react-native";
import Main from "./main";
import Logout from "./logout";
import Cart from "./cart";

const Tab = createBottomTabNavigator(); // for Tab.Navigator
// Get screen width
const { width: SCREEN_WIDTH } = Dimensions.get("window");

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search initiated:", searchQuery);
    // Add your search logic here
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle, // Use styles for header background and height
        headerTintColor: "white", // Use a color string directly for the text color
        tabBarStyle: styles.tabBarStyle, // Use styles for the tab bar (footer)
        tabBarLabelStyle: styles.tabBarLabelStyle, // Font size for tab label
        tabBarActiveTintColor: "white", // Active tab color (icon/text)
        tabBarInactiveTintColor: "lightgray", // Inactive tab color (icon/text)
        headerLeft: () => (
          <View style={styles.headerRightContainer}>
            <TextInput
              style={[styles.searchBar, { width: SCREEN_WIDTH * 0.8 }]} // Set width to 80% of the screen width
              placeholder="Search..."
              placeholderTextColor="lightgray"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Pressable style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>Go</Text>
            </Pressable>
          </View>
        ),
      }}
    >
      <Tab.Screen 
      name="Main" 
      component={Main} 
      options={{
        headerTitle: "", // To Remove the label from header tab
        // tabBarLabel: "", // To Remove the label from footer tab
      }} 
      />
      <Tab.Screen 
      name="Cart" 
      component={Cart} 
      options={{
        headerTitle: "", // To Remove the label from header tab
      }}
      />
      <Tab.Screen 
      name="Logout" 
      component={Logout} 
      options={{
        headerTitle: "", // To Remove the label from header tab
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#2E0052", // Purple color for the header
    height: 60, // Height of the header
  },
  tabBarStyle: {
    backgroundColor: "#2E0052", // Purple color for the tab bar (footer)
    height: 60, // Height of the tab bar
  },
  tabBarLabelStyle: {
    fontSize: 14, // Font size of the tab labels
  },
  headerRightContainer: {
    flexDirection: "row", // Place search bar and button in a row
    alignItems: "center", // Align items vertically in the center
    marginRight: 10, // Add space on the right for padding
  },
  searchBar: {
    backgroundColor: "white", // White background for the search bar
    borderRadius: 5, // Rounded corners for search bar
    paddingHorizontal: 10, // Inner padding for text input
    height: 35, // Height of the search bar
    color: "black", // Text color
    marginRight: 10, // Space between the search bar and the button
    // width: "100%",
  },
  button: {
    backgroundColor: "#6200EE", // Custom background color for the button
    paddingVertical: 8, // Vertical padding inside the button
    paddingHorizontal: 15, // Horizontal padding inside the button
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: "white", // Text color inside the button
    fontSize: 16, // Font size of the button text
    fontWeight: "bold", // Bold text style
  },
});

export default Dashboard;

// NOTE-
// Yes, headerStyle, tabBarStyle, and similar properties are predefined options
// in React Navigation that allow you to apply custom styles to the header and
// footer (tab bar) components. They are not part of React Native itself but are
// provided by the React Navigation library to customize the appearance of navigators
// like stack, tab, and drawer navigators.

// Common Predefined Styling Options in React Navigation
// Header Styles (used in Stack and Tab navigators):

// headerStyle: Defines the background and layout of the header (e.g., background color, height).
// headerTintColor: Specifies the color of text, icons, and back button in the header.
// headerTitleStyle: Controls the font style (size, weight, color) for the title in the header.
// headerShown: A boolean to show or hide the header.
// headerTitleAlign: Controls the alignment of the header title (can be "center" or "left").
