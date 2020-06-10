'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generation = sequelize.define('Generation', {
    id : {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    title: DataTypes.STRING(30)
  }, {
    timestamps: false
  });
  Generation.associate = function(models) {
    // associations can be defined here
  };
  return Generation;
};