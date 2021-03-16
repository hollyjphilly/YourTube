import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, rProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'Sign In'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);