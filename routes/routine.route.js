const {
  postNewRoutine,
  getAllRoutine,
  deleteRoutineById,
  getRoutineById,
  patchRoutineById,
} = require('../controllers/routine.controller');

const router = require('express').Router();

router.route('/').post(postNewRoutine).get(getAllRoutine);

router
  .route('/:id')
  .delete(deleteRoutineById)
  .get(getRoutineById)
  .patch(patchRoutineById);

module.exports = router;
