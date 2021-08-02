import React,{ useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {useFonts} from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Roboto-Medium.ttf'),
    Bold :require('./assets/fonts/Roboto-Bold.ttf'),
  });
  const [disabled,setDisabled]=useState(true)
  const [disabledBut,setDisabledBut]=useState(false)
  if(!loaded){
    return null;
  }
  function maxLengthCheck()
  { 
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
       }
  }
  function endEdit(val)
  { 
    if (val.target.value.length >=8 )
     {  
       setDisabled(false) ,
       setDisabledBut(true)
     }
    else  {
       setDisabled(true) 
       setDisabledBut(false)
      }

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style ={styles.header}>
        <Ionicons name="menu" style={styles.menu_icon} size={32} color="black" onPress={() => console.log('Simple Button pressed')}  /> 
        <Text style={styles.logoText}>Tra Cứu Điểm Thi</Text>
      </View>
      <View style ={styles.contentArea}>
          <Text style ={styles.content}>Vui Lòng Nhập Số Báo Danh</Text>
          <TextInput  
              style ={styles.input}
              textContentType="telephoneNumber"
              keyboardType="numeric"
              autoFocus={true}
              placeholder="Nhập SBD"
              placeholderTextColor="#929292"
              maxLength = "8" 
              onInput={maxLengthCheck}
              onChange={endEdit}
          />
          <TouchableOpacity 
            style ={ disabledBut ? styles.buttonSearchEnable  : styles.buttonSearchDisable }
            disabled = {disabled}
          >
                <Text style ={styles.textOnButton}>Tra Cứu</Text>
          </TouchableOpacity>

      </View>
      <StatusBar style="light" />
    </SafeAreaView>
    
  );
}
const TEXT = {
  color :"#000",
  textAlign:"center",
  fontFamily: 'Regular',
  
}
const styles = StyleSheet.create({
  container: {
      flex :  1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor :'#fff',
      
  },
  header: {
    ...TEXT,
    flexDirection:"row",
    textAlign: 'center',
    height : 55,
    backgroundColor :"#fff",
    shadowColor:'#000',
    shadowRadius:'3px',
    justifyContent:"space-between",
    marginTop:5,
    marginRight:4,
    marginLeft:4,
  },
  logoText:{
    ...TEXT,
    fontSize:20,
    lineHeight: 50,
    fontWeight:"500",
    marginRight:"35%",
    
  },
  menu_icon:{
    lineHeight: 'initial',
    float:'left',
    padding:'6px',
  },
  contentArea:{
    backgroundColor:"#B5B5B5",
    flex:1,
    margin: 3,
  },
  content:{
    ...TEXT,
    paddingTop: 90,
    fontSize: 20,

    
  },
  input:{
    backgroundColor:"#D3D3D3",
    height: 40,
    marginTop:15,
    marginLeft: 150,
    marginRight: 150,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    fontFamily: 'Regular',
  },
  buttonSearchEnable:{
    ...TEXT,
    height: 40,
    backgroundColor:"#fff",
    marginTop:15,
    marginLeft: 150,
    marginRight: 150,
    padding: 10,
    borderRadius: 20,
  },
  buttonSearchDisable:{
    ...TEXT,
    height: 40,
    backgroundColor:"#A9A9A9",
    marginTop:15,
    marginLeft: 150,
    marginRight: 150,
    padding: 10,
    borderRadius: 20,
  },
  textOnButton:{
    ...TEXT,
    color:"	#696969",
    marginTop:2,
  }
});
