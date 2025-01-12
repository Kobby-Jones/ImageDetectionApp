import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  
} from "react-native";
import { useRouter } from "expo-router";



const router = useRouter()

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to Calorie Tracker",
    description: "Track your food calories easily with our advanced AI technology!",
    image: require("../assets/images/slide1.jpg"),
  },
  {
    id: "2",
    title: "Capture and Detect",
    description: "Simply capture your food to get instant calorie analysis.",
    image: require("../assets/images/slide2.jpg"),
  },
  {
    id: "3",
    title: "Track Your History",
    description: "View and manage your past food detections with ease.",
    image: require("../assets/images/slide3.jpg"),
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finishOnboarding();
    }
  };

  const handleSkip = () => {
    finishOnboarding();
  };

  const finishOnboarding = () => {
   router.push("./home");
  };

  return (
    <View style={styles.container}>
      <Image source={slides[currentIndex].image} style={styles.image} />
      <Text style={styles.title}>{slides[currentIndex].title}</Text>
      <Text style={styles.description}>{slides[currentIndex].description}</Text>

      {/* Dots for Progress */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipButton}>Skip</Text>
          
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            {currentIndex === slides.length - 1 ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF6A88",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  skipButton: {
    fontSize: 16,
    color: "#999",
  },
  nextButton: {
    backgroundColor: "#FF6A88",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
