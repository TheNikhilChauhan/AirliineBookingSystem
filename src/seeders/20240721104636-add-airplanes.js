"use strict";

const { Model } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          model_number: "Boeing 737",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model_number: "Boeing 777",
          capacity: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model_number: "Airbus A320",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model_number: "Boeing 747",
          capacity: 340,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
