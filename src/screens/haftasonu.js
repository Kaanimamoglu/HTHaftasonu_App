import { Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity,  } from "react-native";
import * as React from "react";
import Haftasonulist from "../component/htlist";
import HeaderTab from "../component/headerTab";



function HaftasonuScreen({navigation}) {
  return (

    <SafeAreaView style={{backgroundColor:"#FFF8EA" ,flex: 1}}>
      <ImageBackground source={require("../asset/background.png")} resizeMode="contain" style={{flex:1,}}>
        <HeaderTab navigation={navigation}></HeaderTab>
        <View style={{flex:1, justifyContent:"center"}}>
          <Haftasonulist navigation={navigation}></Haftasonulist>
        </View>
          <Text style={{color: "#333333", fontSize: 10, textAlign:"center"}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
          </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}


export default HaftasonuScreen;
