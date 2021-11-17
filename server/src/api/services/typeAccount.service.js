import helpers from "../helpers";

const { getOneTypeAccountDB } = helpers.typeAccount;

const getOneTypeAccountService = async (typeAccountID) => {
    try {
        const typeAccount = await getOneTypeAccountDB(typeAccountID);

        return typeAccount;
    } catch (error) {
        throw new Error(error);
    }
}

export { getOneTypeAccountService }