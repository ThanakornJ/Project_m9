export default function saveExerciseModel(sequelize, Sequelize) {
    const saveExercise = sequelize.define(
        "saveExercises",
        {
            saveExerciseID: {
                type: Sequelize.INTEGER(10),
                field: "save_exercise_id",
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            saveAmount: {
                type: Sequelize.INTEGER(4),
                field: "save_amount",
                allowNull: false,
            },
            creteAt: {
                type: Sequelize.DATE,
                field: "create_at",
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updateAt: {
                type: Sequelize.DATE,
                field: "update_at",
                allowNull: false,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
        },
        {
            tableName: "save_exercise",
        }
    );

    return saveExercise;
}