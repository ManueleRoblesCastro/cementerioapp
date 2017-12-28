/* jshint indent: 2 */
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('encabezadoplanilla', {
    idplanillaadmon: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

      get() {
        return this.getDataValue('idplanillaadmon');
      },
      set(val) {
        this.setDataValue('idplanillaadmon', val);
      }
    },
    noquincena: {
      type: DataTypes.INTEGER(11),
      allowNull: false,

      get() {
        return this.getDataValue('noquincena');
      },
      set(val) {
        this.setDataValue('noquincena', val);
      }
    },
    mes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,

      get() {
        return this.getDataValue('mes');
      },
      set(val) {
        this.setDataValue('mes', val);
      }
    },
    anio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      get() {
        return this.getDataValue('anio');
      },
      set(val) {
        this.setDataValue('anio', val);
      }
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      get() {
        return this.getDataValue('monto');
      },
      set(val) {
        this.setDataValue('monto', val);
      }
    },
    fechaingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false,
       defaultValue: DataTypes.NOW,
      get() {
       //return this.getDataValue('fechaingreso');
       return moment.utc(this.getDataValue('fechaingreso')).format('DD-MM-YYYY');
      },
      set(val) {
        this.setDataValue('fechaingreso', val);
      }


    },
    codigousuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
       get() {
        return this.getDataValue('codigousuario');
      },
      set(val) {
        this.setDataValue('codigousuario', val.toUpperCase());
      }
    },
    iddocumento: {
      type: DataTypes.STRING(45),
      allowNull: false,
      get() {
        return this.getDataValue('iddocumento');
      },
      set(val) {
        this.setDataValue('iddocumento', val);
      }
    },
    observaciones: {
      type: DataTypes.STRING(45),
      allowNull: true,
      get() {
        return this.getDataValue('observaciones');
      },
      set(val) {
        this.setDataValue('observaciones', val);
      }
    },
    fechadocuemnto: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      get() {
        return this.getDataValue('fechadocuemnto');
      },
      set(val) {
        this.setDataValue('fechadocuemnto', val);
      }
    },
    idtipoplanilla: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      get() {
        return this.getDataValue('idtipoplanilla');
      },
      set(val) {
        this.setDataValue('idtipoplanilla', val);
      }
    },

    idperiodoplanilla: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      get() {
        return this.getDataValue('idperiodoplanilla');
      },
      set(val) {
        this.setDataValue('idperiodoplanilla', val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,    
    tableName: 'encabezadoplanilla'
  });
};
