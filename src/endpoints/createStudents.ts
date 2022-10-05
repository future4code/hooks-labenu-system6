import {Request, Response} from 'express'
import { connection } from '../data/connection';

export async function createStudent(req: Request, res: Response){

    try {
        
        const { student_name, student_email, birth_date, id_class} = req.body;

        if(!student_name || !student_email || !birth_date || !id_class){
            throw new Error('Incorrect data!')
        }

        const newStudent = {
            id_student: Date.now().toString(),
            student_name,
            student_email,
            birth_date,
            id_class
        }

        await connection('labeSystem_Students').insert(newStudent)
        res.status(200).send('Student created successfully!')


    } catch (error: any) {
        throw new Error(error.message)
    }
}