import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColor";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../Firebaseconfig";

const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isVisbile, setisVisbile] = useState(true);
  const { email, password } = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((val) => {
        nav.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{
            height: 100,
            width: 120,
            alignSelf: "center",
            top: 10,
          }}
          source={require("../assets/OIP.jpg")}
        />

        <View style={{ paddingHorizontal: 20, marginTop: 0 }}>
          <Text
            style={{
              // color: myColors.primary,
              color: "#00FA9A",
              fontSize: 35,
              fontWeight: "500",
              marginLeft: 20,
              left: 110,
              top:10,
            }}
          >
            SIGN IN
          </Text>

          {/* <Text
            style={{
              fontSize: 15,
              fontWeight: "300",
              color: "grey",
              marginTop: 10,
              marginBot: 20,
              marginLeft: 20,
            }}
          >
            Enter your emial and password
          </Text> */}
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Email{"\n"}
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setloginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 0.3,
              marginTop: 10,
              fontSize: 16,
              marginLeft: 20,
              borderWidth: 1,  // Độ rộng của đường viền (border)
          borderColor: "black",  // Màu của đường viền (border)
          borderRadius: 5,  // Độ cong của góc (border radius)
          padding: 10,  // Khoảng cách giữa nội dung và đường viền
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Password
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 0.3,
              marginTop: 20,
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderWidth: 1,  // Độ rộng của đường viền (border)
          borderColor: "black",  // Màu của đường viền (border)
          borderRadius: 5,  // Độ cong của góc (border radius)
          padding: 10,  // Khoảng cách giữa nội dung và đường viền
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setloginCredentials({ ...loginCredentials, password: val });
              }}
              secureTextEntry={isVisbile}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,

                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setisVisbile(!isVisbile);
              }}
              name={isVisbile == true ? "eye-off-sharp" : "eye-sharp"}
              size={22}
              color="gray"
            />
          </View>

          <Text
            numberOfLines={2}
            style={{
              marginLeft: 20,

              fontSize: 13,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              width: "95%",
              opacity: 0.5,
              textAlign: "right",
            }}
          >
            Forgot Password ?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              // backgroundColor: myColors.primary,
              backgroundColor: "#00FA9A",
              marginTop: 20,
              height: 60,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 60,
              left: 20,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: "500",

              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flesDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                color: "gray",
                fontWeight: "400",
              }}
            >
              Don't have an ac accountn ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#00FA9A",
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            {/* <View>
      <Text style={{ 
        fontSize: 20,
        top: 14,
      }}>
        Sign In With
      </Text>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: 'black', // Màu của dòng gạch
        marginTop: 5, // Khoảng cách giữa văn bản và dòng gạch
      }} />
    </View> */}
    <View>
    <View style={{
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 10,
      }} />
      <View style={{ 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}>
        <Text style={{ 
          fontSize: 20,
          color: '#00FA9A',
        }}>
          Sign In With: 
        </Text>
        <Image
          source={{uri:'https://th.bing.com/th?q=FB+Logo+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247'}} // Đường dẫn đến hình ảnh của icon Facebook
          style={{
            width: 40, // Độ rộng của icon
            height: 40, // Độ cao của icon
            marginLeft: 5, // Khoảng cách giữa văn bản và icon

          }}
        />
        <Image
          source={{uri:'https://th.bing.com/th/id/OIP.qcjZcl8YQjQMaC2JBSTbjgHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}} // Đường dẫn đến hình ảnh của icon Telegram
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
          }}
        />
        <Image
          source={{uri:'https://th.bing.com/th?id=ODLS.b557d816-349a-493c-9184-f5f2b8977e68&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2'}} // Đường dẫn đến hình ảnh của icon Instagram
          style={{
            width: 40,
            height: 40,
            marginLeft: 5,
          }}
        />
      </View>
      </View>
          </View>
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
