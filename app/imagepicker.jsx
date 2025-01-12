import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { HfInference } from "@huggingface/inference";


export default function ImagePickerPage() {

    const hf = new HfInference("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");
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  // Function to request permissions and pick an image
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "Please grant permission to access the gallery.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);

      try{
        const fileData = {
            uri: result.assets[0].uri,
            name: "image.jpg",
            type: "image/jpeg",
        }
        const response = await hf.imageClassification({
            model: "google/vit-base-patch16-224",
            data: fileData
          });
          setPrediction(response[0]?.label || "No prediction");
          console.log(prediction)
    } catch (error) {
        console.error("Error during prediction:", error);
        Alert.alert("Error", "An error occurred while making the prediction.");
      }
    }
  };

  // Function to request permissions and launch the camera
  const launchCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "Please grant permission to use the camera.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);

        try{
            const fileData = {
                uri: result.assets[0].uri,
                name: "image.jpg",
                type: "image/jpeg",
            }
            const response = await hf.imageClassification({
                model: "google/vit-base-patch16-224",
                data: fileData
              });
              setPrediction(response[0]?.label || "No prediction");
              console.log(prediction)
        } catch (error) {
            console.error("Error during prediction:", error);
            Alert.alert("Error", "An error occurred while making the prediction.");
          }
      

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Image</Text>

      {/* Show selected image */}
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No image selected</Text>
        </View>
      )}
      <Text style={styles.title}>{prediction}</Text>

      {/* Buttons for Image Picker and Camera */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={launchCamera}>
          <Text style={styles.buttonText}>Launch Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholder: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  placeholderText: {
    color: "#aaa",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#68C260",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
