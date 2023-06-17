const mongoose = require('mongoose');

const periodSchema = new mongoose.Schema({
  courseShortForm: String,
  Instructor: Array,
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
    user_email: String,
    series: String,
    section: String,
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
