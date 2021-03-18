import { connect } from 'react-redux';
import AccountForm from './account_form';
import { createAccount, login } from '../../actions/session_actions';

const mSTP = (state, rProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'Create account'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(createAccount(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(AccountForm);