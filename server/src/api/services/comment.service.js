import helper from '../helpers';
import lodash from 'lodash';
import { isCommentContent, isCommentReplyContent } from '../validations';

const { getCommentDB, createCommentDB, updateCommentDB, deleteCommentDB } = helper.comment;

const getCommentService = async (exerciseID) => {
    try {
        const comments = await getCommentDB(exerciseID);

        return comments;
    } catch (error) {
        throw new Error(error);
    }
}

const createCommentService = async (accountID, content) => {
    try {
        const checkComment = await isCommentContent(content);

        if (checkComment.error) {
            return checkComment;
        } else {
            const newContent = {
                ...content,
                accountID
            }

            const newComment = await createCommentDB(newContent);

            return {
                error: false,
                message: 'post comment message successful',
                content: newComment,
                accountID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const createCommentReplyService = async (accountID, content) => {
    try {
        const checkComment = await isCommentReplyContent(content);

        if (checkComment.error) {
            return checkComment;
        } else {
            const newContent = {
                ...content,
                accountID
            };

            const newComment = await createCommentDB(newContent);

            return {
                error: false,
                message: 'reply to comments successful',
                content: newComment,
                accountID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const updateCommentService = async (commentID, content) => {
    try {
        if (!lodash.isNumber(commentID)) {
            return {
                error: true,
                message: 'comment id not found'
            }
        } else if (lodash.isEmpty(content)) {
            return {
                error: true,
                message: 'Please fill message'
            }
        } else {
            const updateComment = await updateCommentDB(commentID, content);

            return {
                error: false,
                message: 'update your comment successful',
                content: {
                    data: updateComment,
                    message: content
                },
                commentID,
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const deleteCommentService = async (commentID) => {
    try {
        if (!lodash.isNumber(commentID)) {
            return {
                error: true,
                message: 'food id not found'
            }
        } else {
            const deleteComment = await deleteCommentDB(commentID);

            return {
                error: false,
                message: 'delete your comment successful',
                content: deleteComment,
                commentID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { getCommentService, createCommentService, createCommentReplyService, updateCommentService, deleteCommentService }