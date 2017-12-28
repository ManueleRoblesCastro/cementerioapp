'use strict';
//module.exports = (sequelize, DataTypes) => {
module.exports = function(sequelize, Sequelize) {

  var UsuariosEnSesion = sequelize.define('UsuariosEnSesion', {
    CodigoUsuario : {
      type: Sequelize.STRING(10),
      primaryKey: true,
      get() {
        return this.getDataValue('CodigoUsuario');
      },
      set(val) {
        this.setDataValue('CodigoUsuario', val.toUpperCase());
      }
    },
    FechaHoraEntrada : {
      type: Sequelize.DATE,
      primaryKey: true,
      defaultValue: Sequelize.NOW,
      get() {
        return this.getDataValue('FechaHoraEntrada');
      },
      set(val) {
        this.setDataValue('FechaHoraEntrada', val);
      }
    },
    FechaHoraSalida : {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: true,
      get() {
        return this.getDataValue('FechaHoraSalida');
      },
      set(val) {
        this.setDataValue('FechaHoraSalida', val);
      }
    }
  },   
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuariosensesion',
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return UsuariosEnSesion;
};