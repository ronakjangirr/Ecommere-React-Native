import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

function Login() {
  const [login, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // const navigation = useNavigation() // Navigation hook
  const router = useRouter(); // Use Expo Router's router

  const validate = () => {
    const { email, password } = login;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field: string, value: string) => {
    setLoginData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    })); // Reset error when the user starts typing
  };

  const handleSubmit = async () => {
    debugger;
    if (validate()) {
      try {
        const storedUser = await AsyncStorage.getItem("userRegistrationData");
        if (storedUser) {
          debugger;
          const parsedUser = JSON.parse(storedUser);
          const { email, password } = parsedUser;

          // Check if the entered email and password match the stored data
          if (login.email === email && login.password === password) {
            // Navigate to the Dashboard
            // navigation.navigate('dashboard') // Assuming 'Dashboard' is your route name
            router.push("/home"); // Use the correct route path

          } else {
            // Show error if credentials do not match
            setErrors({
              email: "Incorrect email or password",
              password: "Incorrect email or password",
            });
          }
        } else {
          Alert.alert(
            "Error",
            "No registered user found. Please register first."
          );
        }
      } catch (e) {
        console.error("Failed to retrieve the data from storage", e);
      }
    }
  };

  const handleNavigate = () => {
    router.push("/");
  };

  const handleDashboard = () => {
    router.push("/home");

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeFont}>Welcome</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.fontStyle}>
          <Text>
            <Text style={styles.header}>Create account. </Text>
            Don’t have an account?
          </Text>
        </View>
        <Text style={styles.inputName}>Enter your email or mobile number</Text>
        <TextInput
          value={login.email}
          onChangeText={(text) => handleChange("email", text)}
          inputMode="email"
          style={[styles.input, errors.email ? styles.errorInput : null]}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
        <Text style={styles.inputName}>Password</Text>
        <TextInput
          value={login.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          style={[styles.input, errors.password ? styles.errorInput : null]}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        {/* <Text style={styles.contentText}>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</Text> */}
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <Text style={styles.contentTextTwo}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </Text>
      </View>

      <Pressable onPress={handleNavigate} style={styles.buttonCreate}>
        <Text style={styles.buttonTextCreate}>
          Create your Musicart account
        </Text>
      </Pressable>
      <Text onPress={handleDashboard}>To dashboard</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 60, // Add space for the sticky header
    paddingHorizontal: 10,
    flexGrow: 1, // Make the ScrollView content grow
  },
  welcomeContainer: {
    alignItems: "flex-start", // Aligns the "Welcome" text to the start (left side)
    marginBottom: 5, // Adds space between "Welcome" and the form
  },
  welcomeFont: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 20,
  },
  form: {
    borderColor: "#ddd", // Border color
    borderWidth: 2, // Border width
    padding: 20,
    borderRadius: 10,
    maxWidth: 500,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  fontStyle: {
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: "500",
  },
  input: {
    // backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 2, // Border width
  },
  inputName: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
  },
  contentText: {
    fontSize: 12,
    marginBottom: 20,
    fontWeight: "500",
  },
  contentTextTwo: {
    fontSize: 12,
    marginVertical: 20,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#2E0052",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonCreate: {
    marginTop: 20,
    backgroundColor: "White",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2, // You need to specify the border width
    borderColor: "grey",
    alignItems: "center",
    width: "80%",
    maxWidth: 450,
  },
  buttonTextCreate: {
    color: "Black",
    fontSize: 16,
  },
});
export default Login;
