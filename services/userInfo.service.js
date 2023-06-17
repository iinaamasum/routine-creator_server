const UserInfoModel = require('../models/userInfo.model');

exports.postUserInfoService = async (data) => {
  const postDoc = new UserInfoModel(data);
  const result = await postDoc.save();
  return result;
};
