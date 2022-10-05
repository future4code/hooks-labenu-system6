import { Request, Response } from 'express';
import { connection } from '../data/connection'

export async function getTeacherById(req: Request, res: Response) {

    try {

        const { id } = req.params

        if (!id) {
            throw new Error('Teacher not found')
        }

        const result = await connection('labeSystem_teachers')
            .select('teacher_id', 'teacher_name')
            .where({ teacher_id: id })
        res.status(200).send(result)

    } catch (error: any) {
        throw new Error(error.message)
    }
}