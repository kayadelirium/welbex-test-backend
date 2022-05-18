"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.addColumn("Post", "userId", {
            type: Sequelize.INTEGER,
            references: {
                model: "User",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        });
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.removeColumn("Post", "userId");
    },
};
