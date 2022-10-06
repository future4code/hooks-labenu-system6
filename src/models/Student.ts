export class Student {
    constructor(
        private student_id: string,
        private student_name: string,
        private student_email: string,
        private birth_date: string,
        private id_class: string
    ){}

    public getStudentId(): string{
        return this.student_id
    }

    public getStudentName(): string{
        return this.student_name
    }

    public getStudentEmail(): string{
        return this.student_email
    }

    public getStudentBirthDate(): string{
        return this.birth_date
    }

    public getStudentIdClass(): string{
        return this.id_class
    }

    public setStudentId(newId: string): void{
        this.student_id = newId
    }

    public setStudentName(newName: string): void{
        this.student_name = newName
    }

    public setStudentEmail(newEmail: string): void{
        this.student_email = newEmail
    }

    public setStudentBirthDate(newBirthDate: string): void{
        this.birth_date = newBirthDate
    }

    public setStudentIdClass(newIdClass: string): void{
        this.id_class = newIdClass
    }

}