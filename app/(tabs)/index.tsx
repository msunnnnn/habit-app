import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { Redirect, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const index = () => {
  const [option, setOption] = useState("Today");
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="logo-foursquare" size={24} color="black" />
        <AntDesign
          onPress={() => router.push("/create/")}
          name="plus"
          size={24}
          color="black"
        />
      </View>
      <Text style={{ marginTop: 5, fontSize: 23, fontWeight: 500 }}>
        Habits
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 8,
        }}
      >
        <Pressable
          onPress={() => setOption("Today")}
          style={{
            backgroundColor: option == "Today" ? "#E0E0E0" : "transparent",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 25,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
            Today
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setOption("Weekly")}
          style={{
            backgroundColor: option == "Weekly" ? "#E0E0E0" : "transparent",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 25,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
            Weekly
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setOption("Overall")}
          style={{
            backgroundColor: option == "Overall" ? "#E0E0E0" : "transparent",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 25,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
            Overall
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
