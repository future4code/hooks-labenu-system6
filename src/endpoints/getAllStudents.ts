import { connection } from "../data/connection"
import { Request, Response } from 'express'

export async function getAllStudents(req: Request, res: Response) {

    try {

        const result = await connection('labeSystem_Students').select()

        res.send(result)

    } catch (error: any) {
        throw new Error(error.message)
    }
}