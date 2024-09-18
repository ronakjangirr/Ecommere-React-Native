import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

function CustomHeader() {
  return (
    <View style={styles.stickyHeader}>
      <Text style={styles.headerText}>Sticky Header</Text>
    </View>
  );
}

function CustomFooter() {
  return (
    <View style={styles.stickyFooter}>
      <Text style={styles.footerText}>Musicart | All rights reserved</Text>
    </View>
  );
}

export default function Layout() {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.stackContainer}>
        {/* <Stack>
          <Stack.Screen
            name="login"
            options={{ path: "login", headerShown: false }}
          />
          <Stack.Screen
            name="register"
            options={{ path: "/", headerShown: false }}
          />
        </Stack> */}
        <Stack />
      </View>
      <CustomFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  // outerContainer: {
  //   flex: 1, // Ensure the outer container takes full height
  // },
  container: {
    flex: 1, // Ensures the container takes the full screen height
  },
  stackContainer: {
    flex: 1, // Ensures that the stack takes the remaining available space
    marginTop: 40, // Adjust according to the header height
    marginBottom: 40, // Adjust according to the footer height
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "100",
  },

  stickyHeader: {
    backgroundColor: "#2E0052",
    width: "100%", // Full width of the screen
    height: 40, // Height of 40px
    position: "absolute", // Stick to the top
    top: 0,
    zIndex: 1000, // Make sure it's above other content
    elevation: 4, // Shadow for Android
  },
  stickyFooter: {
    backgroundColor: "#2E0052",
    width: "100%", // Full width of the screen
    height: 40, // Height of 40px
    position: "absolute", // Stick to the top
    bottom: 0,
    zIndex: 1000, // Make sure it's above other content
    elevation: 4, // Shadow for Android
    alignItems: "center", // Aligns the "Welcome" text to the start (left side)
    justifyContent: "center",
  },
});
