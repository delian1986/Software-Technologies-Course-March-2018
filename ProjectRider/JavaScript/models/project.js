const Sequelize = require('sequelize');

module.exports = function (sequelize) {
   let Project= sequelize.define('Project',{
       title:{
           type: Sequelize.TEXT,
           allowNull:false,
       },
       description:{
           type:Sequelize.TEXT,
       },
       budget:{
           type:Sequelize.INTEGER,
       }
   })

    return Project
};