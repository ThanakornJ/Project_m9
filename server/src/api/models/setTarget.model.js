export default function setTargetModel(sequelize, Sequelize) {
    const Target = sequelize.define(
        'target',
        {
            targetID: {
                type: Sequelize.INTEGER(10),
                field: 'target_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            weight: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'weight',
                allowNull: false,
            },
            height: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'height',
                allowNull: false,
            },
            age: {
                type: Sequelize.INTEGER(3),
                field: 'age',
                allowNull: false,

            },
            gender: {
                type: Sequelize.STRING(10),
                field: 'gender',
                allowNull: false,
            },
            lostWeight: {
                type: Sequelize.DECIMAL(10, 2),
                field: 'lost_weight',
                allowNull: false,

            },
            lostWeightMonth:{
                type: Sequelize.DECIMAL(10, 2),
                field: 'lost_weight_month',
                allowNull: false,
            },
            liftStyle:{
                type: Sequelize.DECIMAL(10, 2),
                field: 'lift_style',
                allowNull: false,
            }
         ,
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
            tableName: 'set_target'
        }
    );

    
    return Target
}