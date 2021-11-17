import { Sequelize } from 'sequelize';
import models from '../api/models';
import config from './configDB';

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: config.pool,
    define: {
        timestamps: false,
    },
    logging: false
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(models).forEach((item) => {
    db[item.replace('Model', '')] = models[item](sequelize, Sequelize); 
});

db.typeAccount.hasOne(db.account, { foreignKey: { name: 'typeAccountID', field: 'type_account_id' } });
db.account.belongsTo(db.typeAccount, { foreignKey: { name: 'typeAccountID', field: 'type_account_id' } });
db.foods.hasMany(db.ingredient, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.foods.hasOne(db.caloriesFood, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.ingredient.belongsTo(db.foods, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.caloriesFood.belongsTo(db.foods, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.ingredientTypes.hasOne(db.ingredient, { foreignKey: { name: 'ingredientTypeID', field: 'ingredient_type_id' } });
db.ingredient.belongsTo(db.ingredientTypes, { foreignKey: { name: 'ingredientTypeID', field: 'ingredient_type_id' } });
db.account.hasMany(db.setTarget, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.setTarget.belongsTo(db.account, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.setTarget.hasOne(db.caloriesTarget, { foreignKey: { name: 'targetID', field: 'target_id' } });
db.caloriesTarget.belongsTo(db.setTarget, { foreignKey: { name: 'targetID', field: 'target_id' } });
db.account.hasMany(db.comment, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.exercise.hasMany(db.comment, { foreignKey: { name: 'exerciseID', field: 'exercise_id' } })
db.comment.belongsTo(db.account, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.comment.belongsTo(db.exercise, { foreignKey: { name: 'exerciseID', field: 'exercise_id' } });
db.account.hasMany(db.saveFood, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.saveFood.belongsTo(db.account, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.account.hasMany(db.saveExercise, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.saveExercise.belongsTo(db.account, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.foods.hasOne(db.saveFood, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.saveFood.belongsTo(db.foods, { foreignKey: { name: 'foodID', field: 'food_id' } });
db.exercise.hasOne(db.saveExercise, { foreignKey: { name: 'exerciseID', field: 'exercise_id' } });
db.saveExercise.belongsTo(db.exercise, { foreignKey: { name: 'exerciseID', field: 'exercise_id' } });
db.account.hasMany(db.saveCal, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.saveCal.belongsTo(db.account, { foreignKey: { name: 'accountID', field: 'account_id' } });
db.saveFood.hasMany(db.saveCal, { foreignKey: { name: 'saveFoodID', field: 'save_food_id' } });
db.saveCal.belongsTo(db.saveFood, { foreignKey: { name: 'saveFoodID', field: 'save_food_id' } });
db.saveExercise.hasMany(db.saveCal, { foreignKey: { name: 'saveExerciseID', field: 'save_exercise_id' } });
db.saveCal.belongsTo(db.saveExercise, { foreignKey: { name: 'saveExerciseID', field: 'save_exercise_id' } });


export default db;