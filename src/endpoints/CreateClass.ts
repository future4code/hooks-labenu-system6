import {Request, Response} from 'express'
import { ClassDatabase } from '../data/classDatabase'
import { Class } from '../models/Class'

export async function createClass(req: Request, res: Response){

    try {

        const {class_name, initial_date, final_date, class_module} = req.body
        
        console.log(class_name, initial_date, final_date, class_module)

        if(!class_name || !initial_date || !final_date|| isNaN(class_module)){
            throw new Error("Incorrect data, try again")
        }

        const newClass: Class = new Class(
            Date.now().toString(),
            class_name, 
            initial_date, 
            final_date,
            class_module
        )

        const classDb: ClassDatabase = new ClassDatabase()

        await classDb.create(newClass)

        res.status(200).send('class created successfully!')

    } catch (error:any) {
        res.status(400).send({message: error.message})

    }
}