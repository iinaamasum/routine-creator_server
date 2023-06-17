const { ObjectId } = require('mongodb');
const RoutineModel = require('../models/routine.model');
const {
  postNewRoutineService,
  getAllRoutineService,
  deleteRoutineByIdService,
  getRoutineByIdService,
  patchRoutineByIdService,
} = require('../services/routine.services');

exports.postNewRoutine = async (req, res) => {
  try {
    const result = await postNewRoutineService(req.body);
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

exports.getAllRoutine = async (req, res) => {
  try {
    const result = await getAllRoutineService(req.query);
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

exports.getRoutineById = async (req, res) => {
  try {
    const result = await getRoutineByIdService(req.params.id);
    if (!result) {
      return res.status(400).json({
        status: 'failed',
        message:
          "can't get the routine with the given id. class does not exist.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'got the routine with the given id. @param object',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "don't get the routine. Something is wrong.",
      error,
    });
  }
};

exports.deleteRoutineById = async (req, res) => {
  try {
    const result = await deleteRoutineByIdService(req.params.id);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't delete the routine.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'delete the routine. @param object.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't delete the routine. Something went wrong.",
      error,
    });
  }
};

exports.patchRoutineById = async (req, res) => {
  try {
    const mongoObjectId = ObjectId(req.params.id);
    const result = await patchRoutineByIdService(mongoObjectId, req.body);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: 'failed',
        message: "Can't update the routine.",
        result,
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Class is updated with the given data. @param object.',
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: "Can't update the routine. Something went wrong.",
      error,
    });
  }
};
