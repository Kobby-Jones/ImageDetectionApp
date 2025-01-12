import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";



const router = useRouter();

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require("../assets/images/avatar.png")} // Replace with your avatar image
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.username}>Akshay Rajput</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="search" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <FontAwesome name="bell" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Title and Calories */}
      <Text style={styles.title}>Track your diet journey</Text>
      <Text style={styles.caloriesText}>Today Calorie: 1783</Text>

      {/* Graph Placeholder */}
      <View style={styles.graph}>
        <Text style={styles.graphText}>Graph Placeholder</Text>
      </View>

      {/* Date Selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateSelector}>
        {["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16", "Sat 17", "Sun 18"].map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dateItem, index === 3 && styles.activeDateItem]} // Highlight "Thu 15"
          >
            <Text style={[styles.dateText, index === 3 && styles.activeDateText]}>{date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Action Buttons */}
      <ScrollView style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}
        onPress={() => router.push("/imagepicker")}
        >
          <Image
            source={require("../assets/images/breakfast.jpg")} // Replace with your breakfast icon
            style={styles.actionIcon}
          />
          <View>
            <Text style={styles.actionTitle}>Add Breakfast</Text>
            <Text style={styles.actionSubtitle}>Recommended 450-650 cal</Text>
          </View>
          <FontAwesome name="plus-circle" size={24} color="#68C260" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Image
            source={require("../assets/images/lunch.jpg")} // Replace with your lunch icon
            style={styles.actionIcon}
          />
          <View>
            <Text style={styles.actionTitle}>Add Lunch</Text>
            <Text style={styles.actionSubtitle}>Recommended 450-650 cal</Text>
          </View>
          <FontAwesome name="plus-circle" size={24} color="#68C260" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <FontAwesome name="home" size={24} color="#68C260" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="plus-circle" size={36} color="#68C260" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bar-chart" size={24} color="#68C260" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: "#888",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  caloriesText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  graph: {
    backgroundColor: "#F8F8F8",
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  graphText: {
    fontSize: 14,
    color: "#aaa",
  },
  dateSelector: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dateItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    marginRight: 10,
  },
  activeDateItem: {
    backgroundColor: "#FF6A88",
  },
  dateText: {
    fontSize: 14,
    color: "#666",
  },
  activeDateText: {
    color: "#fff",
  },
  actions: {
    flex: 1,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  actionIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actionSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
