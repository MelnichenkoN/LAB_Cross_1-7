import { right_triangle} from "./right_triangle";

describe("тестування класу Right_Triangle",() => {
    let rt:right_triangle;
    beforeEach(()=>{
        rt = new right_triangle("Right_Triangle", 3 , 4)
    })

    fit("Створення екземпляру класу",()=>{
        expect(rt).toBeTruthy();
    })

    fit("Розрахунок площі прямокутного трикутника з катетами 3 та 4 см, очікуваний результат 6см^2", ()=>{
        rt.S();
        let res = rt.result;
        let res2 = 0.5*3*4;
        expect(res).toBe(res2);
    })
})