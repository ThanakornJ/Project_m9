export default function exerciseModel(sequelize, Sequelize) {
    const saveExercies = sequelize.define(
        "saveexercises",
        {
            saveExerciseID: {
                type: Sequelize.INTEGER(10),
                field: "save_exercise_id",
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            saveExerciseName: {
                type: Sequelize.STRING(30),
                field: "save_exercise_name",
                allowNull: false,
            },
            saveExerciseCalories: {
                type: Sequelize.INTEGER(4),
                field: "save_exercise_cal",
                allowNull: false,
            },
            SaveAmount: {
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

    return saveExercies;
}
