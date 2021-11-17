import services from "../services";

const { getExerciseService, createExerciseService, updateExerciseService, deleteExerciseService } = services.exercise;
const { getOneTypeAccountService } = services.typeAccount;

const showExerciseController = async (req,res)=>{
    try {
        const exercises = await getExerciseService();

        return res.status(200).json(exercises);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const createExerciseController = async (req, res) => {
    try {
        const { typeAccountID } = req.user.data;
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(400).json({
                message: 'your account cannot add items.'
            });
        } else {
            const content = req.body;
            const newExercise = await createExerciseService(content);

            if (newExercise.error) {
                return res.status(400).json({
                    message: newExercise.message
                });
            } else {
                return res.status(200).json(newExercise);
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteExerciseController = async (req, res) => {
    try {
        const { typeAccountID } = req.user.data;
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(400).json({
                message: 'your account cannot delete items.'
            });
        } else {
            const exerciseID = req.query.id;
            const deleteExercise = await deleteExerciseService(parseInt(exerciseID));

            if (deleteExercise.error) {
                return res.status(400).json({
                    message: deleteExercise.message
                });
            } else {
                return res.status(200).json(deleteExercise);
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { showExerciseController, createExerciseController, deleteExerciseController }
