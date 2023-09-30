const mongoose = require('mongoose');

const periodSchema = new mongoose.Schema({
  have: Boolean,
  courseShortForm: String,
  // credit: String,
  instructor1: String,
  instructor2: String,
  roomNumber: String,
});

const slot = new mongoose.Schema({
  haveData: Boolean,
  isMul: Boolean,
  period1: periodSchema,
  period2: periodSchema,
  period3: periodSchema,
});

const daySchema = new mongoose.Schema({
  slot1: slot,
  slot2: slot,
  slot3: slot,
});

const routineSchema = new mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'NewClassModel',
    },
    user_email: String,
    series: String,
    section: String,
    semester: String,
    sat: daySchema,
    sun: daySchema,
    mon: daySchema,
    tues: daySchema,
    wed: daySchema,
  },
  {
    timestamps: true,
  }
);

const RoutineModel = mongoose.model('routineModel', routineSchema);
module.exports = RoutineModel;
