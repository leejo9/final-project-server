/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://example.com/profile.jpg',
    allowNull: true
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 2),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

},{
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
  paranoid: true
}
);

// Export the student model
module.exports = Student;