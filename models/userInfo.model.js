const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'User name is required.'],
    trim: true,
  },
  userEmail: {
    type: String,
    required: [true, 'Email is required.'],
  },
  userNameShort: {
    type: String,
    required: [true, 'Contact number is required.'],
  },
});

const UserInfoModel = mongoose.model('UserInfo', userInfoSchema);
module.exports = UserInfoModel;
