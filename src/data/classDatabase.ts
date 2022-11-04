import { Class } from "../models/Class";
import { BaseDatabase } from "./baseDatabase";

export class ClassDatabase extends BaseDatabase {
    TABLE_NAME = 'labeSystem_Class'

    public async getAll(): Promise<Class[]> {
        return await super.getAll()
    }

    public async create(newClass: Class): Promise<void> {
        await super.create(newClass)
    }

    public async findById(class_id: string) {
        return  await BaseDatabase.connection(this.TABLE_NAME).select().where({ class_id })
    }

    public async changeClassModule(class_id: string, module: number){
        if(module>= 0 && module <=6) return await ClassDatabase.connection(this.TABLE_NAME)
        .where({ class_id })
        .update({ module })
    }
}