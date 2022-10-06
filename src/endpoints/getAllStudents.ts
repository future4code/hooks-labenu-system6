import { Request, Response } from 'express'
import { Student } from "../models/Student"
import { StudentDatabase } from "../data/studentDatabase"

export async function getAllStudents(req: Request, res: Response) {

    try {

        const studentDb: StudentDatabase = new StudentDatabase()

        const result: Student[] = await studentDb.getAll() 

        res.send(result)

    } catch (error: any) {
        res.send(error.message)
    }
}