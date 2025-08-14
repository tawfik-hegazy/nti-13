const express=require("express");
const courseControllers=require('../controllers/course.controllers');
const router = express.Router();

router 
.route('/')
.post(courseControllers.createCourse)
.get(courseControllers.getAllCourses)

router.route('/:id')
.get(courseControllers.getCourseById)
.delete(courseControllers.deletedCourseById)
.patch(courseControllers.updateCourseById)

module.exports=router;