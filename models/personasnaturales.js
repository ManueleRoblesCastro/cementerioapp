'use strict';
//module.exports = (sequelize, DataTypes) => {
module.exports = function(sequelize, Sequelize) {

  var personasNaturales = sequelize.define('personasNaturales', {
    IDPersona : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      get() {
        return this.getDataValue('IDPersona');
      },
      set(val) {
        this.setDataValue('IDPersona', val.toUpperCase());
      }
    },
    NombresPersona : {
      type: Sequelize.STRING(150),
      allowNull: false,
      get() {
        return this.getDataValue('NombresPersona');
      },
      set(val) {
        this.setDataValue('NombresPersona', val.toUpperCase());
      }
    },
    ApellidosPersona : {
      type: Sequelize.STRING(150),
      allowNull: false,
      get() {
        return this.getDataValue('ApellidosPersona');
      },
      set(val) {
        this.setDataValue('ApellidosPersona', val.toUpperCase());
      }
    }
  },   
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'personasnaturales',
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return personasNaturales;
};