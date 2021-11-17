export default function exerciseModel(sequelize, Sequelize) {
    const exercise = sequelize.define(
        "exercises",
        {
            exerciseID: {
                type: Sequelize.INTEGER(10),
                field: "exercise_id",
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            exerciseName: {
                type: Sequelize.STRING(30),
                field: "exercise_name",
                allowNull: false,
            },
            exerciseCalories: {
                type: Sequelize.INTEGER(4),
                field: "exercise_cal",
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER(4),
                field: "amount",
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                field: "description",
                allowNull: false,
            },
            set: {
                type: Sequelize.TEXT,
                field: "set",
                allowNull: false,
            },
            video: {
                type: Sequelize.TEXT,
                field: "video",
                allowNull: false,
            },
            img: {
                type: Sequelize.TEXT,
                field: "img",
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
            tableName: "exercise",
        }
    );

    return exercise;
}
