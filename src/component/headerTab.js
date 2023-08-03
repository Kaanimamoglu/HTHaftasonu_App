import { Image, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { style } from "../styles/style";

function HeaderTab({navigation}) {
  return (
    <View style={{justifyContent:'space-between', flexDirection:'row', height: 60}}>
      <TouchableOpacity onPress={()=> navigation.goBack()} style={style.headerButton}>
        <Image source={require("../asset/soltab.png")} resizeMode={"contain"} style={{width: "80%", height: "70%"}}></Image>
      </TouchableOpacity>
      <View style={{padding: "5%"}}>
        <Image source={require("../asset/tab.png")}></Image>
      </View>
    </View>
  );
}


export default HeaderTab;
