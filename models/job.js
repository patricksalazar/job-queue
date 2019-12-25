"use strict";
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    "Job",
    {
      status: DataTypes.ENUM("started", "cancelled", "done"),
      url: DataTypes.STRING,
      fileLocation: DataTypes.STRING
    },
    {}
  );
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};
