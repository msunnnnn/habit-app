import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const create = () => {
  const colors = [
    "#abc4ff",
    "#ffa69e",
    "#fce1e4",
    "#b3dee2",
    "#ffdab9",
    "#9cf6f6",
    "#e8dff5",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <View style={{ padding: 10 }}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Create<Text style={{ fontSize: 20, fontWeight: 500 }}>Habit</Text>
      </Text>
      <TextInput
        style={{
          width: "95%",
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "#E1EBEE",
        }}
        placeholder="Title"
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Color</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            margin: 10,
          }}
        >
          {colors?.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}>
              <FontAwesome name="square" size={30} color={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>Repeat</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Daily</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Weekly</Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>On These Days</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 10,
          marginTop: 10,
        }}
      >
        {days?.map((item, index) => (
          <Pressable
            key={index}
            style={{
              width: 35,
              height: 40,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item}</Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Reminder</Text>
        <Text style={{ fontSize: 18, fontWeight: 500, color: "#2774AE" }}>
          Yes
        </Text>
      </View>
    </View>
  );
};

export default create;

const styles = StyleSheet.create({});
