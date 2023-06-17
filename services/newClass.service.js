const NewClassModel = require('../models/newClass.model');

exports.postNewClassService = async (data) => {
  const postDoc = new NewClassModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllClassService = async (query) => {
  const result = await NewClassModel.find(query).sort({
    createdAt: -1,
    classTitle: 1,
  });
  return result;
};

exports.getClassByIdService = async (classId) => {
  const result = await NewClassModel.findById(classId);
  return result;
};

exports.deleteClassByIdService = async (classId) => {
  const isExistClass = await this.getClassByIdService(classId);
  if (!isExistClass?._id) {
    return {
      deletedCount: 0,
      message: 'class not found with the id. nothing to delete.',
    };
  }
  const result = await NewClassModel.deleteOne({ _id: classId });
  return result;
};

exports.patchClassByIdService = async (classId, updateDoc) => {
  const isExistClass = await this.getClassByIdService(classId);
  if (!isExistClass?._id) {
    return {
      modifiedCount: 0,
      message: 'class not found with the id. nothing to delete.',
    };
  }
  const result = await NewClassModel.updateOne(
    { _id: classId },
    { $set: updateDoc },
    { runValidators: true }
  );
  return result;
};
