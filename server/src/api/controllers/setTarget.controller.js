import services from "../services";

const { getTargetAccountService, getDetailTargetService, crateTargetService, updateTargetService, deleteTargetService } = services.target;

const getTargetAccountController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const getTargetAccount = await getTargetAccountService(accountID);

        return res.status(200).json(getTargetAccount);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

const createSetTargetController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const content = req.body;

        const newTarget = await crateTargetService(accountID, content);

        if (newTarget.error) {
            return res.status(400).json({
                message: newTarget.message
            });
        } else {
            return res.status(200).json(newTarget);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteTargetController = async (req, res) => {
    try {
        const targetID = req.params.id;

        const deleteTarget = await deleteTargetService(parseInt(targetID));

        if (deleteTarget.error) {
            return res.status(200).json({
                message: deleteTarget.message
            });
        } else {
            return res.status(200).json(deleteTarget);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { getTargetAccountController, createSetTargetController, deleteTargetController }