import sequelize from 'sequelize';
import db from '../../config/database';

const Account = db.account;
const { Op } = sequelize;

const getAllUserDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const user = await Account.findAll();

            return resolve(user);
        } catch (error) {
            return reject(error);
        }
    });
}

const getUserDetailDB = (content, column = 'account_id') => {
    return new Promise( async (resolve, reject) => {
        try {
            const user = await Account.findOne({ where: { [column]: content } });

            return resolve(user);
        } catch (error) {
            return reject(error);
        }
    });
}

const getUserOREmailAccountDB = (username, email) => {
    return new Promise( async (resolve, reject) => {
        try {
            const checkAccount = await Account.findOne({ where: { [Op.or]: [{ username: username }, { email: email }]  } });
            
            return resolve(checkAccount);
        } catch (error) {
            return reject(error);
        }
    });
}

const createUserAccountDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const newAccount = await Account.create(content);

            return resolve(newAccount);
        } catch (error) {
            return reject(error);
        }
    });
}


const updateAccountDB = (accountID, content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const updateAccount = await Account.update(content, { where: { account_id: accountID } });

            return resolve(updateAccount);
        } catch (error) {
            return reject(error);
        }
    });
}

const deleteUserAccountDB = async (accountID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const deleteAccount = await Account.destroy({ where: { account_id: accountID } });

            return resolve(deleteAccount);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getAllUserDB, getUserDetailDB, getUserOREmailAccountDB, createUserAccountDB, updateAccountDB, deleteUserAccountDB };