import React from 'react'
import {View} from 'react-native'

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logyt.png')}
                    style={{width:160,height:80,marginTop:-10, marginLeft:5,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/logvideo.png')}
                    style={{width:40,height:40,marginTop:11, marginLeft:70,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/lonceng.png')}
                    style={{width:32,height:32,marginTop:14, marginLeft:10,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/pencarian.png')}
                    style={{width:28,height:28,marginTop:17, marginLeft:15,}}
                />
            </View>
            <View>
                <Image
                    source={require('../assets/logakun.jpg')}
                    style={{width:30,height:30,marginTop:15, marginLeft:20,borderRadius:20,}}
                />
            </View>
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        flexDirection:'row',
        height:60,
        elevation:10,
    },
});