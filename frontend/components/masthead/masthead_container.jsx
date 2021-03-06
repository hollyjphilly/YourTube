import { connect } from 'react-redux';
import Masthead from './masthead';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }, rProps) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mSTP, mDTP)(Masthead));