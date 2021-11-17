import services from "../services";

const { getSaveFoodService, createSaveFoodService, deleteSaveFoodService } = services.saveFood;

const getSaveFoodController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const saveFoods = await getSaveFoodService(accountID);

        return res.status(200).json(saveFoods);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const createSaveFoodController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const content = req.body;

        const newSaveFood = await createSaveFoodService(accountID, content);

        if (newSaveFood.error) {
            return res.status(400).json({
                message: newSaveFood.message
            })
        } else {
            return res.status(200).json(newSaveFood);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteSaveFoodController = async (req, res) => {
    try {
        const saveFoodID = req.params.id;

        const deleteSaveFood = await deleteSaveFoodService(parseInt(saveFoodID));

        if (deleteSaveFood.error) {
            return res.status(400).json({
                message: deleteSaveFood.message
            })
        } else {
            return res.status(200).json(deleteSaveFood);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { getSaveFoodController, createSaveFoodController, deleteSaveFoodController }