import { Teacher } from "../models/teacher";
import { BaseDatabase } from "./baseDatabase";

export class TeacherDatabase extends BaseDatabase {
    TABLE_NAME = 'labeSystem_teachers'

    public async create(newTeacher: Teacher): Promise<void> {
        await super.create(newTeacher)
    }

    public async getAll(): Promise<Teacher[]> {
        return await super.getAll()
    }

    public async getById(teacher_id: string){
        return await TeacherDatabase.connection(this.TABLE_NAME).where({ teacher_id }) 
    }
}