export default function saveCaloriesDayModel(sequelize, Sequelize) {
    const saveCaloriesDay = sequelize.define(
        'saveCaloriesDay',
        {
            saveCaloriesDayID: {
                type: Sequelize.INTEGER(10),
                field: 'save_calories_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            day: {
                type: Sequelize.DATE,
                field: 'day',
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
            tableName: 'save_calories'
        }
    );

    return saveCaloriesDay;
};

