import React from "react";
import { useState, useEffect } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Login({ navigation }) {
  const [seePassword, setSeePassword] = useState(true);
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);


  return (
    <View style={[styles.container]}>



      <View style={styles.header}>

        <Image source={require('./assets/logo1.png')}
          style={styles.logo} />
        <Text style={styles.text1}>Heal Acres</Text>


      </View>
      <View style={styles.container1}>

        <Text style={styles.text}>CREATE ACCOUNT</Text>
        <View style={styles.title}>

          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor='#87BEFF'
            maxLength={30}
          />
          <View style={styles.icon}>

            <Ionicons
              name="person"
              size={25}
              color={'#87BEFF'}
              right={20}
            />
          </View>
        </View>
        <View style={styles.title}>

          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#87BEFF'
            maxLength={30}
          />
          <View style={styles.icon}>

            <Ionicons
              name="mail"
              size={25}
              color={'#87BEFF'}
              right={20}
            />
          </View>
        </View>

        <View style={styles.title}>
          <TextInput
            value={password}
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#87BEFF'
            maxLength={9}
            secureTextEntry={seePassword}
            keyboardType="default"
            onPress={() => setSeePassword(!seePassword)}
            onChangeText={setpassword}
          />
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                setSeePassword(!seePassword);
              }}>
              <Ionicons
                name={seePassword === true ? 'eye-off' : 'eye'}
                size={25}
                color={'#87BEFF'}
                right={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.title}>
          <TextInput
            value={confirmPassword}
            style={styles.input}
            placeholder='Confirm Password'
            placeholderTextColor='#87BEFF'
            maxLength={9}
            secureTextEntry={seePassword}
            keyboardType="default"
            onPress={() => setSeeConfirmPassword(!seePassword)}
            onChangeText={setConfirmPassword}
          />
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                setSeeConfirmPassword(!seeConfirmPassword);
              }}>
              <Ionicons
                name={seeConfirmPassword === true ? 'eye-off' : 'eye'}
                size={25}
                color={'#87BEFF'}
                right={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.sub}>REGISTER</Text>
        </TouchableOpacity>


        <Text style={styles.or}>--------------OR--------------</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Login')}
          style={styles.btn1}
        >
          <Text style={styles.sub1}>LOGIN</Text>
        </TouchableOpacity>


      </View>
    </View>



  );


}

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    width: "100%",
    height: 100,
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87BEFF',
  },
  container1: {
    width: "110%",
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 30,
    //paddingVertical: "8%",
    borderRadius: 15,
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 30,
    // padding:10,

  },
  text: {
    width: "100%",
    color: 'black',
    bottom: 15,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    //marginLeft:9,
    textAlign: "center",
    // paddingHorizontal:10,
  },
  text1: {
    color: '#ffffff',
    fontSize: 38,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: "center",
  },
  forgotPassword: {
    color: '#87BEFF',
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: "52%",
    marginTop: 10,


  },

  or: {
    top: 8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#87BEFF",
  },

  btn: {
    width: 225,
    height: 35,
    backgroundColor: "#87BEFF",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },


  btn1: {
    width: 225,
    height: 35,
    backgroundColor: "#ffffff",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  sub: {
    fontSize: 22,
    color: "#f0fff0",
    fontWeight: "bold",
    letterSpacing: 2,
    //fontStyle: "italic",
  },

  sub1: {
    fontSize: 22,
    color: `#87BEFF`,
    fontWeight: "bold",
    letterSpacing: 2,
    //fontStyle: "italic",
  },

  logo: {
    width: 150,
    height:"100%",
    //position:"absolute",
  },

  header: {
    height:130,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //backgroundColor:"red",

  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '10%',
    //paddingRight: 10,
    //backgroundColor:"red",
    right: 10,
  },
  title: {
    flexDirection: "row",
    //backgroundColor:"blue",
  },
  input: {
    //backgroundColor: 'green',
    color: '#87BEFF',
    //width: 270,
    marginVertical: "2%",
    borderWidth: 0,
    borderBottomWidth: 1,
    //borderRadius:4,
    borderColor: "black",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    width: '100%',
  },

})

























