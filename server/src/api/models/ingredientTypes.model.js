export default function ingredientTypesModel(sequelize, Sequelize) {
    const ingredientType = sequelize.define(
        'ingredientTypes',
        {
            ingredientTypeID: {
                type: Sequelize.INTEGER(10),
                field: 'ingredient_type_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            ingredientTypeName: {
                type: Sequelize.STRING(50),
                field: 'ingredient_type_name',
                allowNull: false
            },
            ingredientPerGram: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'ingredient_per_gram',
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
            tableName: 'ingredient_types'
        }
    );

    return ingredientType;
}