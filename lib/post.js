'use strict';
// 公開URLでH12 TimeOutエラーに対応　ローカルでは警告が出ます
require('pg').defaults.ssl = true;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/secret_board',
  {
    logging: false
  });
const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  postedBy: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
    freezeTableName: true,
    timestamps: true
  });

Post.sync();
module.exports = Post;