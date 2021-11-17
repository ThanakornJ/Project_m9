import helpers from "../helpers";
import { isSaveFoodContent } from '../validations';
import lodash from 'lodash';

const { getSaveFoodDB, createSaveFoodDB, deleteSaveFoodDB } = helpers.saveFood;

const getSaveFoodService = async (accountID) => {
    try {
        const saveFoods = await getSaveFoodDB(accountID);

        return saveFoods;
    } catch (error) {
        throw new Error(error);
    }
}

const createSaveFoodService = async (accountID, content) => {
    try {
        const check = await isSaveFoodContent(content);

        if (check.error) {
            return {
                error: true,
                message: check.message
            }
        } else {
            const newContent = {
                ...content,
                accountID
            }

            const newSaveFood = await createSaveFoodDB(newContent);

            return {
                error: false,
                message: 'save menu food successful',
                content: newContent
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const deleteSaveFoodService = async (saveFoodID) => {
    try {
        if (!lodash.isNumber(saveFoodID)) {
            return {
                error: true,
                message: 'save food id not fround'
            }
        } else {
            const deleteSaveFood = await deleteSaveFoodDB(saveFoodID);

            return {
                error: false,
                message: 'delete save food successful',
                content: deleteSaveFood,
                saveFoodID
            };
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { getSaveFoodService, createSaveFoodService, deleteSaveFoodService };