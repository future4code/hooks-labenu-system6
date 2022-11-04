import { Request, Response } from 'express'
import { Teacher } from "../models/teacher"
import { TeacherDatabase } from "../data/theacherDatabase"

export async function getAllTeachers(req: Request, res: Response) {

    try {

        const teacherDb: TeacherDatabase = new TeacherDatabase()
        const result: Teacher[] = await teacherDb.getAll()

        res.send(result)

    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}