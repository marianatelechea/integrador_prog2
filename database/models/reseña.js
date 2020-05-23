module.exports = function (sequelize, DataTypes) {
    const reseña = sequelize.define(
        // Nombre del modelo
        'Reseña',
        
        // Columnas de la tabla
      {
          id_reseña: DataTypes.INTEGER,
          id_serie: DataTypes.INTEGER,
          id_usuario: DataTypes.INTEGER,
          texto_reseña: DataTypes.STRING,
          fecha_creacion: DataTypes.DATE,
          fecha_actualizacion: DataTypes.DATE,
          puntaje_reseña: DataTypes.INTEGER
          
      },

      // Configuracion adicional

      {
            tableName: 'reseñas',
          timestamps: false
      }

    );

    return reseña;
}