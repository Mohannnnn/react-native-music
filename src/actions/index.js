import * as actionsTypes from '../constants/index';

//用户信息
export const updateUserInfo = (data) => {
    return {
        type : actionsTypes.USERINFO_UPDATE,
        data
    }
}
//获取歌单
export const updateAlbumList = (data) => {
    return {
        type : actionsTypes.ALBUMLIST_UPDATE,
        data
    }
}
//添加播放列表歌曲
export const addSongList = (data) => {
    return {
        type : actionsTypes.SONGLIST_ADD,
        data
    }
}
//删除某项播放列表中的歌曲
export const deleteSongList = (data) => {
    return {
        type : actionsTypes.SONGLIST_DELETE,
        data
    }
}
//删除全部播放列表的歌曲
export const deleteAllSongList = (data) => {
    return {
        type : actionsTypes.SONGLIST_DELETEALL,
        data
    }
}
//更新当前播放歌曲
export const updateSongPlayCur = (data) => {
    return {
        type : actionsTypes.SONGPLAYCUR_UPDATE,
        data
    }
}
//更新播放状态
export const updateSongPlayStatus = (data) => {
    return {
        type : actionsTypes.SONGPLAYSTATUS_UPDATE,
        data
    }
}
//更新播放时间
export const updateSongPlayTime = (data) => {
    return {
        type : actionsTypes.SONGPLAYTIME_UPDATE,
        data
    }
}
//更新播放音量
export const updateSongPlayVolume = (data) => {
    return {
        type : actionsTypes.SONGPLAYVOLUME_UPDATE,
        data
    }
}

//更新播放模式
export const updateSongPlayMode = (data) => {
    return {
        type : actionsTypes.SONGPLAYMODE_UPDATE,
        data
    }
}