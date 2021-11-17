export default function accountModel(sequelize, Sequelize) {
    const account = sequelize.define(
        'accounts',
        {
            accountID: {
                type: Sequelize.INTEGER(10),
                field: 'account_id',
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: Sequelize.STRING(100),
                field: 'username',
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                field: 'email',
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                field: 'password',
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
            tableName: 'accounts'
        }
    );

    return account;
}