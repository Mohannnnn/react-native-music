import React from 'react';
import { Image, FlatList, Button , StyleSheet, Text, View } from "react-native";

class Discover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentDidMount(){
        // console.log(this.props)
        // this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
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