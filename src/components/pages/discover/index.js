import React from 'react';
import { Image, FlatList, Button , StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../common/input';

class Discover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            headerTitleDefaultValue : '告白气球',
            headerTitleValue : ''
        }
        this.changeHeaderTitle = this.changeHeaderTitle.bind(this);
    }
    static navigationOptions = ({ navigation ,screenProps , navigationOptions }) =>{
        console.log( navigation ,screenProps ,navigationOptions)
        return Object.assign(navigationOptions,{     
            title : '发现',
            headerTitle: <Input defaultValue={navigation.state.params.defaultValue} onChangeText={navigation.state.params.onChangeText}/>,
            headerRight: <Ionicons name={'ios-stats'} size={30} color='#020202'></Ionicons>,
            headerRightContainerStyle: {
                marginRight: 20,
            }
        })
    }
    static getDerivedStateFromProps(nextProps,prevState){
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentDidMount(){
        this.props.navigation.setParams({
            defaultValue:this.state.headerTitleDefaultValue,
            onChangeText:this.changeHeaderTitle
        })
    }
    changeHeaderTitle = (txt) => {
        console.log(txt);
        this.setState({ headerTitleValue : txt });
    };
    render(){
        return (
            <View style={styles.container}>
                <Text>发现</Text>
                <Button
                    title="Go to account"
                    onPress={() => this.props.navigation.navigate('Album',{
                        name : '账号',
                        value : '哈哈'
                    })}
                />
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

export default Discover;