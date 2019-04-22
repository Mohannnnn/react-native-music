import React from 'react';
import { TextInput , StyleSheet, Text, View , Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { unitWidth , unitHeight } from '../../utils/adapter';
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        backgroundColor:'transparent',
    },
    image : {
        position:'absolute',
        left : 10,
        zIndex:5,
        width:unitWidth * 30,
        height:unitWidth * 30,
    },
    input: {
        borderColor: "#f7f7f7",
        backgroundColor: "#f7f7f7",
        borderRadius: 20,
        padding: 0,
        width:unitWidth * 500,
        height:unitWidth * 70,
        paddingLeft: unitWidth * 60,
        paddingRight: unitWidth * 20,
        color:'#d3d3d4',
        fontSize: unitWidth * 30,
        textAlign:'left'
    }
})

export default Input;