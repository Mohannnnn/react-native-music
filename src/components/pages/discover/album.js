import React from 'react';
import { Image, FlatList, Button , StyleSheet, Text, View } from "react-native";

class Album extends React.Component{
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
    }
    render(){
        return (
            <View style={styles.container}>
                    {/* <FlatList 
                        data={this.state.recommandSongList}
                        renderItem={
                            ({item}) => (
                                <View style={styles.recommandSongList}>
                                    <Image source={{uri: item.coverImgUrl }} style={styles.recommandSongListImg}/>
                                    <Text style={styles.recommandSongListText}>{item.title}</Text>
                                    <View style={{position : 'absolute', right : 0 , top : 5 , flexDirection : 'row' ,  alignItems : 'center', marginRight : 10}}>
                                        <Ionicons name={'ios-headset'} size={15} color='#fff'/>
                                        <Text style={{ color : '#fff' , fontSize : 14 }}>{item.playCount}</Text>
                                    </View>
                                </View>
                            )
                        }
                        //多列布局
                        numColumns={3}
                        //多列布局样式
                        columnWrapperStyle={styles.recommandSongList}
                        //初始化个数
                        initialNumToRender={12}
                        //数据为空
                        ListEmptyComponent={
                            <Text style={{textAlign: "center",marginBottom: 10}}>暂无数据</Text>
                        }
                        //key值
                        keyExtractor={(item,index)=>index}
                    /> */}
                <Text>专辑页</Text>
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

export default Album;