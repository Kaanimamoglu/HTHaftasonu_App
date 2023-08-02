import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const style = StyleSheet.create({
  list: {
    flex:1,
    backgroundColor: "white",
    height: windowHeight,
    width:windowWidth/1.25,
    marginTop: 40,
    marginLeft: 25,
    marginRight: 15,
    zIndex: 1,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor:'black',
    margin:5,
  },
  listId: {
    justifyContent:"center",
    top:windowHeight/1.45,
    position:"absolute",
    right: windowWidth/3,
    zIndex:0
  },
  stick: {
    borderWidth: 1,
    width: windowWidth/9,
    top: '50%',
    right: -40,
    position: "absolute",
    borderColor:"#E9D29E"
  },
  title: {
    fontSize: 16,
    textAlign:"center",
    marginTop: 10
  },
  titleDescription: {
    fontSize: 24,
    textAlign:"center",
    marginVertical:5,
    marginHorizontal:windowWidth/15,
    height: "15%"
  },
  mainDescription: {
    fontSize: 20,
    textAlign:"center",

    marginHorizontal:windowWidth/15,
    height: windowHeight/6
  },
  date: {
    fontSize: 16,
    textAlign:"center",

    marginBottom: 10
  },
  showButton: {
    width: windowWidth/2,
    height: windowHeight/18,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "black",
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor: 'white',
  },
  shadowShowButton: {
    width: windowWidth/2,
    height: windowHeight/18,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    justifyContent:"center",
    alignSelf:"center",
  },
  headImage: {
    width: "80%",
    height: windowHeight/5.4,
    justifyContent:"center",
    alignSelf: "center"
  },
  buttonText: {
    fontSize:20,
    textAlign:"center",

  },
  video: {
    width: windowWidth/12,
    height: windowHeight/25,
    borderRadius:25,
    borderWidth:2,
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent:"center",
    alignItems:"center"
  },
  videoView: {
    height:windowHeight/2.65 ,
    justifyContent:'flex-end',
    width:"100%",
    alignItems:"center",
  },
  advert: {
    width: "90%",
    height: "40%",
  },
  videoTitleDescription: {
    fontSize: 24,
    textAlign:"center",
    marginVertical:5,
    marginHorizontal:windowWidth/15,
    height: "30%"
  },
})
