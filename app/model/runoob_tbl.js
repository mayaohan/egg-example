/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('runoob_tbl', {
    runoob_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    runoob_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    runoob_author: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'runoob_tbl'
  });

  Model.associate = function() {

  }

  return Model;
};
