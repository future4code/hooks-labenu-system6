import {Request, Response} from 'express'
import { ClassDatabase } from '../data/classDatabase';

export async function changeClassModule(req: Request, res: Response){
    try {
        const class_id: string = req.params.idClass  as string
        const module: number = req.body.module

        console.log(class_id, module)

        if(!class_id || isNaN(module)) throw new Error("Incorrect data, try again");

        const classDb: ClassDatabase = new ClassDatabase()

        const findById = await classDb.findById(class_id)

        if(!findById) throw new Error("class not found");
        

        await classDb.changeClassModule(class_id, module)

        res.status(200).send({message: "class's module successfully changed"})
        
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}