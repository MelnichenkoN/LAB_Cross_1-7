export abstract class Triangle {
    naz!: string;
    result!: number;
    constructor() {}
        show(){
            return "Назва=" + this.naz + " Результат=" + this.result;
        }
        abstract S(): any;
        abstract S1(): number;
    }