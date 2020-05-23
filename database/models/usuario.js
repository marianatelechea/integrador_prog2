module.exports = function (sequelize, DataTypes) {
    const usuario = sequelize.define(
        // Nombre del modelo
        'Usuario',
        
        // Columnas de la tabla
      {
          nombre_usuario: DataTypes.STRING,
          apellido_usuario: DataTypes.STRING,
          email: DataTypes.STRING,
          id_usuario: DataTypes.INTEGER,
          contraseña: DataTypes.STRING,
          fecha_nacimiento: DataTypes.DATE
      },

      // Configuracion adicional

      {
            tableName: 'usuarios',
            timestamps: false
      }

    );

    return usuario;
}