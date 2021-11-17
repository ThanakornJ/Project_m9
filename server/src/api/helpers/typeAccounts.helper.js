import db from '../../config/database';

const TypeAccount = db.typeAccount;

const getTypeAccountDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const typeAccount = await TypeAccount.findAll();

            return resolve(typeAccount);
        } catch (error) {
            return reject(error);
        }
    });
}

const getOneTypeAccountDB = (typeAccountID) => {
    return new Promise( async (resolve, reject) => {
        try {
            const typeAccount = await TypeAccount.findOne({ where: { type_account_id: typeAccountID } });

            return resolve(typeAccount);
        } catch (error) {
            return reject(error);
        }
    });
}

const createTypeAccountDB = () => {
    return new Promise((resolve, reject) => {

    });
}

const updateTypeAccountDB = () => {
    return new Promise((resolve, reject) => {

    });
}

const deleteTypeAccountDB = () => {
    return new Promise((resolve, reject) => {

    });
}

export { getTypeAccountDB, getOneTypeAccountDB, createTypeAccountDB, updateTypeAccountDB, deleteTypeAccountDB };