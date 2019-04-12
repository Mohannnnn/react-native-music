import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from "react-native";

class SongDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Music',
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>歌曲详情</Text>
            </View>
        )
    }s
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    }
})

export default SongDetail;