export default function typeAccountModel(sequelize, Sequelize) {
    const typeAccount = sequelize.define(
        'typeAccount',
        {
            typeAccountID: {
                type: Sequelize.INTEGER(10),
                field: 'type_account_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            typeName: {
                type: Sequelize.STRING(50),
                field: 'type_name',
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
            tableName: 'type_accounts'
        }
    );

    return typeAccount;
}