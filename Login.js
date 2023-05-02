import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Login({navigation}) {

  return (
    <View style={[styles.container]}>

      <View>
        <Text style={styles.text1}>Hii User!</Text>
      </View>
      {/* <Image
        style={styles.stretch}
        resizeMode="contain"
      source={require('./assets/favicon.png')}
      /> */}
      <View style={styles.container1}>

        <Text style={styles.text}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder='Enter Your Email'
          placeholderTextColor='#87BEFF'
        />

        <TextInput
          style={styles.input}
          placeholder='Enter Your Password'
          placeholderTextColor='#87BEFF'
          maxLength={8}
        />

        <TouchableOpacity >
          <Text style={styles.forgotPassword}> Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
        >
          <Text style={styles.sub}>LOGIN</Text>
        </TouchableOpacity>


        <Text style={styles.or}>--------------OR--------------</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Register')}
          style={styles.btn1}
        >
          <Text style={styles.sub1}>SIGNUP</Text>
        </TouchableOpacity>

        
      </View>
    </View>
    


  );
  

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87BEFF',
  },
  container1: {
    width:"110%",
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: 30,
    //paddingVertical: "8%",
    borderRadius: 15,
    borderWidth: 0,
    marginTop: 0,
    marginBottom: 30,
    // padding:10,

  },
  text: {
    width: "100%",
    color: 'black',
    bottom:15,
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing:2,
    //marginLeft:9,
    textAlign:"center",
    // paddingHorizontal:10,
  },
  text1: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    paddingVertical:30,
    textAlign:"center",
  },
  forgotPassword: {
    color:'#87BEFF',
    fontSize:15,
    fontWeight:"bold",
    paddingLeft:"52%",
    marginTop:10,


  },

  or: {
    top:8,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"#87BEFF",
  },
  input: {
    //backgroundColor: '#ffffff',
    color: '#87BEFF',
    marginLeft: 0,
    //width: 270,
    marginVertical: "2%",
    borderWidth: 0,
    borderBottomWidth:1,
    //borderRadius:4,
    borderColor: "black",
    fontSize: 20,
    fontWeight:"bold",
    letterSpacing: 1,
    //paddingHorizontal: 10,
    //paddingVertical: 0,
    //marginBottom:0,
    
    
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
})