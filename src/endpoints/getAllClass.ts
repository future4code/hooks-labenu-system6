import { connection } from "../data/connection"
import {Request, Response} from 'express'

export async function getAllClass(req: Request, res:Response){

    try {

        const result = await connection('labeSystem_Class').select()
        
        res.send(result)

    } catch (error:any) {
        throw new Error(error.message)
    }
}