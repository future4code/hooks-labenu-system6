import {Request, Response} from 'express'
import { StudentDatabase } from '../data/studentDatabase';

export async function changeStudentsClass(req: Request, res: Response){
    try {
        const student_id: string = req.params.idStu  as string
        const id_class: string = req.body.id_class

        if(!student_id || !id_class) throw new Error("Incorrect data, try again");

        const studentDb: StudentDatabase = new StudentDatabase()

        const findById = await studentDb.findById(student_id)

        if(!findById) throw new Error("Student not found");
        

        await studentDb.changeStudentsClass(student_id, id_class)

        res.status(200).send({message: "student's class successfully changed"})
        
    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}