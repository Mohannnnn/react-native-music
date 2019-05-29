//请求接口地址配置
const requestUrl = {
    netease: {
        songList: 'https://v1.itooi.cn/netease/songList', //获取歌单详情列表
        search: 'https://v1.itooi.cn/netease/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://v1.itooi.cn/netease/album', //获取专辑详情
        song: 'https://v1.itooi.cn/netease/song', //获取音乐详情
        songUrl: 'https://v1.itooi.cn/netease/url', //获取音乐播放地址
        songLrc: 'https://v1.itooi.cn/netease/lrc', //获取音乐歌词
        songPic: 'https://v1.itooi.cn/netease/pic', //获取音乐图片
        songComment: 'https://v1.itooi.cn/netease/comment/song', //获取歌曲评论
        songHotComment: 'https://v1.itooi.cn/netease/comment/song/hot', //热门歌曲评论
        mv: 'https://v1.itooi.cn/netease/mv', //获取MV信息
        mvUrl: 'https://v1.itooi.cn/netease/mvUrl', //获取MV播放地址
        songListCategory: 'https://v1.itooi.cn/netease/songList/category', //获取歌单分类
        hqSongList: 'https://v1.itooi.cn/netease/songList/highQuality', //获取精品歌单
        hotSongList: 'https://v1.itooi.cn/netease/songList/hot', // 获取热门歌单
        mvListCategory: '', //mv分类
        topMvList: 'https://v1.itooi.cn/netease/mv/top', //获取MV排行榜
        hotMvList: '', //热门mv列表
        userSongList: 'https://v1.itooi.cn/netease/songList/user' //获取用户歌单信息
    },
    tencent: {
        songList: 'https://v1.itooi.cn/tencent/songList', //获取歌单详情列表
        search: 'https://v1.itooi.cn/tencent/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://v1.itooi.cn/tencent/album', //获取专辑详情
        song: 'https://v1.itooi.cn/tencent/song', //获取音乐详情
        songUrl: 'https://v1.itooi.cn/tencent/url', //获取音乐播放地址
        songLrc: 'https://v1.itooi.cn/tencent/lrc', //获取音乐歌词
        songPic: 'https://v1.itooi.cn/tencent/pic', //获取音乐图片
        songComment: 'https://v1.itooi.cn/tencent/comment/song', //获取歌曲评论
        songHotComment: 'https://v1.itooi.cn/tencent/comment/song/hot', //热门歌曲评论
        mv: 'https://v1.itooi.cn/tencent/mv', //获取MV信息
        mvUrl: 'https://v1.itooi.cn/tencent/mvUrl', //获取MV播放地址
        songListCategory: 'https://v1.itooi.cn/tencent/songList/category', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: 'https://v1.itooi.cn/tencent/songList/hot', // 获取热门歌单
        mvListCategory: 'https://v1.itooi.cn/tencent/mvListCategory', //mv分类
        topMvList: '', //获取MV排行榜
        hotMvList: 'https://v1.itooi.cn/tencent/mv/hot', //热门mv列表
        userSongList: 'https://v1.itooi.cn/tencent/songList/user' //获取用户歌单信息
    },
    kugou: {
        songList: 'https://v1.itooi.cn/kugou/songList', //获取歌单详情列表
        search: 'https://v1.itooi.cn/kugou/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://v1.itooi.cn/kugou/album', //获取专辑详情
        song: 'https://v1.itooi.cn/kugou/song', //获取音乐详情
        songUrl: 'https://v1.itooi.cn/kugou/url', //获取音乐播放地址
        songLrc: 'https://v1.itooi.cn/kugou/lrc', //获取音乐歌词
        songPic: 'https://v1.itooi.cn/kugou/pic', //获取音乐图片
        songComment: '', //获取歌曲评论
        songHotComment: '', //热门歌曲评论
        mv: 'https://v1.itooi.cn/kugou/mv', //获取MV信息
        mvUrl: 'https://v1.itooi.cn/kugou/mvUrl', //获取MV播放地址
        songListCategory: '', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: '', // 获取热门歌单
        mvListCategory: '', //mv分类
        topMvList: '', //获取MV排行榜
        hotMvList: '', //热门mv列表
        userSongList: '' //获取用户歌单信息
    },
    kuwo: {
        songList: 'https://v1.itooi.cn/kuwo/songList', //获取歌单详情列表
        search: 'https://v1.itooi.cn/kuwo/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://v1.itooi.cn/kuwo/album', //获取专辑详情
        song: 'https://v1.itooi.cn/kuwo/song', //获取音乐详情
        songUrl: 'https://v1.itooi.cn/kuwo/url', //获取音乐播放地址
        songLrc: 'https://v1.itooi.cn/kuwo/lrc', //获取音乐歌词
        songPic: 'https://v1.itooi.cn/kuwo/pic', //获取音乐图片
        songComment: '', //获取歌曲评论
        songHotComment: '', //热门歌曲评论
        mv: 'https://v1.itooi.cn/kuwo/mv', //获取MV信息
        mvUrl: 'https://v1.itooi.cn/kuwo/mvUrl', //获取MV播放地址
        songListCategory: '', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: '', // 获取热门歌单
        mvListCategory: '', //mv分类
        topMvList: '', //获取MV排行榜
        hotMvList: '', //热门mv列表
        userSongList: '' //获取用户歌单信息
    },
}
export default requestUrl;