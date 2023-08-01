import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground, TextInput,
} from "react-native";
import * as React from "react";

import FooterTab from "../component/footerTab";
import HeaderTab from "../component/headerTab";
import { useEffect, useState } from "react";
import details from "../data/details.json";
import { imageMapping } from "../data/constant/utils";
import { style } from "../styles/style";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function DetailsScreen(props) {
  const itemId  = props.route.params;
  const [jsonData, setJsonData] = useState(null);
  const [commentList, setCommentList] = useState(false);

  useEffect(() => {
    let selectedItem = details.body.items.find(item => item.itemId === itemId)
    setJsonData(selectedItem);
  }, [itemId]);
  const handleCommentClicker = () => {
    setCommentList(!commentList);
  }
  const dataArray = jsonData ? [jsonData] : [];

  const Item = ({item}) => {
    return(
      <View style={{ marginVertical: 10, flexDirection:"row" }}>
        {item.links.map((link, index) => (
          <Text key={index} style={{ textDecorationLine: "underline", marginRight:10 }}>{link}</Text>
        ))}
      </View>
    )
  };
  const ImageList = ({item}) => {
    let firstIg = null;
    let secondIg = null;
    let thirdIg = null;
    let fourthIg = null;

    if (imageMapping.hasOwnProperty(item.imageOptions.firstAdImage)) {
      firstIg = imageMapping[item.imageOptions.firstAdImage]
    }
    if (imageMapping.hasOwnProperty(item.imageOptions.secondAdImage)) {
      secondIg = imageMapping[item.imageOptions.secondAdImage]
    }
    if (imageMapping.hasOwnProperty(item.imageOptions.thirdAdImage)) {
      thirdIg = imageMapping[item.imageOptions.thirdAdImage]
    }
    if (imageMapping.hasOwnProperty(item.imageOptions.fourthAdImage)) {
      fourthIg = imageMapping[item.imageOptions.fourthAdImage]
    }

    return(
      <View>
        <View style={{flex: 1, marginVertical: 10, flexDirection: 'row' , height: windowHeight/4}}>
          <Image source={firstIg} resizeMode={"cover"} style={{width: windowWidth/1.2, height:windowHeight/4, marginRight:10}}/>
          <Image source={secondIg} resizeMode={"cover"} style={{width: windowWidth/1.2, height:windowHeight/4, marginRight:10}}/>
          <Image source={thirdIg} resizeMode={"cover"} style={{width: windowWidth/1.2, height:windowHeight/4, marginRight:10}}/>
          <Image source={fourthIg} resizeMode={"cover"} style={{width: windowWidth/1.2, height:windowHeight/4}}/>
        </View>
      </View>

    )
  };

  return (

    <SafeAreaView style={{backgroundColor:"white" ,flex: 1}}>
        <HeaderTab navigation={props.navigation}></HeaderTab>

        <ScrollView>
          {jsonData &&
            <View style={{flex:1, justifyContent:"center", marginHorizontal: windowWidth/15}}>
              <Text style={{fontSize: 25, fontWeight:"bold", marginTop: 20}}>{jsonData.title}</Text>
              <Text style={{fontSize: 18, fontWeight: 300, marginVertical: 10}}>{jsonData.desc}</Text>
              <Text style={{fontSize: 12, fontWeight: 200, marginVertical: 5}}>{jsonData.dateTime} -
                {jsonData.time} | Güncelleme: {jsonData.updatedTime} - {jsonData.updatedDateTime}</Text>
              <View style = {{borderWidth: 1, borderColor:'#DEDEDE', marginVertical:5, borderStyle:"dashed"}}/>
              <View style={{flexDirection:"row", marginVertical: 5}}>
                <Image source={require("../asset/dha.png")} resizeMode={"center"} style={{ width:windowWidth/8, height: windowHeight/18,
                  borderRadius:25,borderWidth:2,borderColor: "white", backgroundColor: "white",justifyContent:"center", alignItems:"center"}}/>
                <View style={{flexDirection:"column"}}>
                  <Text style={{marginTop:10, fontWeight: "bold", marginHorizontal:10}}>{jsonData.writerOptions.writerName}</Text>
                  <Text style={{marginHorizontal:10}}>{jsonData.writerOptions.writerNameDesp}</Text>
                </View>
              </View>
              <View style = {{borderWidth: 1, borderColor:'#DEDEDE', marginVertical:5, borderStyle:"dashed"}}/>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={dataArray}
                  renderItem={ImageList}
                  keyExtractor={item => item.id *10000}/>
              <Text style={{width: windowWidth/1.3, fontWeight: 300, marginVertical:10, fontSize:12}}>{jsonData.imageOptions.imageDetails}</Text>
              <View style = {{borderWidth: 1, borderColor:'#707070', marginVertical:5, borderStyle:"dashed"}}/>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={dataArray}
                  renderItem={Item}
                  keyExtractor={item => item.id} />
              <View style = {{borderWidth: 1, borderColor:'#707070', marginVertical:5, borderStyle:"dashed"}}/>

              <View style={{borderWidth:2, borderStyle:"dashed", justifyContent: "center", flex:1, padding:10, marginTop: 5, borderColor:"#707070" }}>
                <Text style={{marginHorizontal: windowWidth/20, marginTop:5}}>"Günün manşetlerini ve en çok okunan haberlerini her sabah e-postanızdan takip etmek için bültene üye olun"</Text>
                <View style={{backgroundColor:"#F1F1F1", margin: 10, height: windowHeight/20,flexDirection: "row", justifyContent:"space-between", marginHorizontal: windowWidth/20}}>
                  <TextInput style={{justifyContent:"center", marginLeft: 5, width: "70%"}} placeholder="E-posta adresinizi yazınız!" ></TextInput>
                  <TouchableOpacity style={{justifyContent:"center", alignItems: "center", backgroundColor: "white",margin:5}}>
                    <Text style={{padding: 5}}>KAYDOL</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{backgroundColor:"#F1F1F1", marginVertical: windowHeight/25}}>
                <View style={{marginHorizontal: windowWidth/20, marginVertical: windowHeight/40}}>
                  <Text style={{fontSize:24, fontWeight:"bold"}}>YORUMLAR</Text>
                  <Text style={{fontSize:14, fontWeight:300}}>Yorum kurallarını okumak için tıklayınız!</Text>
                </View>
                <View style = {{borderWidth: 0.4, borderColor:'gray'}}/>
                <View style={{marginHorizontal: windowWidth/20, marginVertical: windowHeight/40}}>
                  <View style={{backgroundColor:"white",flexDirection: "row", justifyContent:"space-between", height: windowHeight/20}}>
                    <TextInput style={{justifyContent:"center", marginLeft: 5, width: "70%"}} placeholder="E-posta adresinizi yazınız!" ></TextInput>
                    <TouchableOpacity style={{justifyContent:"center", alignItems: "center", backgroundColor: "#F1F1F1",margin:5}}>
                      <Text style={{padding: 5, fontWeight:"bold"}}>GÖNDER</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style = {{borderWidth: 0.4, borderColor:'gray'}}/>
                <View style={{marginHorizontal: windowWidth/20, marginVertical: windowHeight/40}}>

                  <View style={{ marginVertical: 10 }}>
                    {jsonData.comments.map((yorum, index) => (commentList == false && index < 2) ?

                      <View key={index} style={{flex:1, flexDirection:"row", marginBottom:20}}>
                        <View style={{borderWidth:1, borderRadius: 25,width:windowWidth/8, height: windowHeight/18, alignSelf: "center",justifyContent:"center"}}>
                          <Text style={{textAlign:"center"}}>{yorum.commentHeader[0]}{yorum.commentHeader[1]}</Text>
                        </View>
                        <View style={{flexDirection:"column", width:windowWidth/2}}>
                          <Text style={{marginLeft:10, fontWeight:"bold" }}>{yorum.commentHeader}</Text>
                          <Text style={{marginLeft:10, fontWeight: 300}}>{yorum.commentText}</Text>
                        </View>
                      </View>
                      : commentList == true &&
                      <View key={index} style={{flex:1, flexDirection:"row", marginBottom:20}}>
                        <View style={{borderWidth:1, borderRadius: 25,width:windowWidth/8, height: windowHeight/18, alignSelf: "center",justifyContent:"center"}}>
                          <Text style={{textAlign:"center"}}>{yorum.commentHeader[0]}{yorum.commentHeader[1]}</Text>
                        </View>
                        <View style={{flexDirection:"column", width:windowWidth/2}}>
                          <Text style={{marginLeft:10, fontWeight:"bold" }}>{yorum.commentHeader}</Text>
                          <Text style={{marginLeft:10, fontWeight: 300}}>{yorum.commentText}</Text>
                        </View>
                      </View> )
                    }
                  </View>
                </View>

                <View style={{flex:1, position:"relative", margin: -30, alignSelf: "center"}}>
                  <TouchableOpacity onPress={() => handleCommentClicker()} style={{ width:windowWidth/2, height: windowHeight/18,position:"relative",
                    borderWidth:2,borderColor: "#DEDEDE", backgroundColor: "white", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{textAlign:"center", fontWeight:"bold"}}>TÜM YORUMLARI GÖSTER</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          }
      </ScrollView>
      <FooterTab navigation={props.navigation}></FooterTab>
    </SafeAreaView>
  );
}
export default DetailsScreen;
