const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_short_form: String,
  credit: Number,
  instructor1: String,
  instructor2: String,
});

const CourseModel = mongoose.model('CourseModel', courseSchema);

const newClassSchema = new mongoose.Schema(
  {
    user_email: String,
    series: String,
    section: String,
    semester: String,
    courses: {
      type: Map,
      of: courseSchema,
    },
  },
  {
    timestamps: true,
  }
);

const NewClassModel = mongoose.model('NewClassModel', newClassSchema);
module.exports = { NewClassModel, CourseModel };
