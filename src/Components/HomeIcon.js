import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  const list = [
    {
      id: "0",
      image: "https://static.vecteezy.com/system/resources/previews/000/601/304/original/vector-laptop-free-logo-template.jpg",
      name: "LAPTOP GAMING",
    },
    {
      id: "1",
      image:
        "https://th.bing.com/th/id/OIP.8falnNZPCJBMkWnQ6281twHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
      name: "LATOP ĐỒ HỌA",
    },
    {
      id: "3",
      image:
        "https://th.bing.com/th/id/OIP.gSBl3zM54FZDwv9IoYekvAHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3",
      name: "LAPTOP LIKE NEW",
    },
    {
      id: "4",
      image:
        "https://th.bing.com/th/id/R.28a8adb3b365fd4a575a6abcf192d0ce?rik=gvM%2bk%2fBZQiMUhg&pid=ImgRaw&r=0",
      name: "KHUYỄN MÃI",
    },
    {
      id: "5",
      image:
        "https://th.bing.com/th/id/OIP.ZzejJNkjLrWRtb4FlLl1mgHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "TRẢ GÓP",
    },
  ];
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? -3 : 0,
        flex: 1,
        backgroundColor: "while",
      }}
    >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "500",
                    marginTop: 5,
                  }}
                >
                  {item?.name}
                </Text>
              </Pressable>
            ))}
           </ScrollView>
    </SafeAreaView>
  );
};

export default HomeIcon;
