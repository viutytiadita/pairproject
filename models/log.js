'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    UserId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER,
    login: DataTypes.DATE,
    logout: DataTypes.DATE
  }, {});
  Log.associate = function(models) {
    // associations can be defined here
    Log.belongsTo(models.User);
    Log.belongsTo(models.Song);
  };
  return Log;
};