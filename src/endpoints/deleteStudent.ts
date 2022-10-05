import { Request, Response } from 'express';
import { connection } from '../data/connection'

export async function deleteStudent(req: Request, res: Response) {

    try {

        const {id} = req.params;

        await connection.raw(`
            DELETE FROM labeSystem_Students
            WHERE student_id = "${id}"
        `)
       
        res.status(200).send('Student deleted successfully!')

    } catch (error: any) {
        throw new Error(error.message)
    }
}