import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment,
         updateComment,
        deleteComment } from '../../actions/comment_actions';

const mSTP = ({ entities, session }, rProps) => {
    return {
        user: entities.users[session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        createComment: (comment, userId) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentForm);