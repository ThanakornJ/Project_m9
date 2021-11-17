import path from 'path';
import fs from 'fs';
import util from 'util';
import jwt from 'jsonwebtoken';
import services from '../services';

const readFile = util.promisify(fs.readFile);
const { getAllUserService, createAccountService, updateAccountService, deleteAccountService } = services.account;
const { getOneTypeAccountService } = services.typeAccount;

const getAllUserController = async (req, res) => {
    try {
        const { typeAccountID } = req.user.data;
        const typeAccount = await getOneTypeAccountService(typeAccountID);

        if (typeAccount.typeName !== 'ADMIN') {
            return res.status(403).json({
                message: 'your account cannot reach items.'
            });
        } else {
            const users = await getAllUserService();
            
            return res.status(200).json(users);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const loginBasicController = async (req, res) => {
    if (req.user.error) {
        return res.status(400).json({
            message: req.user.message
        });
    } else {
        try {
            const { accountID, username, typeAccountID } = req.user.data;
            const privateKey = await readFile(path.resolve('./') + '\\src\\config\\key\\primaryKeyUser.key');
            const token = jwt.sign({ accountID, username, typeAccountID }, privateKey, { algorithm: 'RS256', expiresIn: '1d' });

            return res.status(200).json({
                message: req.user.message,
                username: username,
                token: token,
                typeAccountID
            });
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    }
}

const loginJWTController = async (req, res) => {
    try {
        const { accountID, username, typeAccountID } = req.user.data;
        const privateKey = await readFile(path.resolve('./') + '\\src\\config\\key\\primaryKeyUser.key');
        const token = jwt.sign({ accountID, username, typeAccountID }, privateKey, { algorithm: 'RS256', expiresIn: '1d' });

        return res.status(200).json({
            message: req.user.message,
            username: username,
            token: token,
            typeAccountID
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

const createAccountController = async (req, res) => {
    const content = req.body;

    try {
        const newAccount = await createAccountService(content);

        if (newAccount.error) {
            return res.status(400).json({
                message: newAccount.message
            });
        } else {
            return res.status(200).json({
                message: newAccount.message,
                content: newAccount.data
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const updateAccountController = async (req, res) => {
    try {
        const editColumn = req.params.column;
        const content = req.body;
        const { accountID } = req.user.data;

        const updateAccount = await updateAccountService(accountID, editColumn, content);

        if (updateAccount.error) {
            return res.status(400).json({
                message: updateAccount.message
            });
        } else {
            return res.status(200).json(updateAccount);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

const deleteAccountController = async (req, res) => {
    try {
        const { accountID } = req.user.data;
        const deleteAccount = await deleteAccountService(accountID);

        if (deleteAccount.error) {
            return res.status(400).json({
                message: deleteAccount.message
            });
        } else {
            return res.status(200).json(deleteAccount);
        }
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500);
    }
}

export { getAllUserController, loginBasicController, loginJWTController, createAccountController, updateAccountController, deleteAccountController };