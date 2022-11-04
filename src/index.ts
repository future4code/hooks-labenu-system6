import { app } from './app'

import { createClass } from './endpoints/CreateClass';
import { getAllClass } from './endpoints/getAllClass';
import { createTeacher } from './endpoints/createTeachers';
import { createStudent } from './endpoints/createStudents';
import { getAllStudents } from './endpoints/getAllStudents';
import { getAllTeachers } from './endpoints/getAllTeachers';
import { getStudentById } from './endpoints/getStudentById';
import { getTeacherById } from './endpoints/getTeacherById';
import { getStudentByClass } from './endpoints/getStudentByClass';
import { deleteStudent } from './endpoints/deleteStudent';
import { changeStudentsClass } from './endpoints/changeStudentsClass';
import { changeClassModule } from './endpoints/changeClassModule';

app.post("/createClass", createClass)
app.post('/createStudent', createStudent)
app.post('/createTeacher', createTeacher)
app.get('/getAllClass', getAllClass)
app.get('/getAllStudents', getAllStudents)
app.get('/getAllTeachers', getAllTeachers)
app.get('/getStudentById/:id', getStudentById)
app.get('/getTeacherById/:id', getTeacherById)
app.get('/getStudentByClass/:idClass', getStudentByClass)
app.delete('/deleteStudent/:idStu', deleteStudent)
app.put('/changeStudentsClass/:idStu', changeStudentsClass)
app.put('/changeClassModule/:idClass', changeClassModule)

