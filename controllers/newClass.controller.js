const { ObjectId } = require('mongodb');
const {
  postNewClassService,
  getAllClassService,
  deleteClassByIdService,
  getClassByIdService,
  patchClassByIdService,
} = require('../services/newClass.service');
const { NewClassModel, CourseModel } = require('../models/newClass.model');

exports.postNewClass = async (req, res) => {
  try {
    const result = await postNewClassService(req.body);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't Post the given class.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Posted the given new class.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't post the data. Something went wrong",
      error,
    });
  }
};

exports.getAllClass = async (req, res) => {
  try {
    const result = await getAllClassService(req.query);
    if (result.length === 0) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't get all class.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got all class. @param Array of objects.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't get all class. Something went wrong.",
      error,
    });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const result = await getClassByIdService(req.params.id);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message: "can't get the class with the given id. class does not exist.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got the class with the given id. @param object',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "don't get the class. Something is wrong.",
      error,
    });
  }
};

exports.deleteClassById = async (req, res) => {
  try {
    const result = await deleteClassByIdService(req.params.id);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't delete the class.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'delete the class. @param object.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't delete the class. Something went wrong.",
      error,
    });
  }
};

exports.patchClassById = async (req, res) => {
  try {
    const class_id = ObjectId(req.params.id);
    const course = await NewClassModel.findById(class_id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    console.log(req.body);
    const postDoc = new CourseModel(req.body);
    const addedCourse = await postDoc.save();
    const courseKey = Date.now().toString();

    course.courses.set(courseKey, addedCourse);
    const result = await NewClassModel.updateOne(
      { _id: class_id },
      { $set: course },
      { runValidators: true }
    );

    if (result.modifiedCount === 0) {
      res.status(400).json({
        status: 'Failed',
        result,
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Class is updated with the given data. @param object.',
        result: course,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};
