import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultService {
  answer: number;
  constructor() {
  }
  calculateResult(num1, num2, operator:string): number | string{

    if(num1 === null || num2 === null){
      return "Please enter both numbers!";
    }
    if (num2 === 0 && (operator === '/' || operator === '%')){
        return "Cannot divide by zero!";
    }
    if(num2 > num1 && operator === '-'){
      return "Second number is greater than first! Please enter larger value first.";
    }
    switch(operator){
      case '+':
        this.answer = num1 + num2;
        break;
      case '-':
        this.answer = num1 - num2;
        break;
      case '*':
        this.answer = num1 * num2;
        break;
      case '/':
        this.answer = num1 / num2;
        break;
      case '%':
        this.answer = num1 % num2;
        break;
    }
    let temp = this.answer.toFixed(2)
    this.answer = parseFloat(temp);
    return this.answer;
  }
}
