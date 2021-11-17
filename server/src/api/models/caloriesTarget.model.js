export default function caloriesTargetModel(sequelize,Sequelize){
    const caloriesTarget = sequelize.define(
        'calorieTarget',
        {
            calorieTargetID:{
                type: Sequelize.INTEGER(10),
                field:'calories_target__id',
                allowNull:false,
                autoIncrement:true,
                primaryKey:true
            },
            calorieBMR:{
                type:Sequelize.DECIMAL(10, 2),
                field:'calories_bmr',
                allowNull:false,
            },
            calorieTDEE:{
                type:Sequelize.DECIMAL(10, 2),
                field:'calories_tdee',
                allowNull:false,
            },
            calorieDEIT:{
                type:Sequelize.DECIMAL(10, 2),
                field:'calories_diet',
                allowNull:false,
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
            tableName:'calories_target'
        }
    );

    return caloriesTarget
}