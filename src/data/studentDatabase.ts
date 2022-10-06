import { Student } from "../models/Student";
import { BaseDatabase } from "./baseDatabase";

export class StudentDatabase extends BaseDatabase {
    TABLE_NAME = 'labeSystem_Students'

    public async getAll(): Promise<Student[]> {
        return await super.getAll()
    }

    public async create(student: Student): Promise<void> {
        await super.create(student)
    }

    public async changeStudentsClass(student_id: string, id_class: string): Promise<Student>{
        return await StudentDatabase.connection(this.TABLE_NAME)
        .where({ student_id })
        .update({ id_class })
    }

    public async findById(student_id: string) {
        return  await BaseDatabase.connection(this.TABLE_NAME).select().where({ student_id })
    }
}