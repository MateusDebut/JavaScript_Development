import { Stack } from "./stack";

let pilha: Stack = new Stack();

for (let index = 0; index < 10; index++) {
    pilha.push(index, "nome" + index);
}

for (let index = 0; pilha.top != null; index++) {
    console.log(pilha.pop()?.name);
}