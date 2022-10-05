import { Request, Response } from 'express'
import { connection } from '../data/connection';

export async function createTeacher(req: Request, res: Response) {

    try {

        const { id_class, teacher_name, teacher_email, birth_date } = req.body;

        if (!id_class || !teacher_name || !teacher_email || !birth_date) {
            throw new Error('Incorrect data!')
        }

        const newTeacher = {
            teacher_id: Date.now().toString(),
            id_class,
            teacher_name,
            teacher_email,
            birth_date
        }

        await connection('labeSystem_teachers').insert(newTeacher)
        res.status(200).send('Teacher created successfully!')


    } catch (error: any) {
        throw new Error(error.message)
    }
}