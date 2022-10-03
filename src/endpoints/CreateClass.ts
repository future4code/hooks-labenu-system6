import {Request, Response} from 'express'
import {connection} from '../data/connection'

export async function createClass(req: Request, res: Response){

    try {

        const {class_name, initial_date, final_date, module} = req.body
         
        if(!class_name || !initial_date || !final_date|| !module){
            throw new Error("Incorrect data, try again")
        }

        const newClass = {
            class_id:Date.now().toString(),
            class_name, 
            initial_date, 
            final_date,
            module
        }

        await connection('labeSystem_Class').insert(newClass)
        res.status(200).send('class created successfully!')

    } catch (error:any) {
        throw new Error(error.message)
    }
}