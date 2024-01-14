import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTile from "../Components/ProductsTile";
import ProductsCarousel from "../Components/ProductsCarousel";
import { Other, fruits, vegetables } from "../Utils/Date";
 

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#ffffff"}}>
    {/* <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}> */}
    <SafeAreaView>
      <HomeSearch/>
      <HomeIcon />
      <HomeBanner/>
      <ProductsTile title="LAPTOP GAMING"/>
      <ProductsCarousel data={fruits}/>
      <ProductsTile title="LAPTOP LIKE NEW"/>
      <ProductsCarousel data={vegetables}/>
      <ProductsTile title="LAPTOP ĐỒ HỌA"/>
      <ProductsCarousel data={Other}/>
    </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
