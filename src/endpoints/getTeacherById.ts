import { Request, Response } from 'express';
import { TeacherDatabase } from '../data/theacherDatabase';

export async function getTeacherById(req: Request, res: Response) {

    try {

        const { id } = req.params

        if (!id) {
            throw new Error('Teacher not found')
        }
        
        const teacherDb: TeacherDatabase = new TeacherDatabase()
        const result = await teacherDb.getById(id)
        
        res.status(200).send(result)
    } catch (error: any) {
       res.status(400).send({message: error.message})
    }
}