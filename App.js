import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';



const App = () => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                <Main/>
                </ScrollView>
                <Home/>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({});