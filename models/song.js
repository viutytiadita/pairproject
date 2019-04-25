'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    song_name: DataTypes.STRING,
    genre: DataTypes.STRING,
    price: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Song.getKeys = function(){
    let key = Object.keys(this.rawAttributes)
    let result = []
    for (let i = 0; i < key.length; i++){
      if (key[i] !== 'createdAt' && key[i] !== 'updatedAt'){
        result.push(key[i])
      }
    }
    return result
  }
  Song.associate = function(models) {
    // associations can be defined here
		Song.hasMany(models.Log);
		Song.belongsToMany(models.User, {through: 'Log', foreignKey: 'SongId'});
  };
  return Song;
};