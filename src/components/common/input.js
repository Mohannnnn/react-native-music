import React from 'react';
import { TextInput , StyleSheet, Text, View , Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : '告白气球'
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../static/images/search.png')}/>
                {/* <Ionicons name={'ios-search'} size={15} color='#d3d3d4'/>, */}
                <TextInput style={styles.input}
                onChangeText={(txt) => this.props.onChangeText(txt)}
                placeholder={this.props.placeholder}
                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'transparent',
    },
    image : {
        position:'absolute',
        left : 10,
        zIndex:5,
        width:15,
        height:15
    },
    input: {
        borderColor: "#f7f7f7",
        backgroundColor: "#f7f7f7",
        borderRadius: 20,
        padding: 0,
        width:250,
        height:35,
        paddingLeft: 30,
        paddingRight: 10,
        color:'#d3d3d4',
        fontSize: 15,
        textAlign:'left'
    }
})

export default Input;