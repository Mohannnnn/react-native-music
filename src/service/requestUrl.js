//请求接口地址配置
const requestUrl = {
    netease: {
        songList: 'https://api.itooi.cn/music/netease/songList', //获取歌单详情列表
        search: 'https://api.itooi.cn/music/netease/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://api.itooi.cn/music/netease/album', //获取专辑详情
        song: 'https://api.itooi.cn/music/netease/song', //获取音乐详情
        songUrl: 'https://api.itooi.cn/music/netease/url', //获取音乐播放地址
        songLrc: 'https://api.itooi.cn/music/netease/lrc', //获取音乐歌词
        songPic: 'https://api.itooi.cn/music/netease/pic', //获取音乐图片
        mv: 'https://api.itooi.cn/music/netease/mv', //获取MV信息
        mvUrl: 'https://api.itooi.cn/music/netease/mvUrl', //获取MV播放地址
        songListCategory: 'https://api.itooi.cn/music/netease/songListCategory', //获取歌单分类
        hqSongList: 'https://api.itooi.cn/music/netease/highQualitySongList', //获取精品歌单
        hotSongList: 'https://api.itooi.cn/music/netease/hotSongList', // 获取热门歌单
        mvListCategory: '', //热门mv分类
        topMvList: 'https://api.itooi.cn/music/netease/topMvList', //获取MV排行榜
        userSongList: 'https://api.itooi.cn/music/netease/userSongList' //获取用户歌单信息
    },
    tencent: {
        songList: 'https://api.itooi.cn/music/tencent/songList', //获取歌单详情列表
        search: 'https://api.itooi.cn/music/tencent/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://api.itooi.cn/music/tencent/album', //获取专辑详情
        song: 'https://api.itooi.cn/music/tencent/song', //获取音乐详情
        songUrl: 'https://api.itooi.cn/music/tencent/url', //获取音乐播放地址
        songLrc: 'https://api.itooi.cn/music/tencent/lrc', //获取音乐歌词
        songPic: 'https://api.itooi.cn/music/tencent/pic', //获取音乐图片
        mv: 'https://api.itooi.cn/music/tencent/mv', //获取MV信息
        mvUrl: 'https://api.itooi.cn/music/tencent/mvUrl', //获取MV播放地址
        songListCategory: 'https://api.itooi.cn/music/tencent/songListCategory', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: 'https://api.itooi.cn/music/tencent/hotSongList', // 获取热门歌单
        mvListCategory: 'https://api.itooi.cn/music/tencent/mvListCategory', //热门mv分类
        topMvList: 'https://api.itooi.cn/music/tencent/topMvList', //获取MV排行榜
        userSongList: 'https://api.itooi.cn/music/tencent/userSongList' //获取用户歌单信息
    },
    kugou: {
        songList: 'https://api.itooi.cn/music/kugou/songList', //获取歌单详情列表
        search: 'https://api.itooi.cn/music/kugou/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://api.itooi.cn/music/kugou/album', //获取专辑详情
        song: 'https://api.itooi.cn/music/kugou/song', //获取音乐详情
        songUrl: 'https://api.itooi.cn/music/kugou/url', //获取音乐播放地址
        songLrc: 'https://api.itooi.cn/music/kugou/lrc', //获取音乐歌词
        songPic: 'https://api.itooi.cn/music/kugou/pic', //获取音乐图片
        mv: 'https://api.itooi.cn/music/kugou/mv', //获取MV信息
        mvUrl: 'https://api.itooi.cn/music/kugou/mvUrl', //获取MV播放地址
        songListCategory: '', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: '', // 获取热门歌单
        mvListCategory: '', //热门mv分类
        topMvList: '', //获取MV排行榜
        userSongList: '' //获取用户歌单信息
    },
    kuwo: {
        songList: 'https://api.itooi.cn/music/kuwo/songList', //获取歌单详情列表
        search: 'https://api.itooi.cn/music/kuwo/search', //搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
        albumList: 'https://api.itooi.cn/music/kuwo/album', //获取专辑详情
        song: 'https://api.itooi.cn/music/kuwo/song', //获取音乐详情
        songUrl: 'https://api.itooi.cn/music/kuwo/url', //获取音乐播放地址
        songLrc: 'https://api.itooi.cn/music/kuwo/lrc', //获取音乐歌词
        songPic: 'https://api.itooi.cn/music/kuwo/pic', //获取音乐图片
        mv: 'https://api.itooi.cn/music/kuwo/mv', //获取MV信息
        mvUrl: 'https://api.itooi.cn/music/kuwo/mvUrl', //获取MV播放地址
        songListCategory: '', //获取歌单分类
        hqSongList: '', //获取精品歌单
        hotSongList: '', // 获取热门歌单
        mvListCategory: '', //热门mv分类
        topMvList: '', //获取MV排行榜
        userSongList: '' //获取用户歌单信息
    },
}
export default requestUrl;