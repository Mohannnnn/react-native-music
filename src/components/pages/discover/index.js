import React from 'react';
import { Image, ScrollView, TouchableHighlight ,  Button , StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Input from '../../common/input';
import { formatNumber } from '../../../utils/tools';
import { unitWidth , unitHeight } from '../../../utils/adapter';
import * as getData from '../../../service/getData';

class Discover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            headerTitlePlaceholder : '告白气球（周杰伦）',
            headerTitleValue : '',
            platform : 'netease',
            recommandSongList : []
        }
        this.changeHeaderTitle = this.changeHeaderTitle.bind(this);
    }
    static navigationOptions = ({ navigation ,screenProps , navigationOptions }) =>{
        // console.log( navigation ,screenProps ,navigationOptions)
        return Object.assign(navigationOptions,{     
            title : '发现',
            headerTitle: <Input placeholder={navigation.state.params.placeholder} onChangeText={navigation.state.params.onChangeText}/>,
            headerRight: <Ionicons name={'ios-stats'} size={30} color='#838383'></Ionicons>,
            headerRightContainerStyle: {
                marginRight: 20,
            },
            // <Text style={{color : '#838383' , fontWeight: 'bold', fontSize : unitHeight * 26}}>Mo</Text>,
            headerLeft :  <Ionicons name={'ios-mic'} size={30} color='#838383'></Ionicons>,
            headerLeftContainerStyle: {
                marginLeft: 20,
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
        //设置传递的导航组件
        this.props.navigation.setParams({
            placeholder:this.state.headerTitlePlaceholder,
            onChangeText:this.changeHeaderTitle
        });
        //获取热门歌单
        getData.getHotSongList({
            platform : this.state.platform,
            categoryType : '全部',
            orderType :'hot',
            pageSize : 15
        }).then(res => {
            if(res.code == 200) {
                this.setState({
                    recommandSongList : res.data
                })
            }
        })
    }
    changeHeaderTitle = (txt) => {
        this.setState({ headerTitleValue : txt });
    };
    render(){
        const SwiperHeader = ({curIndex}) => {
            //curIndex当前数组倒数第几个 -1，-2
            const data = this.state.recommandSongList;
            const dataLen = data.length;
            if(data[dataLen+curIndex]){
                return <Image  source={{uri: data[dataLen+curIndex].coverImgUrl }} style={styles.swiperImg} />
            }else {
                return null;
            }
        }
        const RecommandList = () => {
            return this.state.recommandSongList.map((item , index) => {
                if(index < 12) {     
                    return (
                        <View style={styles.recommandSongList} key={index}>
                            <Image source={{uri: item.coverImgUrl }} style={styles.recommandSongListImg}/>
                            <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.recommandSongListText}>{item.title}</Text>
                            <View style={{position : 'absolute', right : 0 , top : 5 , flexDirection : 'row' ,  alignItems : 'center', marginRight : 10}}>
                                <Ionicons name={'ios-headset'} size={13} color='#fff'/>
                                <Text style={{ color : '#fff' , fontSize : 12 }}>{formatNumber(item.playCount)}</Text>
                            </View>
                        </View>
                    )
                }
            })
        }
        return (
            <ScrollView contentContainerStyle={styles.container} alwaysBounceVertical={true}>
                <View style={styles.swiper}>
                    <Swiper 
                        autoplay={true}
                        horizontal ={true}
                        removeClippedSubviews={false}
                        autoplayTimeout = {4}
                        showsPagination = {true}
                        paginationStyle = {styles.paginationStyle}
                        dotStyle = {styles.dotStyle}
                        activeDotStyle = {styles.activeDotStyle}
                    >
                        <SwiperHeader curIndex={-1}></SwiperHeader>
                        <SwiperHeader curIndex={-2}></SwiperHeader>
                        <SwiperHeader curIndex={-3}></SwiperHeader>
                    </Swiper>
                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.optionList}>
                        <View style={styles.optionListOne}>
                            <Ionicons name={'ios-musical-note'} size={30} color='#fff'></Ionicons>
                        </View>
                        <Text style={styles.optionListText}>热门歌曲</Text>
                    </View>
                    <View style={styles.optionList}>
                        <View style={styles.optionListOne}>
                            <Ionicons name={'ios-list-box'} size={30} color='#fff'></Ionicons>
                        </View>
                        <Text style={styles.optionListText}>歌单</Text>
                    </View>
                    <View style={styles.optionList}>
                        <View style={styles.optionListOne}>
                            <Ionicons name={'ios-podium'} size={30} color='#fff'></Ionicons>
                        </View>
                        <Text style={styles.optionListText}>推荐</Text>
                    </View>
                    <View style={styles.optionList}>
                        <View style={styles.optionListOne}>
                            <Ionicons name={'ios-videocam'} size={30} color='#fff'></Ionicons>
                        </View>
                        <Text style={styles.optionListText}>MV</Text>
                    </View>
                </View>
                <View style={styles.recommandSongContainer}>
                    <View style={styles.recommandSongTitle}>
                        <Text style={{fontSize : unitWidth * 36 , color : '#000' , fontWeight : 'bold'}}>推荐歌单</Text>
                        <TouchableHighlight style={styles.recommandSongTitleAlbum}>
                            <Text style={styles.recommandSongTitleText}>歌单广场</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.recommandSongContent}>
                        <RecommandList></RecommandList>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        // flex : 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    swiper : {
        width: unitWidth * 750,
        height: unitWidth * 250,
    },
    swiperImg : {
        width: unitWidth * 700,
        marginLeft : unitWidth * 25,
        marginRight : unitWidth * 25,
        height: unitWidth * 250,
        borderRadius:10,
    },
    paginationStyle: {
        bottom: 5,
    },
    dotStyle: {
        width: 10,
        height: 10,
        backgroundColor: '#ada5b6',
        opacity:1,
        borderRadius: 10,
    },
    activeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#1890ff',
    },
    //推荐
    optionContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width: unitWidth * 700,
    },
    optionList : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : unitWidth * 40,
        paddingBottom : unitWidth * 40,
    },
    optionListOne : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#1890ff',
        width: unitWidth * 100,
        height: unitWidth * 100,
        marginLeft: unitWidth * 20,
        marginRight: unitWidth * 20,
        borderRadius: 100,
    },
    optionListText : {
        color : '#545456',
        fontSize : unitWidth * 26,
        lineHeight : unitWidth * 30,
        marginTop : unitWidth * 20,
    },
    recommandSongContainer : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingLeft: unitWidth * 25,
        paddingRight: unitWidth * 25, 
        paddingTop : unitWidth * 40,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        width : '100%',
    },
    recommandSongTitle : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingBottom : unitWidth * 30,
        width : '100%',
        // backgroundColor : '#eee'
    },
    recommandSongTitleAlbum : {
        padding : unitWidth * 10,
        borderRadius : 10 ,
        borderWidth : 1 ,
        borderColor: '#eaeaea',
    },
    recommandSongTitleText : {
        color : '#545456',
        fontSize : unitWidth * 26,
    },
    recommandSongContent : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        flexWrap: 'wrap',
        alignItems : 'center',
        width : '100%',
    },
    recommandSongList : {
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
        width : unitWidth * 220,
        // backgroundColor : '#ccc'
    },
    recommandSongListText : {
        color : '#545456',
        fontSize : unitWidth * 26,
        lineHeight : unitWidth * 30,
        marginTop : unitWidth * 20,
        marginBottom : unitWidth * 20,
    },
    recommandSongListImg : {
        borderRadius: 10,
        height: unitWidth * 220,
        width : unitWidth * 220,
    },
})

export default Discover;