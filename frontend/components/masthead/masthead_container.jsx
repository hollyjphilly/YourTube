import { connect } from 'react-redux';
import Masthead from './masthead';

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

export default connect(mSTP, mDTP)(Masthead);