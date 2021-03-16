import { connect } from 'react-redux';
import AccountForm from './account_form';
import { createAccount } from '../../actions/session_actions';

const mSTP = (state, rProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'Create account'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(createAccount(user))
    }
}

export default connect(mSTP, mDTP)(AccountForm);