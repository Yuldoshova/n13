const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

const Group = sequelize.define('groups', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
})

module.exports = Group