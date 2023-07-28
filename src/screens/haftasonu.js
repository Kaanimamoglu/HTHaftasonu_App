import { Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, Dimensions } from "react-native";
import * as React from "react";
import Haftasonulist from "../list/haftasonulist";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HaftasonuScreen({navigation}) {
  return (

    <SafeAreaView style={{backgroundColor:"#FFF8EA" ,flex: 1}}>
      <ImageBackground source={require("../asset/background.png")} resizeMode="contain" style={{flex:1,}}>

        <View style={{justifyContent:'space-between', flexDirection:'row', height: 60}}>

          <TouchableOpacity onPress={()=> navigation.goBack()} style={{borderColor:'white', borderWidth:2, borderBottomEndRadius:95, borderBottomStartRadius: 70,
            height: "100%", width:"30%", backgroundColor:'white', justifyContent:'center', alignItems: 'center'}}>
            <Image source={require("../asset/soltab.png")} resizeMode={"contain"} style={{width: "80%", height: "70%"}}></Image>
          </TouchableOpacity>
          <View style={{padding: "5%"}}>
            <Image source={require("../asset/tab.png")}></Image>
          </View>
        </View>

        <View style={{flex:1, justifyContent:"center"}}>
          <Haftasonulist></Haftasonulist>
        </View>

          <Text style={{color: "#333333", fontSize: 10, textAlign:"center"}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
          </Text>

      </ImageBackground>

    </SafeAreaView>
  );
}


export default HaftasonuScreen;
