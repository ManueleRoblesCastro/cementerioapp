'use strict';
//module.exports = (sequelize, DataTypes) => {
module.exports = function(sequelize, Sequelize) {

  var Perfiles = sequelize.define('Perfiles', {
    CodigoPerfil : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      get() {
        return this.getDataValue('CodigoPerfil');
      },
      set(val) {
        this.setDataValue('CodigoPerfil', val);
      }
    },
    NombrePerfil : {
      type: Sequelize.STRING(100),
      allowNull: false,
      get() {
        return this.getDataValue('NombrePerfil');
      },
      set(val) {
        this.setDataValue('NombrePerfil', val.toUpperCase());
      }
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'perfiles'
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return Perfiles;
};