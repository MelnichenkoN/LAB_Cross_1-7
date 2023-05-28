import { Rivnobedr_triangle } from "./rivnobedr_triangle";

describe("тестування класу Rivnobedr_triangle",() => {
    let rt1:Rivnobedr_triangle;
    beforeEach(()=>{
        rt1 = new Rivnobedr_triangle("Rivnobedr_triangle", 4,5)
    })

    it("Створення екземпляру класу",()=>{
        expect(rt1).toBeTruthy();
    })

    it("Розрахунок площі рівнобедренного трикутника з сторонами 4 та 5 см, очікуваний результат 7.8см^2", ()=>{
        rt1.S();
        let res = rt1.result;
        let res2 = 0.5*5*Math.sqrt((4+0.5*5)*(4-0.5*5));
        expect(res).toBe(res2);
    })
})