import lodash from 'lodash';
import helpers from '../helpers';
import { isTargetContent } from '../validations';

const { getTargetDB, getTargetExDB, createSetTargetDB, updateSetTargetDB, deleteSetTargetDB } = helpers.target;
const { createCaloriesTargetExDB, deleteCaloriesTargetExDB } = helpers.caloriesTarget;

const calculateBMR = (data) => {
    return new Promise((resolve, reject) => {
        const { targetID, weight, height, age, gender } = data;

        if (gender === 'male') {
            const calculate = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            return resolve(calculate);
        } else {
            const calculate = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            return resolve(calculate);
        }
    });
}

const calculateTDEE = (BMR, PAL) => {
    return new Promise((resolve) => {
        const calculate = BMR * PAL;

        return resolve(calculate);
    });
}

const calculateDEIT = (TDEE, lostWeightMonth) => {
    return new Promise((resolve) => {
        const calculateCaloriesMouth = lostWeightMonth * 7700;
        const calculateCaloriesDay = calculateCaloriesMouth / 30;
        const DEIT = TDEE - calculateCaloriesDay;

        return resolve(DEIT);
    });
}

const getTargetAccountService = async (accountID) => {
    try {
        const targets = await getTargetDB(accountID);

        return targets;
    } catch (error) {
        throw new Error(error);
    }
}

const getDetailTargetService = async () => {
    
}

const crateTargetService = async (accountID, content) => {
    try {
        const checkContent = await isTargetContent(content);

        if (checkContent.error) {
            return checkContent;
        } else {
            const newContent = {
                ...content,
                accountID
            }
            const newTarget = await createSetTargetDB(newContent);
            const BMR = await calculateBMR(newTarget);
            const TEDD = await calculateTDEE(BMR, newTarget.liftStyle);
            const DEIT = await calculateDEIT(TEDD, newTarget.lostWeightMonth);
            const newCaloriesTargetContent = {
                calorieBMR: BMR,
                calorieTDEE: TEDD,
                calorieDEIT: DEIT,
                targetID: newTarget.targetID 
            }
            const newCaloriesTarget = await createCaloriesTargetExDB(newCaloriesTargetContent);

            return {
                error: false,
                message: 'create new target successful',
                content: {
                    target: newTarget,
                    caloriesTarget: newCaloriesTarget
                }
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

const updateTargetService = async (targetID, editColumn, content) => {
    try {
        
    } catch (error) {
        throw new Error(error);
    }
}

const deleteTargetService = async (targetID) => {
    try {
        if (!lodash.isNumber(targetID)) {
            return {
                error: true,
                message: 'target id not found'
            }
        } else {
            const deleteTarget = await deleteSetTargetDB(targetID);
            const deleteCaloriesTarget = await deleteCaloriesTargetExDB(targetID);

            return {
                error: false,
                message: 'delete target successful',
                content: {
                    target: deleteTarget,
                    caloriesTarget: deleteCaloriesTarget
                },
                targetID
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

export { getTargetAccountService, getDetailTargetService, crateTargetService, updateTargetService, deleteTargetService }