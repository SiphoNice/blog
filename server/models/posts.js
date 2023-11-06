module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define("posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return posts;
};
