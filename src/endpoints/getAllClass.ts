import { Request, Response } from 'express'
import { Class } from "../models/Class"
import { ClassDatabase } from "../data/classDatabase"

export async function getAllClass(req: Request, res: Response) {

    try {

        const classDb: ClassDatabase = new ClassDatabase()
        const result: Class[] = await classDb.getAll()

        res.send(result)

    } catch (error: any) {
        res.status(400).send({message: error.message})

    }
}