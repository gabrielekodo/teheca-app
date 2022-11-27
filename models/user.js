module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
    passwordHash: {
      type: Sequelize.STRING,
    },
    acceptedTerms: {
      type: Sequelize.BOOLEAN,
    },
    age: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.STRING,
    },
    maritalStatus: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    institution: {
      type: Sequelize.STRING,
    },
    award: {
      type: Sequelize.STRING,
    },
    graduationDate: {
      type: Sequelize.DATE,
    },
    organizationOne: {
      type: Sequelize.STRING,
    },
    organizationLocationOne: {
      type: Sequelize.STRING,
    },
    positionOne: {
      type: Sequelize.STRING,
    },
    workStartDateOne: {
      type: Sequelize.DATE,
    },
    workEndDateOne: {
      type: Sequelize.DATE,
    },
    dutiesOne: {
      type: Sequelize.STRING,
    },
    organizationTwo: {
      type: Sequelize.STRING,
    },
    organizationLocationTwo: {
      type: Sequelize.STRING,
    },
    positionTwo: {
      type: Sequelize.STRING,
    },
    workStartDateTwo: {
      type: Sequelize.DATE,
    },
    workEndDateTwo: {
      type: Sequelize.DATE,
    },
    dutiesTwo: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    resumeUrl: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
