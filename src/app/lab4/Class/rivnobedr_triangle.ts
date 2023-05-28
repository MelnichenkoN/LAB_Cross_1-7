import { Triangle } from "./triangle";

export class Rivnobedr_triangle extends Triangle
{
    constructor(override naz: string, public n3: number ,public n4: number)
    {
        super();
    }


S()

{

    this.result = Math.round(0.5*this.n4*Math.sqrt((this.n3+0.5*this.n4)*(this.n3-0.5*this.n4)));
}
S1(){ return this.result;}
}