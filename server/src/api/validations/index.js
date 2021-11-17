import lodash from 'lodash';

const isPassword = async (password) => {
    if (!lodash.isEmpty(password)) {
        const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_-])[A-Za-z\d!_-]{8,}$/g;
        return check.test(password);
    } else {
        return false;
    }
}

const isFoodContent = async (content) => {
    return new Promise((resolve, reject) => {
        const { foodName, foodImage } = content;

        if (lodash.isEmpty(foodName) || lodash.isNumber(foodName)) {
            return resolve({ error: true, message: 'Please fill food name' });
        } else if (lodash.isEmpty(foodImage) || lodash.isNumber(foodImage)) {
            return resolve({ error: true, message: 'Please fill food image' });
        } else {
            return resolve({ error: false });
        }
    });
}

const isIngredientsFoodContent = (content) => {
    return new Promise((resolve, reject) => {
        if (lodash.isArray(content)) {
            const data = content.map((item) => {
                return {
                    ingredientName: item.ingredientName,
                    quantityGram: parseFloat(item.quantityGram),
                    ingredientTypeID: parseInt(item.ingredientTypeID)
                }
            })

            const check = data.map((item) => {
                if (lodash.isEmpty(item.ingredientName) || lodash.isNumber(item.quantityGram) || lodash.isNumber(item.ingredientTypeID)) {
                    return { error: true }
                } else {
                    return { error: false }
                }
            });

            let error = 0;
            check.forEach((val) => {
                if (val.error) {
                    error += 1;
                }
            });

            const result = error === 0;
            return resolve({ error: result });
        } else {
            return resolve({ error: true, message: 'inputs data only array' });
        }
    });
}

const isExerciseContent = (content) => {
    return new Promise((resolve, reject) => {
        const { exerciseName, exerciseCalories, amount, description, set, video, img } = content;
        if (lodash.isEmpty(exerciseName)) {
            return resolve({ error: true, message: 'Please fill exercise name' });
        } else if (!lodash.isNumber(exerciseCalories)) {
            return resolve({ error: true, message: 'Please fill exercise calories' })
        } else if (!lodash.isNumber(amount)) {
            return resolve({ error: true, message: 'Please fill amount' });
        } else if (lodash.isEmpty(description)) {
            return resolve({ error: true, message: 'Please fill description' })
        } else if (lodash.isEmpty(set)) {
            return resolve({ error: true, message: 'Please fill set' })
        } else if (lodash.isEmpty(video)) {
            return resolve({ error: true, message: 'Please fill url video youtube' })
        } else if (lodash.isEmpty(img)) {
            return resolve({ error: true, message: 'Please fill url address image' })
        } else {
            return resolve({ error: false });
        }
    });
}

const isTargetContent = (content) => {
    return new Promise((resolve) => {
        const { weight, height, age, gender, lostWeight, lostWeightMonth, liftStyle } = content;
        console.log(liftStyle);
        if (!lodash.isNumber(weight)) {
            return resolve({ error: true, message: 'Please fill weight' });
        } else if (!lodash.isNumber(height)) {
            return resolve({ error: true, message: 'Please fill height' });
        } else if (!lodash.isNumber(age)) {
            return resolve({ error: true, message: 'Please fill age' });
        } else if (lodash.isEmpty(gender)) {
            return resolve({ error: true, message: 'Please fil gender' });
        } else if (!lodash.isNumber(lostWeight)) {
            return resolve({ error: true, message: 'Please fill lost weight' });
        } else if (!lodash.isNumber(lostWeightMonth)) {
            return resolve({ error: true, message: 'Please fill lost weight/month' });
        } else if (!lodash.isNumber(liftStyle)) {
            return resolve({ error: true, message: 'Please fill lift style' });
        } else {
            return resolve({ error: false });
        }
    });
}

const isCommentContent = (content) => {
    return new Promise((resolve) => {
        const { exerciseID, message } = content;

        if (!lodash.isNumber(exerciseID)) {
            return resolve({ error: true, message: 'Exercise id not found' });
        } else if (lodash.isEmpty(message)) {
            return resolve({ error: true, message: 'Please fill message' });
        } else {
            return resolve({ error: false });
        }
    });
}

const isCommentReplyContent = (content) => {
    return new Promise((resolve) => {
        const { exerciseID, message, commentIDReply } = content;

        if (!lodash.isNumber(exerciseID)) {
            return resolve({ error: true, message: 'Exercise id not found' });
        } else if (!lodash.isEmpty(message)) {
            return resolve({ error: true, message: 'Please fill message' });
        } else if (!lodash.isNumber(commentIDReply)) {
            return resolve({ error: true, message: 'comment id not found' });
        } else {
            return resolve({ error: false });
        }
    });
}

export { isPassword, isFoodContent, isIngredientsFoodContent, isExerciseContent, isTargetContent, isCommentContent, isCommentReplyContent };