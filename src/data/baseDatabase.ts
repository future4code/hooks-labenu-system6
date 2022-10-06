import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {

    abstract TABLE_NAME: string;

    protected static connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      }
    });

    protected async create(entity: any): Promise<void>{
        await BaseDatabase.connection(this.TABLE_NAME).insert(entity)
    }

    protected async getAll(): Promise<any> {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()

        return result
    }

}