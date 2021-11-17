import db from '../../config/database';

const Ingredients = db.ingredient;

const getIngredientsFoodMenuDB = (id) => {
    return new Promise( async (resolve, reject) => {
        try {
            const ingredientsFood = await Ingredients.findAll({ where: { food_id: id } });

            return resolve(ingredientsFood);
        } catch (error) {
            return reject(error);
        }
    });
}

const createIngredientDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const newIngredient = await Ingredients.create(content);
            
            return resolve(newIngredient);
        } catch (error) {
            return reject(error);
        }
    });
}

const updateIngredientFoodDB = (IngredientID, content) => {
    return new Promise( async (resolve, reject) => {

    });
}

const deleteIngredientFoodDB = (IngredientID) => {
    return new Promise( async (resolve, reject) => {

    });
}

export { getIngredientsFoodMenuDB, createIngredientDB, updateIngredientFoodDB, deleteIngredientFoodDB };