import { View, Text, FlatList, Image, TouchableOpacity,SafeAreaView } from "react-native";
import React from "react";
import { fruits } from "../Utils/Date";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
 import { addToCart } from "../../Redux/CartSlice";

const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10
      }}
    >
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            activeOpacity={0.5}
            style={{
              height: responsiveHeight(29),
              marginTop: 8,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              width: responsiveHeight(21.5),
              marginRight: 16,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 130, resizeMode: "contain", borderRadius: 20 }}
              source={{ uri: item.img }}
            />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "600", textAlign:"center" }}>
                {item.name}
              </Text>
              {/* <Text style={{ color: "gray" }}>quantity: {item.pieces}</Text> */}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#990000", fontWeight: "bold" }}>Giá: 
                  {item.price} USD
                </Text>
                <AntDesign
                  name="hearto"
                  size={22}
                  color="#00AA00"
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  style={{ left: 45}}
                />
                
                
                <Text style={{ top:25, right:70, color: "black", fontSize: 15, fontWeight: "600" }}>
                  Add to Cart
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

export default ProductsCarousel;
