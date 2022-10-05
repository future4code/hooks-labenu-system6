import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
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


export const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

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


