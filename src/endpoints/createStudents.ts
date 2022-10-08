import {Request, Response} from 'express'
import { StudentDatabase } from '../data/studentDatabase';
import { Student } from '../models/Student';

export async function createStudent(req: Request, res: Response){

    try {
        
        const { student_name, student_email, birth_date, id_class} = req.body;

        if(!student_name || !student_email || !birth_date || !id_class){
            throw new Error('Incorrect data!')
        }

        const newStudent: Student = new Student(
                Date.now().toString(),
                student_name,
                student_email,
                birth_date,
                id_class
        )

        const studentDb: StudentDatabase = new StudentDatabase()

        await studentDb.create(newStudent)

        res.status(200).send('Student created successfully!')


    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}