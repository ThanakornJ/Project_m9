export default function saveCal(sequelize, Sequelize) {
    const saveCal = sequelize.define(
        'saveCal',
        {
            saveCaloriesDayID: {
                type: Sequelize.INTEGER(10),
                field: 'save_cal_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            allCal: {
                type: Sequelize.INTEGER(4),
                field: "all_cal",
                allowNull: false,
            },
            day: {
                type: Sequelize.DATEONLY,
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
            tableName: 'save_cal'
        }
    );

    return saveCal;
};

