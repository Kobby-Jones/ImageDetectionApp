import { router } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import * as tf from "@tensorflow/tfjs";

Dimensions.get("window");

export default function Home() {

useEffect(() => {
  const initializeTfAsync = async () => {
    await tf.ready();
    console.log("TensorFlow is ready!");
  };
  initializeTfAsync();
    
  }, []);


  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Calorie Tracker</Text>
        <Text style={styles.subtitle}>
          Effortlessly track your food calories and maintain a healthy lifestyle!
        </Text>
      </View>

      {/* Feature Icons */}
      <View style={styles.featuresContainer}>
        <View style={styles.feature}>
          <Image
            source={require("../assets/images/camera.jpg")} // Replace with your icon
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Snap Food</Text>
        </View>
        <View style={styles.feature}>
          <Image
            source={require("../assets/images/calories.jpg")} // Replace with your icon
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Analyze Calories</Text>
        </View>
        <View style={styles.feature}>
          <Image
            source={require("../assets/images/history.jpg")} // Replace with your icon
            style={styles.featureIcon}
          />
          <Text style={styles.featureText}>Track History</Text>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.startButton} onPress={() => router.push('./try')}>
        <Text style={styles.startButtonText}>Start Detecting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 30,
  },
  feature: {
    alignItems: "center",
    flex: 1,
  },
  featureIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  featureText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#FF6A88",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  startButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
