import lodash from 'lodash';
import helpers from '../helpers';
import { isFoodContent, isIngredientsFoodContent } from '../validations';

const { getFoodDB, crateFoodDB, updateFoodDB, deleteFoodDB } = helpers.foods;
const { getIngredientsFoodMenuDB, createIngredientDB } = helpers.ingredients;
const { getOneIngredientTypeDB } = helpers.ingredientTypes;
const { createCaloriesFoodDB } = helpers.caloriesFoods;

const getAllFoodService = async () => {
    try {
        const foods = await getFoodDB();

        return foods;
    } catch (error) {
        throw new Error(error);
    }
}
 
const getFoodAndIngredientsService = async () => {
    try {
        const foods = await getFoodDB();
        
        if (foods.length === 0) {
            return foods;
        } else {
            const newFoods = Promise.all(foods.map( async (menu) => {
                try {
                    const ingredientFood = await getIngredientsFoodMenuDB(menu.foodID);
                    return {
                        ...menu.dataValues,
                        ingredients: ingredientFood
                    }
                } catch (error) {
                    console.log(error);
                }
            })); 

            return await newFoods;
        }
    } catch (error) {
        throw new Error(error);
    }
}

const createFoodService = async (content) => {
    const { food, ingredients } = content;
    const checkFoodContent = await isFoodContent(food);

    if (checkFoodContent.error) {
        return checkFoodContent;
    } else {
        try {
            const newFood = await crateFoodDB(food);
            const checkIngredientFContent = await isIngredientsFoodContent(ingredients);

            if (checkIngredientFContent.error) {
                return {
                    error: true,
                    message: 'Incorrect ingredient information'
                }
            } else {
                const foodID = newFood.foodID;
                const newIngredientContent = ingredients.map((item) => {
                    return { ...item, foodID: foodID }
                });

                const newIngredient = Promise.all(newIngredientContent.map( async (item) => {
                    try {
                        const createIngredient = await createIngredientDB(item);

                        return {
                            error: false,
                            data: createIngredient
                        }
                    } catch (error) {
                        return {
                            error: true,
                        }
                    }
                }));

                const ingredientFood = await newIngredient;
                const foodCalorieTotal = Promise.all(ingredientFood.map( async (item) => {
                    const { data } = item;
                    const ingredientType = await getOneIngredientTypeDB(data.ingredientTypeID);
                    return { pre: parseFloat(data.quantityGram) * parseFloat(ingredientType.ingredientPerGram) };
                }));
                const foodArray = await foodCalorieTotal;
                const result = foodArray.reduce((pre, val) => {
                    return pre + parseFloat(val.pre);
                }, 0);

                const caloriesData = {
                    caloriesTotal: result,
                    foodID: foodID
                }

                const newCaloriesFood = await createCaloriesFoodDB(caloriesData);

                return {
                   error: false,
                   data: {
                       food: newFood,
                       ingredients: ingredientFood,
                       calorieFood: newCaloriesFood
                   } 
                }
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}

const updateFoodService = async (foodID, editColumn, content) => {
    try {
        if ((editColumn === 'foodName' || editColumn === 'foodImage') && !lodash.isEmpty(content[editColumn])) {
            const updateFood = await updateFoodDB(foodID, content);

            return {
                error: false,
                message: 'update food successful',
                data: updateFood,
                foodID: foodID,
                content: content[editColumn]
            }
        } else {
            return {
                error: true,
                message: 'An error occurred updating data, column not found or data is empty'
            }
        }
    } catch (error) {
        
    }
}

const  deleteFoodService = async (foodID) => {
    try {
        if (!lodash.isNumber(foodID)) {
            return {
                error: true,
                message: 'food id not found'
            }
        } else {
            const deleteFood = await deleteFoodDB(foodID);

            return {
                error: false,
                message: 'deleted food successful',
                content: deleteFood,
                foodID: foodID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { getAllFoodService, getFoodAndIngredientsService, createFoodService, updateFoodService, deleteFoodService };