const UserInfoModel = require('../models/userInfo.model');
const { postUserInfoService } = require('../services/userInfo.service');

exports.postUserInfo = async (req, res) => {
  try {
    const result = await postUserInfoService(req.body);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't post the user. Please check the internet connection.",
        result,
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User info added',
      result,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'failed',
      message: "Can't post the user. Internal error.",
      error,
    });
  }
};
