import React from 'react';
import { Image, FlatList, StyleSheet, Text, View , Button } from "react-native";

class Mine extends React.Component{
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
                <Text>我的</Text>
                <Button
                    title="Go to songDetail"
                    onPress={() => this.props.navigation.navigate('SongDetail',{
                        name : '账号',
                        value : '哈哈'
                    })}
                />
            </View>
        )
    }
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

export default Mine;