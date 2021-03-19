import { connect } from 'react-redux';
import Modal from './modal';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }, rProps) => {
    return {
        currentUser: entities.users[session.id]
    }
}

export default withRouter(connect(mSTP, null)(Modal));