import { connection } from "../data/connection"
import { Request, Response } from 'express'

export async function getStudentByClass(req: Request, res: Response) {

    try {

        const {idClass} = req.params

        const result = await connection('labeSystem_Students')
        .join("labeSystem_Class", "labeSystem_Class.class_id",  "labeSystem_Students.id_class" )
        .select()
        .where({"labeSystem_Students.id_class": idClass})
        
       res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}