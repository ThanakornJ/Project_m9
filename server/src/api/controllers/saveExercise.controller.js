import services from "../services";
const {createSaveExerciseService,getSaveExerciseService, deleteSaveExerciseService} = services.saveExercise;

const getSaveExerciseController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const getTargetAccount = await getSaveExerciseService(accountID);

        return res.status(200).json(getTargetAccount);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
const createSaveExerciseController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const content = req.body;
        
        const newSaveExercise = await createSaveExerciseService(accountID, content);

        if (newSaveExercise.error) {
            return res.status(400).json({
                message: newSaveExercise.message
            });
        } else {
            return res.status(200).json(newSaveExercise);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteSaveExerciseController = async (req, res) => {
    try {
        const saveExerciseID = req.params.id;
           console.log(saveExerciseID);
        const deleteSaveExercise = await deleteSaveExerciseService(parseInt(saveExerciseID));
        
        if (deleteSaveExercise.error) {
            return res.status(400).json({
                message: deleteSaveExercise.message
            });
        } else {
            return res.status(200).json(deleteSaveExercise);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export {createSaveExerciseController,getSaveExerciseController, deleteSaveExerciseController };