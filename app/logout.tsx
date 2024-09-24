import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

function Logout() {
  const route = useRouter();

  useEffect(() => {
    // Remove specific key from async storage when this component mounts
    const removeUserData = async () => {
      try {
        await AsyncStorage.removeItem("userRegistrationData");
        console.log("User registration data removed from AsyncStorage!");
        route.push("/"); // Redirect to home or login route
      } catch (error) {
        console.error("Error removing userRegistrationData:", error);
      }
    };

    removeUserData();
  }, [route]);

  return (
    <View>
        <Text>Logout</Text>
    </View>
  )
}

export default Logout