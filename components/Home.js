import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Home = () => {
    return (
        <View style={{backgroundColor:'#ffffff',flexDirection:'row',height:60,elevation:5}}>
            <View>
                <Image
                    source={require('../assets/beranda.png')}
                    style={{width:70,height:70,marginTop:-7, marginLeft:1,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/kompas.png')}
                    style={{width:39,height:39,marginTop:10, marginLeft:35,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/plus.png')}
                    style={{width:40,height:40,marginTop:10, marginLeft:45,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/menu.png')}
                    style={{width:35,height:35,marginTop:12, marginLeft:50,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/setting.png')}
                    style={{width:70,height:70,marginTop:-7, marginLeft:30,}}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});