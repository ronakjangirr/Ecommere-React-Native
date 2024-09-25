import { Text, View, StyleSheet, Image } from "react-native";
import { Stack, usePathname } from "expo-router";

function CustomHeader() {
  return (
    <View style={styles.stickyHeader}>
      <Image
          source={require('../assets/images/logo.png')} // Adjust the path to your logo
          style={styles.logo}
        />
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
  const pathName = usePathname();     // To get the current pathName
  const isHome = pathName === "/home"; // Check if the current path is /dashboard

  return (
    <View style={styles.container}>
      {pathName !== "/home" && <CustomHeader />}

      {/* <View style={styles.stackContainer}> */}
      {/* <View style={[styles.stackContainer, isDashboard && styles.fullscreenStackContainer]}> */}
      <View style={[styles.stackContainer, isHome && styles.fullscreenStackContainer]}>

        {/* <Stack/>  // Ex-1 Will show header name to all the route     */}  
        
        <Stack 
        screenOptions={{ headerShown: false }}   // Ex-2 Will not show header name to any route   
        />

        {/* <Stack
          screenOptions={({ route }) => ({
            headerShown: route.name !== "index",  // Hide header for Register, show for others
          })}
        />   */}
      </View>
      {pathName !== "/home" && <CustomFooter/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full screen height
  },
  stackContainer: {
    flex: 1, // Ensures that the stack takes the remaining available space
    marginTop: 40, // Adjust according to the header height
    marginBottom: 40, // Adjust according to the footer height
  },
  fullscreenStackContainer: {
    marginTop: 0,   // Remove the margin if on the /dashboard route
    marginBottom: 0,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 40, // Adjust logo size as needed
    height: 40,
    marginHorizontal: 40, // Space between the logo and the text
    marginVertical:50
  },
  footerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "100",
  },
  stickyHeader: {
    backgroundColor: "#2E0052",
    width: "100%", // Full width of the screen
    height: 100, // Height of 40px
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
