import React from 'react';
import { Image, FlatList, Button , StyleSheet, Text, View } from "react-native";


class Account extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Music',
        }
    }
    // static navigationOptions = ({navigation}) => {
    //     return {
    //         title : navigation.getParam('name')
    //     }
    // }Î
    static getDerivedStateFromProps(nextProps,prevState){
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentDidMount(){
        // console.log(this.props)
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>账号</Text>
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

export default Account;