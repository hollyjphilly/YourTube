import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const mSTP = ({ entities }) => {
    return {
        comments: entities.comments
    }
}

export default connect(mSTP)(CommentIndex);