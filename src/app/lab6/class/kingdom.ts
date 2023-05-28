import { IShow } from "../interface/ishow";
import { ICalculatePop } from "../interface/calculatePop";
import { State } from "./state";

export class Kingdom extends State implements ICalculatePop {
    constructor(override name:string,override capital:string,public population: number, shower:IShow){
        super();
        shower.show("Name " + this.name + " Capital " + this.capital + " Population " + this.population )
    }
   
    Calculate(){
        return "Населення 1 мільйон! "
    }
    
}