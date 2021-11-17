import services from "../services";

const { getAllFoodService, getFoodAndIngredientsService, createFoodService, updateFoodService, deleteFoodService } = services.food;
const { getOneTypeAccountService } = services.typeAccount;

const getAllFoodController = async (req, res) => {
    try {
        const foods = await getAllFoodService();

        return res.status(200).json(foods);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const getFoodsAndIngredientsController = async (req, res) => {
    try {
        const foods = await getFoodAndIngredientsService();

        return res.status(200).json(foods);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const createFoodController = async (req, res) => {
    const { typeAccountID } = req.user.data;
    try {
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(403).json({
                message: 'your account cannot add items.'
            });
        } else {
            const content = req.body;
            console.log(content);
            const newFood = await createFoodService(content);

            if (newFood.error) {
                return res.status(400).json({
                    message: newFood.message
                });
            } else {
                return res.status(200).json({
                    message: 'add new food successful',
                    content: newFood.data
                });
            }
        }
    } catch (error) {
       console.log(error.message);
       return res.sendStatus(500); 
    }
}

const updateFoodController = async (req, res) => {
    try {
        const { typeAccountID } = req.user.data;
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(403).json({
                message: 'your account cannot edit items.'
            });
        } else {
            const content = req.body;
            const editColumn = req.params.column;
            const foodID = req.query.id;

            const updateFood = await updateFoodService(foodID, editColumn, content);

            if (updateFood.error) {
                return res.status(400).json({
                    message: updateFood.message
                });
            } else {
                return res.status(200).json(updateFood);
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteFoodController = async (req, res) => {
    try {
        const { typeAccountID } = req.user.data;
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(403).json({
                message: 'your account cannot delete items.'
            });
        } else {
            const foodID = req.query.id;
            const deleteFood = await deleteFoodService(parseInt(foodID));

            if (deleteFood.error) {
                return res.status(400).json({
                    message: deleteFood.message
                });
            } else {
                return res.status(200).json(deleteFood);
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { getAllFoodController, getFoodsAndIngredientsController, createFoodController, updateFoodController, deleteFoodController };