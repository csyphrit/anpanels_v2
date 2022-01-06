module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      ip: {
          type: Sequelize.STRING
      },
      priv: {
          type: Sequelize.INTEGER
      },
      type: {
          type: Sequelize.INTEGER
      },
      active: {
          type: Sequelize.BOOLEAN
      },
      first_login: {
          type: Sequelize.BOOLEAN
      },
      added: {
          type: Sequelize.DATE
      },
      last_active: {
          type: Sequelize.DATE
      }
    });
  
    return User;
  };