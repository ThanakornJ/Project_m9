import services from "../services";

const { getCalorieTargetUserService,deleteCalorieTargetUserService } = services.calories;

const getCalorieTargetUserController = async (req,res)=>{
    try {
        const calorieTargetUser = await getCalorieTargetUserService();
        return res.status(200).json(calorieTargetUser);
    }
    catch (error){
        console.log(error.message);
        return res.sendStatus(500)
    }
}

const deleteCalorieTargetUserController = async (req, res) => {
    
    try {
            const calorieTargetID = req.params.id;
            const deletecalorieTarget = await deleteCalorieTargetUserService(parseInt(calorieTargetID));
            if (deletecalorieTarget.error) {
                return res.status(400).json({
                    message: deletecalorieTarget.message
                });
            } else {
                return res.status(200).json(deletecalorieTarget);
            }
        
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}
export { getCalorieTargetUserController ,deleteCalorieTargetUserController}