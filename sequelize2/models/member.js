const { DataTypes } = require('sequelize');
const MemberModel = (sequelize) => {
    return this.sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },
        memberId: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = MemberModel;
