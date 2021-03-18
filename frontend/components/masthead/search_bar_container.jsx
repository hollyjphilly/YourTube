import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { search } from '../../actions/session_actions';

const mDTP = (dispatch) => {
    return {
        // search: () => dispatch(search())
    }
}

export default connect(null, mDTP)(SearchBar);