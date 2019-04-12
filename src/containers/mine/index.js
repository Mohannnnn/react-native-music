import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAlbumList as albumListUpdateAction } from '../../actions/index.js';
import Mine from '../../components/mine/index';
//注册store
const mapStateToProps = (state) => {
    return {
        songList: state.songList,                   //播放歌曲列表({id,type})
        songPlayCur : state.songPlayCur,            //当前播放
        songPlayStatus: state.songPlayStatus,       //播放状态
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        albumListUpdateDispatch : bindActionCreators(albumListUpdateAction , dispatch)
    }
};
export default connect(null)(Mine);