import db from '../../config/database';

const Target = db.setTarget;

const getAllTargetDB = () => {
    return new Promise( async (resolve, reject) => {
        try {
            const targets = await Target.findAll();

            return resolve(targets);
        } catch (error) {
            return reject(error);
        }
    });
}

const getTargetDB = (content) => {
    return new Promise( async (resolve, reject) => {
        try {
            const target =await Target.findAll({ where: { account_id: content }});
            return resolve(target);
        } catch (error) {
            return reject(error)
        }
    });
}

const getTargetExDB = (content) => {
    return new Promise ( async (resolve, reject)=>{
        try{
            const target = await Target.findOne({ where: { target_id: content } })
            return resolve(target)
        }
        catch(error){
            return reject(error);
        }
    });
}

const createSetTargetDB = (content) => {
    return new Promise( async (resolve, reject)=>{
        try{
            const target = await Target.create(content);
            return resolve(target)
        }
        catch(error){
            return reject(error);
        }
    });
}

const updateSetTargetDB = () => {
    return new Promise( async (resolve, reject) => {

    });
}

const deleteSetTargetDB = (targetID) => {
    return new Promise( async (resolve, reject) => {
        console.log(targetID);
        try {
            const deleteTarget = await Target.destroy({ where: { target_id: targetID } });

            return resolve(deleteTarget);
        } catch (error) {
            return reject(error);
        }
    });
}

export { getTargetDB, getTargetExDB, createSetTargetDB, updateSetTargetDB, deleteSetTargetDB }