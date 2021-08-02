import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';


const Main = () => {
    return (
        <View>
            <View>
                <Image
                    source={require('../assets/fotohome.jpg')}
                    style={{width:425,height:250,marginBottom:10,marginBottom:10,}}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('../assets/pp.png')}
                    style={{width:45,height:45,borderRadius:50,backgroundColor:'#647C90',marginBottom:10,marginLeft:10,}}
                />
                <Text style={{fontSize:25,marginLeft:10,marginTop:7,}}>hosen_44</Text>
                <Image
                    source={require('../assets/titik3.png')}
                    style={{width:25,height:25,marginLeft:210,marginTop:10,}}
                />
            </View>
            <Text style={{fontSize:15,marginLeft:10,marginTop:-12,}}>Jangan lupa di like, coment and subcribe.</Text>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({});