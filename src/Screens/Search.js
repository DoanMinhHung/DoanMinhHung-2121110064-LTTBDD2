// import React, { useEffect, useState } from "react";
// import { Text, View, Image, SafeAreaView } from "react-native";
// import { fruits } from "../Utils/Date";
// import { AntDesign } from "@expo/vector-icons";
// import { responsiveHeight } from "react-native-responsive-dimensions";
// import HomeSearch from "../Components/HomeSearch";
// const Search = ({ route }) => {
//   const { q } = route.params;
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const results = fruits.filter((item) =>
//       item.name.toLowerCase().includes(q.toLowerCase())
//     );
//     setData(results);
//     console.log("results", results);
//   }, [q]);
//   return (
//     <View style={{ flex: 1 }}> 
//         <HomeSearch />
//     <View style={{ marginTop: 10, padding: 5 }}>
//       {data.map((item) => (
//         <View
//           style={{
//             height: responsiveHeight(29),
//             marginTop: 8,
//             borderWidth: 1,
//             borderColor: "#E3E3E3",
//             width: responsiveHeight(21.5),
//             marginRight: 16,
//             borderRadius: 10,
//           }}
//         >
//           <Image
//             style={{ height: 130, resizeMode: "contain", borderRadius: 20 }}
//             source={{ uri: item.img }}
//           />
//           <View style={{ paddingHorizontal: 10 }}>
//             <Text
//               style={{ fontSize: 17, fontWeight: "600", textAlign: "center" }}
//             >
//               {item.name}
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 backgroundColor: "#DC143C",
//                 borderRadius: 10,
//                 height: 40,
//                 marginTop: 18,
//               }}
//             >
//               <Text
//                 style={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: 20,
//                   left: 10,
//                 }}
//               >
//                 Giá:
//                 {item.price} USD
//               </Text>
//               <AntDesign
//                 name="hearto"
//                 size={22}
//                 color="#00AA00"
//                 onPress={() => {
//                   dispatch(addToCart(item));
//                 }}
//                 style={{ top: -190, right: 135 }}
//               />
//             </View>
//           </View>
//         </View>
//       ))}
//     </View>
//     </View>
//   );
// };

// export default Search;
import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native"; // Thay đổi SafeAreaView thành ScrollView
import { fruits } from "../Utils/Date";
import { AntDesign } from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";
import HomeSearch from "../Components/HomeSearch";

const Search = ({ route }) => {
  const { q } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = fruits.filter((item) =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );
    setData(results);
    console.log("results", results);
  }, [q]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
      <HomeSearch />
      <View
        style={{
          flexDirection: "row", // Sắp xếp theo hàng ngang
          flexWrap: "wrap", // Cho phép ngắn dòng khi không đủ chỗ
          marginTop: 10,
          padding: 5,
          justifyContent: "space-between",
        }}
      >
        {data.map((item) => (
          <View
            key={item.id} // Thêm key để tránh cảnh báo
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
              <Text
                style={{ fontSize: 17, fontWeight: "600", textAlign: "center" }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#DC143C",
                  borderRadius: 10,
                  height: 40,
                  marginTop: 18,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    left: 10,
                  }}
                >
                  Giá: {item.price} USD
                </Text>
                <AntDesign
                  name="hearto"
                  size={22}
                  color="#00AA00"
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  style={{ top: -190, right: 135 }}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Search;

