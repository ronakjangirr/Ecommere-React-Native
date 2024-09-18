import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

function Register() {
  const [register, setRegisterData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const router = useRouter(); // Use Expo Router's router

  const validate = () => {
    const { name, email, number, password } = register;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\d{10}$/;
    let isValid = true;
    let newErrors = { name: "", email: "", number: "", password: "" };

    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }
    if (!number || !numberRegex.test(number)) {
      newErrors.number = "Valid 10-digit mobile number is required";
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
    setRegisterData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    })); // Reset error when the user starts typing
  };

  const handleSubmit = async () => {
    if (validate()) {
      debugger;
      try {
        debugger;
        await AsyncStorage.setItem(
          "userRegistrationData",
          JSON.stringify(register)
        );
        console.log({ register });
        setRegisterData({
          name: "",
          email: "",
          number: "",
          password: "",
        });
        router.push("/login");
      } catch (e) {
        console.error("Failed to save the data in storage", e);
      }
    }
  };

  const handleNavigate=()=>{
    router.push("/login")
  }
  
  return (     
     <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeFont}>Welcome</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.fontStyle}>
            <Text style={styles.headerFont}>
              Create account.{" "}
              <Text style={styles.normalText}>Don’t have an account?</Text>
            </Text>
          </View>

          <TextInput
            value={register.name}
            onChangeText={(text) => handleChange("name", text)}
            style={[styles.input, errors.name ? styles.errorInput : null]}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}

          <Text style={styles.inputName}>Email id</Text>
          <TextInput
            value={register.email}
            onChangeText={(text) => handleChange("email", text)}
            inputMode="email"
            style={[styles.input, errors.email ? styles.errorInput : null]}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <Text style={styles.inputName}>Mobile number</Text>
          <TextInput
            value={register.number}
            onChangeText={(text) => handleChange("number", text)}
            style={[styles.input, errors.number ? styles.errorInput : null]}
          />
          {errors.number ? (
            <Text style={styles.errorText}>{errors.number}</Text>
          ) : null}

          <Text style={styles.inputName}>Password</Text>
          <TextInput
            value={register.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
            style={[styles.input, errors.password ? styles.errorInput : null]}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <Text style={styles.contentText}>
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Musicart.
            Message and data rates may apply.
          </Text>
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
          <Text style={styles.contentTextTwo}>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </Text>
        </View>
        <Text style={styles.footerFont}>
          Already have an account?<Text style={styles.normalText} onPress={handleNavigate}>Sign In</Text>
        </Text>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: "flex-start", // Aligns the "Welcome" text to the start (left side)
    marginBottom: 5, // Adds space between "Welcome" and the form
  },
  normalText: {
    fontWeight: "100", // or '400' for regular weight
    fontSize: 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20, // Add space for the sticky header
    paddingHorizontal: 20,
    flexGrow: 1, // Make the ScrollView content grow
  },
  form: {
    borderColor: "#ddd", // Border color
    borderWidth: 2, // Border width
    padding: 20,
    borderRadius: 10,
    width: "100%", // Make the form take full width of the container (can adjust as needed)
    maxWidth: 500,
  },
  fontStyle: {
    marginTop: 10,
  },
  welcomeFont: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 20,
  },
  headerFont: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: "500",
  },
  footerFont: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: "500",
    marginBottom: 40,
  },
  input: {
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

  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
export default Register;
