import { View, Text } from "react-native";
import React from "react";
import { myColors } from "../Utils/MyColor";

const ProductsTile = ({title}) => {
  return (
    <View
      style={{
        
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "Space-between",
        alignItems: "center",
        paddingHorizontal: 10
      }}
    >
        <Text style={{ fontSize:20,color: "gray", fontWeight:"700"}} >{title} </Text>
        {/* <Text style={{ fontSize:16,color:myColors.primary,marginLeft: 190}}> See All</Text> */}
    </View>
  );
};

export default ProductsTile;
