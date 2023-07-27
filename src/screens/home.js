import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import * as React from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function HomeScreen({navigation}) {
  return (

    <SafeAreaView style={{backgroundColor:"#FFF8EA" ,flex: 1}}>
      <ImageBackground source={require("../asset/background.png")} resizeMode="contain" style={{flex:1}}>

        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <View style={{borderColor:'white', borderWidth:2, borderBottomEndRadius:95, borderBottomStartRadius: 50,
            height: 88, width:137, backgroundColor:'white', justifyContent:'center', alignItems: 'center'}}>
              <Image source={require("../asset/soltab.png")} style={{width: 63, height: 35}}></Image>
          </View>
          <View style={{padding: "5%"}}>
            <Image source={require("../asset/tab.png")}></Image>
          </View>
        </View>

        <View style={{flex:1, justifyContent:"center"}}>
          <Image source={require("../asset/haftasonurenkli.png")} style={{width: 300, height:147, alignSelf:"center", marginBottom: 20}}></Image>
          <View style={{flexDirection:"row"}}>

            <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")}
                              style={{width: "35%", height:"35%", borderRadius: 25, borderWidth: 2,
                                borderColor: "#E9D29E", justifyContent:"center", marginLeft:(windowWidth -300) /2, backgroundColor: '#FFF8EA',
                              marginRight:12}}>
              <Text style={{fontSize:21, textAlign:"center", fontWeight:"bold"}}>görüntüle</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")} style={{ width:"12%", height: "35%",
              borderRadius:25,borderWidth:2,borderColor: "#E9D29E", backgroundColor: "#FFF8EA", justifyContent:"center", alignItems:"center"}}>
              <Image source={require("../asset/siyahok.png")} resizeMode={"center"}></Image>
            </TouchableOpacity>

          </View>

        </View>


          <Text style={{color: "#333333", fontSize: 10, textAlign:"center"}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
          </Text>


      </ImageBackground>
    </SafeAreaView>
  );
}


export default HomeScreen;
