import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter } from 'react-router-dom';

const mSTP = (state, rProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}

export default connect(mSTP, null)(Feed);