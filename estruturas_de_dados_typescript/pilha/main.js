"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var pilha = new stack_1.Stack();
for (var index = 0; index < 10; index++) {
    pilha.push(index, "nome" + index);
}
for (var index = 0; pilha.top != null; index++) {
    console.log((_a = pilha.pop()) === null || _a === void 0 ? void 0 : _a.name);
}
