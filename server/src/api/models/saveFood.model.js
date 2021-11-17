export default function saveFoodModel(sequelize, Sequelize) {
    const saveFoods = sequelize.define(
        'saveFood',
        {
            saveFoodID: {
                type: Sequelize.INTEGER(10),
                field: 'save_food_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            creteAt: {
                type: Sequelize.DATE,
                field: "create_at",
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updateAt: {
                type: Sequelize.DATE,
                field: "update_at",
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            }
        },
        {
            tableName: 'save_food'
        }
    );

    return saveFoods;
}