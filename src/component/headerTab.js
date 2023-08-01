import { Image, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

function HeaderTab({navigation}) {
  return (
    <View style={{justifyContent:'space-between', flexDirection:'row', height: 60}}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={{borderColor:'white', borderWidth:2, borderBottomEndRadius:95, borderBottomStartRadius: 70,
        height: "100%", width:"30%", backgroundColor:'white', justifyContent:'center', alignItems: 'center'}}>
        <Image source={require("../asset/soltab.png")} resizeMode={"contain"} style={{width: "80%", height: "70%"}}></Image>
      </TouchableOpacity>
      <View style={{padding: "5%"}}>
        <Image source={require("../asset/tab.png")}></Image>
      </View>
    </View>
  );
}


export default HeaderTab;
