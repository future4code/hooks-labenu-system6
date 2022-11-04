import { Request, Response } from 'express'
import { TeacherDatabase } from '../data/theacherDatabase';
import { Teacher } from '../models/teacher';

export async function createTeacher(req: Request, res: Response) {

    try {

        const { id_class, teacher_name, teacher_email, birth_date } = req.body;

        if (!id_class || !teacher_name || !teacher_email || !birth_date) {
            throw new Error('Incorrect data!')
        }

        const newTeacher: Teacher = new Teacher(
                                    Date.now().toString(),
                                    id_class,
                                    teacher_name,
                                    teacher_email,
                                    birth_date
                                )

        const teacherDb: TeacherDatabase = new TeacherDatabase()
        
        await teacherDb.create(newTeacher)

        res.status(200).send('Teacher created successfully!')


    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}