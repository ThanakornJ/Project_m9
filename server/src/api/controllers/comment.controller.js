import services from "../services";

const { getCommentService, createCommentService, createCommentReplyService, updateCommentService, deleteCommentService } = services.comment;

const getCommentController = async (req, res) => {
    try {
        const exerciseID = req.params.id;
        const comments = await getCommentService(exerciseID);

        return res.status(200).json(comments);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const crateCommentController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const content = req.body;

        const newComment = await createCommentService(accountID, content);

        if (newComment.error) {
            return res.status(400).json({
                message: newComment.message
            });   
        } else {
            return res.status(200).json(newComment);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const createCommentReplyController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const content = req.body;

        const newComment = await createCommentReplyService(accountID, content);

        if (newComment.error) {
            return res.status(400).json({
                message: newComment.message
            })
        } else {
            return res.status(200).json(newComment);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const updateCommentController = async (req, res) => {
    try {
        const commentID = req.params.id;
        const content = req.body.message;

        const updateComment = await updateCommentService(parseInt(commentID), content);

        if (updateComment.error) {
            return res.status(400).json({
                message: updateComment.message
            });
        } else {
            return res.status(200).json(updateComment);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteCommentController = async (req, res) => {
    try {
        const commentID = req.params.id;
        const deleteComment = await deleteCommentService(parseInt(commentID));

        if (deleteComment.error) {
            return res.status(400).json({
                message: deleteComment.message
            })
        } else {
            return res.status(200).json(deleteComment);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { getCommentController, crateCommentController, createCommentReplyController, updateCommentController, deleteCommentController }