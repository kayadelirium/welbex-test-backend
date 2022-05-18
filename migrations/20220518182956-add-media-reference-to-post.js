"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.addColumn("Media", "postId", {
            type: Sequelize.INTEGER,
            references: {
                model: "Post",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        });
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.removeColumn("Media", "postId");
    },
};
