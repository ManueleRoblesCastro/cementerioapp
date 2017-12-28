/* jshint indent: 2 */
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleencabezadoplanilla', {
    iddetalleencabezadoplanilla: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,

      get() {
        return this.getDataValue('iddetalleencabezadoplanilla');
      },
      set(val) {
        this.setDataValue('iddetalleencabezadoplanilla', val);
      }
    },
    idplanillaadmon: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'encabezadoplanilla',
        key: 'idplanillaadmon'
      },
      get() {
        return this.getDataValue('idplanillaadmon');
      },
      set(val) {
        this.setDataValue('idplanillaadmon', val);
      }
    },
    IDPersona: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empleado',
        key: 'IDPersona'
      },
      get() {
        return this.getDataValue('IDPersona');
      },
      set(val) {
        this.setDataValue('IDPersona', val);
      }
    },
    salarionominal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('salarionominal');
      },
      set(val) {
        this.setDataValue('salarionominal', val);
      }
    },
    salariodiario: {
      type: DataTypes.DECIMAL,
      allowNull: true,

      get() {
        return this.getDataValue('salariodiario');
      },
      set(val) {
        this.setDataValue('salariodiario', val);
      }
    },
    diaslaborados: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      get() {
        return this.getDataValue('diaslaborados');
      },
      set(val) {
        this.setDataValue('diaslaborados', val);
      }
    },
    horasextrasdiurnas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
       get() {
        return this.getDataValue('horasextrasdiurnas');
      },
      set(val) {
        this.setDataValue('horasextrasdiurnas', val);
      }
    },
    horasextrasnocturnas: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
       get() {
        return this.getDataValue('horasextrasnocturnas');
      },
      set(val) {
        this.setDataValue('horasextrasnocturnas', val);
      }
    },
    salariototal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('salariototal');
      },
      set(val) {
        this.setDataValue('salariototal', val);
      }
    },
    afp: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('afp');
      },
      set(val) {
        this.setDataValue('afp', val);
      }
    },
    isss: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('isss');
      },
      set(val) {
        this.setDataValue('isss', val);
      }
    },
    renta: {
      type: DataTypes.DECIMAL,
      allowNull: true,
        get() {
        return this.getDataValue('renta');
      },
      set(val) {
        this.setDataValue('renta', val);
      }
    },
    otrosdescuentos: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('otrosdescuentos');
      },
      set(val) {
        this.setDataValue('otrosdescuentos', val);
      }
    },
    totalpagar: {
      type: DataTypes.DECIMAL,
      allowNull: true,
       get() {
        return this.getDataValue('totalpagar');
      },
      set(val) {
        this.setDataValue('totalpagar', val);
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true,  
    tableName: 'detalleencabezadoplanilla'
  });
};
