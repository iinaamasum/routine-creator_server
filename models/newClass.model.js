const mongoose = require('mongoose');

const newClassSchema = new mongoose.Schema(
  {
    user_email: String,
    series: String,
    section: String,
    courseTitle: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, 'Class title is required.'],
      minLength: [2, 'Class title should be more than 1 chars.'],
      maxLength: [100, 'Class title can be max of 100 chars.'],
      unique: false,
    },
    courseShortForm: {
      type: String,
      required: [true, 'section is required.'],
      trim: true,
    },
    instructor: {
      type: Array,
      required: [true, 'instructor is required.'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewClassModel = mongoose.model('NewClassModel', newClassSchema);
module.exports = NewClassModel;
