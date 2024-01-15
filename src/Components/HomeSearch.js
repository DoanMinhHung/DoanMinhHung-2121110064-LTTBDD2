import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeSearch = () => {
  const navigation = useNavigation();
  const [key, setKey] = useState("");
  const handleBlurSearch = () => {
    navigation.navigate("Search", { q: key });
  };
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? -3 : 0,
        flex: 1,
        backgroundColor: "while",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 13,
              height: 38,
              flex: 1,
            }}
          >
            <FontAwesome
              style={{ paddingLeft: 10 }}
              name="search"
              size={22}
              color="black"
            />
            <TextInput
              onBlur={handleBlurSearch}
              onChangeText={(text) => setKey(text)}
              value={key}
              style={{ flex: 1 }}
              placeholder="Search LapTop"
            />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#AFEEEE",
          }}
        >
          <Ionicons name="location-outline" size={24} color="black" />
          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: "500" }}>
              Hoài Tân - Hoài Nhơn - Bình Định
            </Text>
          </Pressable>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSearch;
