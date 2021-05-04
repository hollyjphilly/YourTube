import { connect } from 'react-redux';
import SearchResults from './search_results';
import { searchVideos } from '../../actions/video_actions';

const mSTP = ({ entities }, rProps) => {
    return {
        videos: entities.videos,
    }
}

const mDTP = (dispatch) => {
    return {
        searchVideos: (query) => dispatch(searchVideos(query))
    }
}

export default connect(mSTP, mDTP)(SearchResults);