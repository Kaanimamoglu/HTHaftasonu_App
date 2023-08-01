import { Text, View, ImageBackground, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";
import data from "../data/databases.json";
import { style } from "../styles/style";

import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";
import { imageMapping } from "../data/constant/utils";
import { useEffect, useState } from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Haftasonulist({navigation}) {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data.body.items);
  }, []);

  const Item = ({item}) => {
    let header = null;
    let cover = null;
    let firstadImage = null;
    let secondadImage = null;

    const formattedId = item.id < 10 ? `0${item.id}` : `${item.id}`;

    if (imageMapping.hasOwnProperty(item.headerImage)) {
      header = imageMapping[item.headerImage]
    }
    if (imageMapping.hasOwnProperty(item.coverImage)) {
      cover = imageMapping[item.coverImage]
    }
    if (imageMapping.hasOwnProperty(item.adImages.firstAdImage)) {
      firstadImage = imageMapping[item.adImages.firstAdImage]
    }
    if (imageMapping.hasOwnProperty(item.adImages.secondAdImage)) {
      secondadImage = imageMapping[item.adImages.secondAdImage]
    }

    return(
      <View style={{flex:1,height:windowHeight/1.35}}>
        <View style={style.list}>
          <View style={style.stick}/>
          {
            item.type === "news" && cover === null &&
            <View style={{flex:1, justifyContent:"center"}}>
              {
                header != null && <FastImage source={header} style={style.headImage} resizeMode={"cover"}/>
              }
              <Text style={style.title}>{item.lineOptions.title}</Text>
              <View style = {[style.seperator, {marginHorizontal: windowWidth/3.4}]}/>
              <Text style={style.titleDescription}>{item.lineOptions.desc}</Text>
              <View style = {[style.seperator, {marginHorizontal: windowWidth/4.3}]}/>

              <Text style={style.mainDescription}>{item.desc}</Text>
              <Text style={style.date}>{item.dateTime} - {item.time}</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate("Detail", item.id);
              }} style={style.showButton}>
                <Text style={style.buttonText}>{item.buttonTitle}</Text>
              </TouchableOpacity>
            </View>
          }
          {
            item.type === "news" && cover != null &&
            <View style={{flex:1, justifyContent:"center"}}>
              <FastImage source={cover} style={{flex:1}}>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={{width: "100%", height:"100%", top: 0, position: "absolute"}}/>
                {
                  item.videoButton === true &&
                  <View style={style.videoView}>
                    <TouchableOpacity onPress={() => {}} style={style.video}>
                      <Image source={require("../asset/video.png")} resizeMode={"center"}></Image>
                    </TouchableOpacity>
                  </View>
                }
                <View style={{flex:1, justifyContent:"flex-end", marginBottom: "10%"}}>
                  <Text style={[style.title, {color: "white"}]}>{item.lineOptions.title}</Text>
                  <View style = {[style.seperator, {marginHorizontal: windowWidth/3.4, borderColor: "white"}]}/>
                  <Text style={[style.titleDescription, {color: "white"}]}>{item.lineOptions.desc}</Text>

                  <TouchableOpacity onPress={() => {
                    navigation.navigate("Detail", item.id);
                  }} style={style.shadowShowButton}>
                    <Text style={[style.buttonText, {color: "white"}]}>{item.buttonTitle}</Text>
                  </TouchableOpacity>
                </View>
              </FastImage>
            </View>
          }
          {
            item.type === "ads" && cover != null &&
            <ImageBackground source={cover} style={{flex:1, marginHorizontal:10}}/>
          }
          {
            item.type === "ads" && cover === null &&
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Image source={firstadImage} resizeMode={"contain"} style={style.advert}></Image>
              <Text style={{fontSize: 16, marginVertical: 10}}>{item.lineOptions.title}</Text>
              <Image source={secondadImage} resizeMode={"contain"} style={style.advert}></Image>
            </View>
          }
        </View>
        <View style={style.listId}>
          <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
        </View>
      </View>
    )
  };
  return (
    <View style={{flex: 1}}>

      <View style={{flex:1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={jsonData}
          renderItem={Item}
          keyExtractor={item => item.id}>
        </FlatList>
      </View>

    </View>
  );

}
export default Haftasonulist;
