import helpers from "../helpers";
import lodash from 'lodash';


const { getCalorieTargetExDB, deleteCaloriesTargetExDB } =helpers.caloriesTarget;

const getCalorieTargetUserService = async (accountID)=>{
    try{
        const calorieTargetUser = await getCalorieTargetExDB(accountID);
        return calorieTargetUser;
    }
    catch (error){
        throw new Error(error)
    }

}
const deleteCalorieTargetUserService = async (calorieTargetID)=>{
    try {
        if (!lodash.isNumber(calorieTargetID)) {
            return {
                error: true,
                message: 'calorieTargetID id not found'
            }
        } else {
            const deletecalorieTarget = await deleteCaloriesTargetExDB(calorieTargetID);
            return {
                error: false,
                message: 'delete exercise successful',
                content: deletecalorieTarget,
                calorieTargetID: calorieTargetID,
                
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}
export { getCalorieTargetUserService,deleteCalorieTargetUserService }
