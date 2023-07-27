import { Text, View, ImageBackground, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import data from "../constant/entries";
import LinearGradient from "react-native-linear-gradient";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Haftasonulist() {

  const style = StyleSheet.create({
    list: {
      flex:1,
      backgroundColor: "white",
      height: windowHeight- 260,
      width:windowWidth-93,
      marginTop: 40,
      marginLeft: 25,
      marginRight: 15,
      zIndex: 1,
    },
    seperator: {
      borderWidth: 0.5,
      borderColor:'black',
      margin:10,
    },

  })


  const Item = ({item}) => {
    const formattedId = item.id < 10 ? `0${item.id}` : `${item.id}`;

    switch (item.itemType) {
        case 0:

          return(
            <View style={{flex:1,height:windowHeight- 260}}>
              <View style={style.list}>
                <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>
                  <Image source={item.images[0]} resizeMode={"cover"} style={{width: 300,
                    height: 170, marginLeft: (windowWidth-393)/2, marginTop: 20}}>
                  </Image>
                  <Text style={{fontSize: 16,textAlign:"center", marginTop: 20}}>{item .name}</Text>
                  <View style = {[style.seperator, {marginHorizontal: 120}]}/>
                  <Text style={{fontSize: 24,textAlign:"center", marginVertical:5,marginHorizontal:(windowWidth-393)/2, fontWeight: 500,
                    height:"10%"}}>{item .header}</Text>
                  <View style = {[style.seperator, {marginHorizontal: 100}]}/>

                  <Text style={{fontSize: 20,textAlign:"center", fontWeight:300,marginHorizontal:(windowWidth-393)/2,height:"25%"}}>{item .content}</Text>
                  <Text style={{fontSize: 16,textAlign:"center", fontWeight:300, marginBottom: 20}}>{item .date}</Text>
                  <TouchableOpacity onPress={() => {}}
                                  style={{width: 200, height:50, borderRadius: 25, borderWidth: 1,
                                    borderColor: "black", justifyContent:"center",alignSelf:"center", backgroundColor: 'white',
                                    marginBottom: 30,}}>
                    <Text style={{fontSize:20, textAlign:"center", fontWeight:400}}>GÖRÜNTÜLE</Text>
                  </TouchableOpacity>
              </View>

              <View style={{justifyContent:"center", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>

          );
        case 1:
          return(

            <View style={{flex:1,height:windowHeight- 260}}>
              <View style={style.list}>

                <ImageBackground source={item.images[0]} resizeMode={"cover"} style={{flex: 1, justifyContent:"flex-start", alignItems:"center"}}>
                  <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>
                  <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={{width: "100%", height:"100%", top: 0, position: "absolute"}}/>

                  <View style={{height:windowHeight/2 -130, justifyContent:'flex-end', width:"50%", alignItems:"center"}}>
                    <TouchableOpacity onPress={() => {}} style={{ width:"20%", height: "10%",
                      borderRadius:25,borderWidth:2,borderColor: "white", backgroundColor: "rgba(0,0,0,0.4)", justifyContent:"center", alignItems:"center"}}>
                      <Image source={require("../asset/video.png")} resizeMode={"center"}></Image>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex:1, justifyContent:"flex-end"}}>
                    <Text style={{fontSize: 16,textAlign:"center", marginTop: 20, color: "white"}}>{item .name}</Text>
                    <View style = { {marginHorizontal: "35%", borderWidth: 1, borderColor: "white", margin: "5%" }}/>
                    <Text style={{fontSize: 24,textAlign:"center", marginBottom:"10%",marginHorizontal:(windowWidth-393)/2,
                      fontWeight: 500, height:"25%", color: "white"}}>{item .header}</Text>

                    <TouchableOpacity onPress={() => {}}
                                      style={{width: 200, height:"20%", borderRadius: 25, borderWidth: 1,
                                        borderColor: "white", justifyContent:"center",alignSelf:"center",
                                        marginBottom: 30,backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                      <Text style={{fontSize:20, textAlign:"center", fontWeight:400, color: "white"}}>GÖRÜNTÜLE</Text>
                    </TouchableOpacity>
                  </View>

                </ImageBackground>

              </View>
              <View style={{justifyContent:"flex-end", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>

        );
        case 2:
          return(
            <View style={{flex:1,height:windowHeight- 260}}>

            <View style={style.list}>
              <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>

                <View style={{flex:1,justifyContent: "center", }}>
                  <Text style={{fontSize: 16,textAlign:"center", marginTop: 20}}>{item .name}</Text>
                  <View style = {[style.seperator, {marginHorizontal: 120}]}/>
                  <Text style={{fontSize: 24,textAlign:"center", marginVertical:5,marginHorizontal:(windowWidth-393)/2, fontWeight: 500, height:"10%"}}>{item .header}</Text>
                  <View style = {[style.seperator, {marginHorizontal: 100}]}/>

                  <Text style={{fontSize: 20,textAlign:"center", fontWeight:300,marginHorizontal:(windowWidth-393)/2,height:"30%", marginTop: 20}}>{item .content}</Text>
                  <Text style={{fontSize: 16,textAlign:"center", fontWeight:300, marginBottom: 20}}>{item .date}</Text>
                  <TouchableOpacity onPress={() => {}}
                                    style={{width: "60%", height:"8%", borderRadius: 25, borderWidth: 1,
                                      borderColor: "black", justifyContent:"center",alignSelf:"center", backgroundColor: 'white',
                                      marginBottom: 30,}}>
                    <Text style={{fontSize:20, textAlign:"center", fontWeight:400}}>GÖRÜNTÜLE</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={{justifyContent:"flex-end", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>
                );
        case 3:
          return(

            <View style={{flex:1,height:windowHeight- 260}}>
              <View style={style.list}>
                <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                  <Image source={item.images[0]} resizeMode={"contain"} style={{width: "88%", height: "40%"}}></Image>
                  <Text style={{fontSize: 16, marginVertical: 20 }}>{item.name}</Text>
                  <Image source={item.images[1]} resizeMode={"cover"} style={{width: "88%", height: "40%"}}></Image>
                </View>
              </View>
              <View style={{justifyContent:"flex-end", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>

          );
        case 4:
          return(

            <View style={{flex:1,height:windowHeight- 260}}>
              <View style={style.list}>

                <ImageBackground source={item.images[0]} resizeMode={"cover"} style={{flex: 1, justifyContent:"flex-end"}}>
                  <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>
                  <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)']} style={{width: "100%", height:"100%", top: 0, position: "absolute"}}/>

                    <Text style={{fontSize: 18,textAlign:"center", marginTop: 20, color: "white"}}>{item .name}</Text>
                    <View style = {{marginHorizontal: 120,borderColor:"white", borderWidth:1, margin: 10}}/>
                    <Text style={{fontSize: 24,textAlign:"center", marginBottom:"5%",marginHorizontal:(windowWidth-393)/2,
                      fontWeight: 500, height:"10%", color: "white"}}>{item .header}</Text>

                    <TouchableOpacity onPress={() => {}}
                                      style={{width: "60%", height:"8%", borderRadius: 25, borderWidth: 1,
                                        borderColor: "white", justifyContent:"center",alignSelf:"center",
                                        marginBottom: 30,}}>
                      <Text style={{fontSize:20, textAlign:"center", fontWeight:400, color: "white"}}>GÖRÜNTÜLE</Text>
                    </TouchableOpacity>
                </ImageBackground>

              </View>
              <View style={{justifyContent:"flex-end", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>

            );
        case 5:
          return(
            <View style={{flex:1,height:windowHeight- 260}}>
              <View style={style.list}>
                <View style={{borderWidth: 1, width: 50, top: '50%', right: -40, position: "absolute",borderColor:"#E9D29E"}}/>
                <ImageBackground resizeMode={"cover"} source={item.images[0]} style={{flex:1}}>

                </ImageBackground>
              </View>
              <View style={{justifyContent:"flex-end", top:windowHeight- 300, position:"absolute", right: "35%", zIndex:0}}>
                <Text style={{textAlign:"center", fontSize:72}}>{formattedId}</Text>
              </View>
            </View>
            );
      }
   };


  return (
    <View style={{flex: 1}}>

      <View style={{flex:1}}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => <Item item={item}/>}
          keyExtractor={item => item.id}>
        </FlatList>
      </View>

    </View>
  );

}

export default Haftasonulist;
