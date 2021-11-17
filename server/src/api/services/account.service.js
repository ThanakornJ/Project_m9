import lodash from 'lodash';
import bcrypt from 'bcrypt';
import validator from 'validator';
import helpers from "../helpers";
import { isPassword } from '../validations';

const { getAllUserDB, getUserDetailDB, getUserOREmailAccountDB, createUserAccountDB, updateAccountDB, deleteUserAccountDB } = helpers.accounts;
const saltRounds = 10;

const getAllUserService = async () => {
    try {
        const users = await getAllUserDB();

        return users;
    } catch (error) {
        throw new Error(error);
    }
}

const loginBasicService = async (username, password) => {
   try {
       const account = await getUserDetailDB(username, 'username');
       if (account === null) {
           return {
               error: true,
               message: 'Wrong username or password'
           }
       }
       const checkPassword = await bcrypt.compare(password, account.password);

       if (lodash.isEmpty(account) || !checkPassword) {
            return {
                error: true,
                message: 'Wrong username or password'
            }
       } else {
            return {
                error: false,
                message: 'sign in successful',
                data: {
                    accountID: account.accountID,
                    username: account.username,
                    typeAccountID: account.typeAccountID
                }
            }
       }
   } catch (error) {
       throw new Error(error);
   }
}

const loginJWTService = async (payload) => {
    try {
        const { accountID } = payload;
        const account = await getUserDetailDB(accountID);

        return {
            error: false,
            message: 'check user successful',
            data: {
                accountID: account.accountID,
                username: account.username,
                typeAccountID: account.typeAccountID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const createAccountService = async (content) => {
    const { username, email, password } = content;

    if (lodash.isEmpty(username) || lodash.isEmpty(email) || lodash.isEmpty(password)) {
        return {
            error: true,
            message: 'Please fill all data'
        }
    } else if (!validator.isEmail(email)) {
        return {
            error: true,
            message: 'Email is not valid'
        }
    } else if (!isPassword(password)) {
        return {
            error: true,
            message: 'Error password'
        }
    } else {
        try {
            const checkUsernameOrEmail = await getUserOREmailAccountDB(username, email);

            if (!lodash.isEmpty(checkUsernameOrEmail)) {
                if (checkUsernameOrEmail.username === username) {
                    return {
                        error: true,
                        message: 'Username is already use.'
                    }
                } else {
                    return {
                        error: true,
                        message: 'Email is already use'
                    }
                }
            } else {
                const salt = await bcrypt.genSalt(saltRounds);
                const hash = await bcrypt.hash(password, salt);
                content.password = hash;
                const newContent = { ...content, typeAccountID: 2 };
                const newAccount = await createUserAccountDB(newContent);

                return {
                    error: false,
                    message: 'created your account successful',
                    data: newAccount
                }
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}

const updateAccountService = async (accountID, editColumn, content) => {
    try {
        if (editColumn === 'username' && !lodash.isEmpty(content[editColumn])) {
            const checkAccount = await getUserDetailDB(content[editColumn], editColumn);

            if (checkAccount !== null) {
                return {
                    error: true,
                    message: 'Username is already use.'
                }
            } else {
                const updateAccount = await updateAccountDB(accountID, content);

                return {
                    error: false,
                    message: 'update your account successful',
                    data: updateAccount[0],
                    content: content[editColumn]
                }
            }
        } else if (editColumn === 'email' && !lodash.isEmpty(content[editColumn])) {
            const checkAccount = await getUserDetailDB(content[editColumn], editColumn);

            if (checkAccount !== null) {
                return {
                    error: true,
                    message: 'Email is already use.'
                }
            } else {
                const updateAccount = await updateAccountDB(accountID, content);

                return {
                    error: false,
                    message: 'update your account successful',
                    data: updateAccount[0],
                    content: content[editColumn]
                }
            }
        } else if (editColumn === 'password') {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(content[editColumn], salt);
            content[editColumn] = hash;

            const updateAccount = await updateAccountDB(accountID, content);

            return {
                error: false,
                message: 'update your account successful',
                data: updateAccount,
                content: content[editColumn]
            }
        } else {
            return {
                error: true,
                message: 'An error occurred updating data, column not found or data is empty'
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAccountService = async (accountID) => {
    try {
        if (!lodash.isNumber(accountID)) {
            return {
                error: true,
                message: 'account id not found'
            }
        } else {
            const deleteAccount = await deleteUserAccountDB(accountID);

            return {
                error: false,
                message: 'delete your account successful',
                data: deleteAccount
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { getAllUserService, loginBasicService, loginJWTService, createAccountService, updateAccountService, deleteAccountService };