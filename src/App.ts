import { OperacoesMatematicas } from "./calculadoraClass/OperacoesMatematicas";

const a = 20;
const b = 5;

console.log(`Soma: ${OperacoesMatematicas.somar(a, b)}`);
console.log(`Subtração: ${OperacoesMatematicas.subtrair(a, b)}`);
console.log(`Multiplicação: ${OperacoesMatematicas.multiplicar(a, b)}`);
console.log(`Divisão: ${OperacoesMatematicas.dividir(a, b)}`);