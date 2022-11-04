import { Request, Response } from 'express';
import { StudentDatabase } from '../data/studentDatabase';

export async function getStudentById(req: Request, res: Response) {
    try {

        const  id  = req.params.idStu

        if (!id) {
            throw new Error('Student not found')
        }
        const studentDb: StudentDatabase = new StudentDatabase() 
        const result = await studentDb.findById(id)

    } catch (error: any) {

        res.status(400).send({message: error.message})

    }
}