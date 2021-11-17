export default function caloriesFoodModel(sequelize, Sequelize) {
    const caloriesFood = sequelize.define(
        'caloriesFoods',
        {
            caloriesFoodID: {
                type: Sequelize.INTEGER(10),
                field: 'calories_food_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            caloriesTotal: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'calories_total',
                allowNull: false
            },
            creteAt: {
                type: Sequelize.DATE,
                field: 'create_at',
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            },
            updateAt: {
                type: Sequelize.DATE,
                field: 'update_at',
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            }
        },
        {
            tableName: 'calories_foods'
        }
    );

    return caloriesFood;
}