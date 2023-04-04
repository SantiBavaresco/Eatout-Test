import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Dimensions, Text, Emoji } from 'react-native';


export default function CheckOut() {
    console.log("CHECKOUT !");
useEffect(()=>{
    async function sendServer(){
        let response=await fetch("http://192.168.3.206:5001/merca",{
           method: 'POST',
           headers:{
               Accept: 'application/json',
               'Content-Type':'application/json'
           },
            body: {
              price: 10,
              address: "nombre del resto"
            }
        });
        let json=await response();
        console.log(json);
    }
    sendServer();
},[]);

return(
    <Text>HOLIIS</Text>
)
}