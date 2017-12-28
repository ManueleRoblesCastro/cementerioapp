'use strict';
//module.exports = (sequelize, DataTypes) => {
module.exports = function(sequelize, Sequelize) {

  var Usuarios = sequelize.define('Usuarios', {
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
    ApellidosUsuario : {
      type: Sequelize.STRING(50),
      allowNull: false,
      get() {
        return this.getDataValue('ApellidosUsuario');
      },
      set(val) {
        this.setDataValue('ApellidosUsuario', val.toUpperCase());
      }
    },
    NombresUsuario : {
      type: Sequelize.STRING(50),
      allowNull: false,
      get() {
        return this.getDataValue('NombresUsuario');
      },
      set(val) {
        this.setDataValue('NombresUsuario', val.toUpperCase());
      }
    },    
    ClaveUsuario : {
      type: Sequelize.STRING(10),
      allowNull: true,
      get() {
        return this.getDataValue('ClaveUsuario');
      },
      set(val) {
        this.setDataValue('ClaveUsuario', val);
      }      
    },    
    CorreoElectronicoUsuario : {
      type: Sequelize.STRING(100),
      allowNull: true,
      get() {
        return this.getDataValue('CorreoElectronicoUsuario');
      },
      set(val) {
        this.setDataValue('CorreoElectronicoUsuario', val);
      }      
    },
    CodigoUsuarioSupervisor : {
      type: Sequelize.STRING(10),
      allowNull: false,
      get() {
        return this.getDataValue('CodigoUsuarioSupervisor');
      },
      set(val) {
        this.setDataValue('CodigoUsuarioSupervisor', val.toUpperCase());
      }
    },    
    ActivoInactivoUsuario : {
      type: Sequelize.STRING(1),
      allowNull: false,
      get() {
        return this.getDataValue('ActivoInactivoUsuario');
      },
      set(val) {
        this.setDataValue('ActivoInactivoUsuario', val);
      }      
    },
    CodigoRolUsuario : {
      type: Sequelize.STRING(1),
      allowNull: true,
      get() {
        return this.getDataValue('CodigoRolUsuario');
      },
      set(val) {
        this.setDataValue('CodigoRolUsuario', val);
      }      
    },
    UbicacionFisicaUsuario : {
      type: Sequelize.STRING(250),
      allowNull: true,
      get() {
        return this.getDataValue('UbicacionFisicaUsuario');
      },
      set(val) {
        this.setDataValue('UbicacionFisicaUsuario', val);
      }      
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuarios'
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
  });
  return Usuarios;
};