const RoutineModel = require('../models/routine.model');

exports.postNewRoutineService = async (data) => {
  const postDoc = new RoutineModel(data);
  const result = await postDoc.save();
  return result;
};

exports.getAllRoutineService = async (query) => {
  const result = await RoutineModel.find(query).sort({
    createdAt: -1,
  });
  return result;
};

exports.getRoutineByIdService = async (classId) => {
  const result = await RoutineModel.findById(classId);
  return result;
};

exports.deleteRoutineByIdService = async (classId) => {
  const isExistRoutine = await this.getRoutineByIdService(classId);
  if (!isExistRoutine?._id) {
    return {
      deletedCount: 0,
      message: 'routine not found with the id. nothing to delete.',
    };
  }
  const result = await RoutineModel.deleteOne({ _id: classId });
  return result;
};

exports.patchRoutineByIdService = async (classId, updateDoc) => {
  const isExistRoutine = await this.getRoutineByIdService(classId);
  if (!isExistRoutine?._id) {
    return {
      modifiedCount: 0,
      message: 'routine not found with the id. nothing to delete.',
    };
  }
  const result = await RoutineModel.updateOne(
    { _id: classId },
    { $set: updateDoc },
    { runValidators: true }
  );
  return result;
};

// exports.patchSubRoutineByIdService = async (classId, updateDoc) => {
//   console.log(classId);
//   const day = await RoutineModel.daySchema.findById(classId);
//   console.log(day);
//   const isExistRoutine = true;
//   if (!isExistRoutine?._id) {
//     return {
//       modifiedCount: 0,
//       message: 'routine not found with the id. nothing to update.',
//     };
//   }
//   const result = await RoutineModel.daySchema.slot.updateOne(
//     { _id: classId },
//     { $set: updateDoc },
//     { runValidators: true }
//   );
//   return result;
// };
