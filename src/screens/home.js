import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View, Dimensions } from "react-native";
import * as React from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function HomeScreen({navigation}) {
  return (

    <SafeAreaView style={{backgroundColor:"#FFF8EA" ,flex: 1}}>
      <ImageBackground source={require("../asset/background.png")} resizeMode="contain" style={{flex:1}}>

        <View style={{justifyContent:'space-between', flexDirection:'row', height: 60}}>
          <View style={{borderColor:'white', borderWidth:2, borderBottomEndRadius:95, borderBottomStartRadius: 70,
            height: "100%", width:"30%", backgroundColor:'white', justifyContent:'center', alignItems: 'center'}}>
              <Image source={require("../asset/soltab.png")} resizeMode={"contain"} style={{ height: "70%"}}></Image>
          </View>
          <View style={{padding: "5%"}}>
            <Image source={require("../asset/tab.png")}></Image>
          </View>
        </View>

        <View style={{flex:1, justifyContent:"center"}}>
          <Image source={require("../asset/haftasonurenkli.png")} style={{width: windowWidth/1.5, height:windowHeight/6.7, alignSelf:"center", marginBottom: 20}}></Image>

          <View style={{flexDirection:"row",}}>
            <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")}
                              style={{width: windowWidth/3, height:windowHeight/18, borderRadius: 25, borderWidth: 2,
                                borderColor: "#E9D29E", justifyContent:"center",marginLeft: windowWidth/6,backgroundColor: '#FFF8EA',
                              marginRight:12}}>
              <Text style={{fontSize:21, textAlign:"center", fontWeight:"bold"}}>görüntüle</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")} style={{ width:windowWidth/8, height: windowHeight/18,
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
