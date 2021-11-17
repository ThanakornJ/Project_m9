import db from '../../config/database';

const Foods = db.foods;

const getFoodDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const foods = await Foods.findAll();
            return resolve(foods);
        } catch (error) {
            return reject(error);
        }
    });
}

const crateFoodDB = (content)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const newFood = await Foods.create(content);
            return resolve(newFood);
        }
        catch(error){
            return reject(error);
        }
    });
}

const updateFoodDB = (foodID, content) =>{
    return new Promise(async (resolve, reject) => {
        try {
            const updateFood = await Foods.update(content, { where: { food_id: foodID } });

            return resolve(updateFood);
        } catch (error) {
            return reject(error);
        }
    });
}

const deleteFoodDB = (foodID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const deleteFood = await Foods.destroy({ where: { food_id: foodID } });

            return resolve(deleteFood);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getFoodDB, crateFoodDB, updateFoodDB, deleteFoodDB };