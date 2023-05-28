import { Show_Console } from './show_console';
import { Show_Desktop } from './show_desktop';
import { State } from './state';
import { Republic } from './republic';
import { Monarchy } from './monarchy';

describe('Republic and Monarchy test', () => {
let shower: Show_Console;
let shower1: Show_Desktop;
let republic: Republic;
let monarchy: Monarchy;
beforeEach(() => {
shower = new Show_Console();
shower1 = new Show_Desktop();
republic = new Republic ("Англія","Лондон",60,shower); 
monarchy = new Monarchy ("Україна","Київ",44,shower1); 
})
fit ("Створення екземпляру класу Shower", () => {
expect (shower).toBeTruthy();
})
fit ("Створення екземпляру класу Shower Desktop", () => {
    expect (shower1).toBeTruthy();
})
fit ("Створення екземпляру класу Monarchy", () => {
    expect (monarchy).toBeTruthy();
})
fit ("Створення екземпляру класу Republic", () => {
    expect (republic).toBeTruthy();
})
});