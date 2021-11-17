export default function ingredientsModel(sequelize, Sequelize) {
    const ingredient = sequelize.define(
        'ingredients',
        {
            ingredientID: {
                type: Sequelize.INTEGER(10),
                field: 'ingredient_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            ingredientName: {
                type: Sequelize.STRING(100),
                field: 'ingredient_name',
                allowNull: false
            },
            quantityGram: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'quantity_gram',
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
            tableName: 'ingredients'
        }
    );

    return ingredient;
}