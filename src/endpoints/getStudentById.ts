import { Request, Response } from 'express';
import { connection } from '../data/connection'

export async function getStudentById(req: Request, res: Response) {
    try {

        const { id } = req.params

        if (!id) {
            throw new Error('Student not found')
        }

        const result = await connection('labeSystem_Students')
            .select("student_id", "student_name")
            .where({ student_id: id })
        res.status(200).send(result)

    } catch (error: any) {

        throw new Error(error.message)
    }
}