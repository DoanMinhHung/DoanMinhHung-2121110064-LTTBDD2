import { View, Text, Image, SafeAreaView} from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SliderBox } from "react-native-image-slider-box";
const HomeBanner = () => {
  const images = [
    "https://laptopaz.vn/media/banner/02_Janed7b3157ef035162bae224c5c0584749.jpg",
    "https://laptopaz.vn/media/banner/11_Aug29a74558ff9902e013ca718f69d10683.jpg",
    "https://laptopaz.vn/media/banner/23_Aug1c2ec0138f3726988d730fe8c8895087.jpg",
    "https://laptopaz.vn/media/banner/13_Decf94af3722b7ffd3e072b782831b06337.jpg",
  ];
  return (
    <SafeAreaView
      style={{ 
        paddingTop: Platform.OS === "android" ? -3 : 0,
        flex: 1,
        backgroundColor: "while",
       }}
    >
          <SliderBox
          images={images}
          autoplay
          circleLoop
          dotColor="#13274F"
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{ width: "100%", resizeMode: 'cover' }}
          sliderBoxHeight={200}
          resizeMode={'cover'}
          autoplayInterval={5000}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
        />
    </SafeAreaView>
  );
};

export default HomeBanner;

