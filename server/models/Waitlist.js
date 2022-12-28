module.exports = (sequelize, DataTypes) => {
    
    const Waitlist = sequelize.define("Waitlist", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Waitlist;
};