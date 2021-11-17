export default function commentModel(sequelize,Sequelize) {
    const exercise = sequelize.define(
        'comments',
        {
            commentID:{
                type: Sequelize.INTEGER(10),
                field:'comment_id',
                allowNull:false,
                autoIncrement:true,
                primaryKey:true
            },
            message:{
                type:Sequelize.STRING(100),
                field:'message',
                allowNull:false,
            },
            commentIDReply: {
                type: Sequelize.INTEGER(10),
                field: 'comment_id_reply',
                allowNull: false,
                defaultValue: 0
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
            tableName:'comments'
        }
    );

    
    return exercise
    
}