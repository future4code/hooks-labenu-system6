export class Class {
    constructor(
        private class_id: string,
        private class_name: string,
        private initial_date: string,
        private final_date: string,
        private module: number
    ){}

    public getClassId(): string{
        return this.class_id
    }

    public getClassName(): string{
        return this.class_name
    }

    public getInitialDate(): string{
        return this.initial_date
    }

    public getFinalDate(): string{
        return this.final_date
    }

    public getClassModule(): number{
        return this.module
    }

    public setClassId(newId: string){
        this.class_id = newId
    }

    public setClassName(newName: string){
        this.class_name = newName
    }

    public setInitialDate(newInitDate: string){
        this.initial_date = newInitDate
    }

    public setFinalDate(neFinalDate: string){
        this.final_date = ''
    }

    public setClassModule(newModule: number){
        this.module = this.module
    }
}