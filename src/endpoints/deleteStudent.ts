import { Request, Response } from 'express';
import { StudentDatabase } from '../data/studentDatabase';

export async function deleteStudent(req: Request, res: Response) {

    try {

        const id = req.params.idStu

        const studentDb: StudentDatabase = new StudentDatabase()

        await studentDb.delete(id)
       
        res.status(200).send('Student deleted successfully!')

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}