import fetch from '../utils/fetch';
import requestUrl from './requestUrl';

//1.获取歌曲列表
export const getSongList = ({ platform = 'netease', limit = 20, id = 3778678, offset = 1 } = {}) => {
    if (requestUrl[platform].songList) {
        return (
            fetch({
                url: requestUrl[platform].songList,
                data: {
                    key: 579621905,
                    id: id,
                    limit: limit,
                    offset: offset
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//2.搜索
// 音乐搜索:type=song
// 专辑搜索:type=album
// 用户搜索:type=user
export const getSearch = ({ platform = 'netease', s = '', type = 'song', limit = 20, offset = 1 } = {}) => {
    if (requestUrl[platform].search) {
        return (
            fetch({
                url: requestUrl[platform].search,
                data: {
                    key: 579621905,
                    s: s,
                    type: type,
                    limit: limit,
                    offset: offset
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//3.获取专辑详情
export const getAlbumList = ({ platform = 'netease', id = 32311 } = {}) => {
    if (requestUrl[platform].albumList) {
        return (
            fetch({
                url: requestUrl[platform].albumList,
                data: {
                    key: 579621905,
                    id: id
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}


//4.获取音乐详情
export const getSong = ({ platform = 'netease', id = 526307800 } = {}) => {
    if (requestUrl[platform].song) {
        return (
            fetch({
                url: requestUrl[platform].song,
                data: {
                    key: 579621905,
                    id: id
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//5.获取音乐播放地址
export const getSongUrl = ({ platform = 'netease', id = 526307800, br = 999000 } = {}) => {
    if (requestUrl[platform].songUrl) {
        return (
            fetch({
                url: requestUrl[platform].songUrl,
                data: {
                    key: 579621905,
                    id: id,
                    br: br
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//6.获取音乐歌词
export const getSongLrc = ({ platform = 'netease', id = 526307800 } = {}) => {
    if (requestUrl[platform].songLrc) {
        return (
            fetch({
                url: requestUrl[platform].songLrc,
                data: {
                    key: 579621905,
                    id: id
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//7.获取音乐图片
export const getSongPic = ({ platform = 'netease', id = 526307800 } = {}) => {
    if (requestUrl[platform].songPic) {
        return (
            fetch({
                url: requestUrl[platform].songPic,
                data: {
                    key: 579621905,
                    id: id
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//8.获取mv信息
export const getMv = ({ platform = 'netease', id = 526307800 } = {}) => {
    if (requestUrl[platform].mv) {
        return (
            fetch({
                url: requestUrl[platform].mv,
                data: {
                    key: 579621905,
                    id: id
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//9.获取mv播放地址
export const getMvUrl = ({ platform = 'netease', id = 526307800, r = 1080 } = {}) => {
    if (requestUrl[platform].mvUrl) {
        return (
            fetch({
                url: requestUrl[platform].mvUrl,
                data: {
                    key: 579621905,
                    id: id,
                    r: r
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//10.获取歌单分类
export const getSongListCategory = ({ platform = 'netease' } = {}) => {
    if (requestUrl[platform].songListCategory) {
        return (
            fetch({
                url: requestUrl[platform].songListCategory,
                data: {
                    key: 579621905
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//11.获取精品歌单
export const getHqSongList = ({ platform = 'netease', cat = '全部', limit = 30, lasttime } = {}) => {
    if (requestUrl[platform].hqSongList) {
        return (
            fetch({
                url: requestUrl[platform].hqSongList,
                data: {
                    key: 579621905,
                    cat: cat,
                    limit: limit
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//12.获取热门歌单
//offset 分页
//order  最新和最热 可选值为 'new' 和 'hot',默认为 'hot'
export const getHotSongList = ({ platform = 'netease', cat = '全部', limit = 30, offset = 0, order = 'hot' } = {}) => {
    if (requestUrl[platform].hotSongList) {
        return (
            fetch({
                url: requestUrl[platform].hotSongList,
                data: {
                    key: 579621905,
                    cat: cat,
                    limit: limit,
                    offset: offset,
                    order: order
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//13.获取热门mv分类
export const getMvListCategory = ({ platform = 'netease' } = {}) => {
    if (requestUrl[platform].mvListCategory) {
        return (
            fetch({
                url: requestUrl[platform].mvListCategory,
                data: {
                    key: 579621905
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//14.获取mv排行榜
//offset 分页
export const getTopMvList = ({ platform = 'netease', limit = 30, offset = 0 } = {}) => {
    if (requestUrl[platform].topMvList) {
        return (
            fetch({
                url: requestUrl[platform].topMvList,
                data: {
                    key: 579621905,
                    limit: limit,
                    offset: offset
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}

//15.获取用户歌单信息
//offset 分页
export const getUserSongList = ({ platform = 'netease', uid = 115119971 } = {}) => {
    if (requestUrl[platform].userSongList) {
        return (
            fetch({
                url: requestUrl[platform].userSongList,
                data: {
                    key: 579621905,
                    uid: uid
                }
            })
        )
    } else {
        return Promise.resolve();
    }
}