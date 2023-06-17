const {
  postNewClass,
  getAllClass,
  deleteClassById,
  getClassById,
  patchClassById,
} = require('../controllers/newClass.controller');

const router = require('express').Router();

router.route('/').post(postNewClass).get(getAllClass);

router
  .route('/:id')
  .delete(deleteClassById)
  .get(getClassById)
  .patch(patchClassById);

module.exports = router;
