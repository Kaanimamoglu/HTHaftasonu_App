import { Image, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { style } from "../styles/style";

function FooterTab({navigation}) {
  return (
        <View style={{flexDirection: "row" ,backgroundColor:"white", height: 60, justifyContent:"space-evenly"}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={style.footerButton}>
            <Image source={require("../asset/home.png")} resizeMode={"cover"} style={{width:20, height: 20}}></Image>
            <Text style={{fontSize: 10}}>Ana Sayfa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.footerButton}>
            <Image source={require("../asset/font-size.png")} resizeMode={"cover"} style={{width:20, height: 20}}></Image>
            <Text style={{fontSize: 10}}>Yazı Boyutu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.footerButton}>
            <Image source={require("../asset/speaker.png")} resizeMode={"cover"} style={{width:20, height: 20}}></Image>
            <Text style={{fontSize: 10}}>Sesli Dinle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.footerButton}>
            <Image source={require("../asset/upload.png")} resizeMode={"cover"} style={{width:20, height: 20}}></Image>
            <Text style={{fontSize: 10}}>Paylaş</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={style.footerButton}>
            <Image source={require("../asset/save-instagram.png")} resizeMode={"cover"} style={{width:20, height: 20}}></Image>
            <Text style={{fontSize: 10}}>Kaydet</Text>
          </TouchableOpacity>
        </View>
  );
}


export default FooterTab;
