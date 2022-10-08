export class Teacher {
    constructor(
        private teacher_id: string,
        private id_class: string,
        private teacher_name: string,
        private teacher_email: string,
        private birth_date: string,
    ){}

    public getTeacherId(): string{
        return this.teacher_id
    }

    public getIdClass(): string{
        return this.id_class
    }

    public getTeacherName(): string{
        return this.teacher_name
    }

    public getTeacherEmail(): string{
        return this.teacher_email
    }

    public getBirthDate(): string{
        return this.birth_date
    }

    public setTeacherId(newTeacherId: string): void{
        this.teacher_id = newTeacherId
    }

    public setIdClass(newIdClass: string): void{
        this.id_class = newIdClass
    }

    public setTeacherName(newTeacherName: string): void{
        this.teacher_name = newTeacherName
    }

    public setTeacherEmail(newTeacherEmail: string): void{
        this.teacher_email = newTeacherEmail
    }

    public setBirthDate(newBirthDate: string): void{
        this.birth_date = newBirthDate
    }
}