export default function foods(sequelize,Sequelize) {
    const foods = sequelize.define(
        'foods',{
            foodID:{
                type:Sequelize.INTEGER(10),
                field:'food_id',
                allowNull:false,
                autoIncrement:true,
                primaryKey:true
            },
            foodName:{
                type:Sequelize.STRING(255),
                field:'food_name',
                allowNull:false
            },
            foodImage:{
                type:Sequelize.TEXT,
                field:'food_image',
                allowNull:false
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
            tableName:'foods'
        }
    );
    
    return foods
}