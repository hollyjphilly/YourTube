// import { connect } from 'react-redux';
// import AccountForm from './account_form';
// import { editAccount } from '../../actions/session_actions';

// const mSTP = (state, rProps) => {
//     return {
//         currentUser: state.entities.users[state.session.id],
//         errors: state.errors.session,
//         formType: 'Save changes'
//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         processForm: (user) => dispatch(editAccount(user))
//  // editAccount action in session_actions has not been created yet
//     }
// }

// export default connect(mSTP, mDTP)(AccountForm);