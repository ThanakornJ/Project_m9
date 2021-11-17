import db from '../../config/database';

const Comment = db.comment;

const getCommentDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const comments = await Comment.findAll({ where: { exercise_id: content } });

            return resolve(comments);
        } catch (error) {
            return reject(error);
        }
    });
}

const createCommentDB = (content)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const newComment = await Comment.create(content);

            return resolve(newComment);
        }
        catch(error){
            return reject(error);
        }
    });
}

const updateCommentDB = (commentID, content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const updateComment = await Comment.update({ message: content }, { where: { comment_id: commentID } });

            return resolve(updateComment);
        } catch (error) {
            return reject(error);
        }
    });
}

const deleteCommentDB = (commentID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteComment = await Comment.destroy({ where: { comment_id: commentID } });
            
            return resolve(deleteComment);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getCommentDB, createCommentDB, updateCommentDB, deleteCommentDB };