import { Component, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { CalculateResultService } from './calculate-result.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculator';
  sciMode = false;
  number1: number = null;
  number2: number = null;
  answer: number | string;
  simpleOperators = ['+', '-', '*', '/'];
  sciOperators = ['%'];

  @ViewChild('modButton') modButton: ElementRef;
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('answerTag') answerText: ElementRef;

  constructor(private calc: CalculateResultService, private renderer: Renderer2){}

  getAnswer(event){
    let operator = event.target.innerText;
    this.answer = this.calc.calculateResult(this.number1, this.number2, operator);
    if (typeof this.answer === 'string'){
      alert(this.answer);
    }
  }
  isNumber(val): boolean{
    return typeof val === 'number';
  }

  resetCalc(){
    this.number1 = 0;
    this.number2 = 0;
    this.answer = '';
  }

  toggleMode(event){

    this.sciMode = !this.sciMode;
    if(this.sciMode === true){
      document.body.style.background = 'black';
      this.renderer.setProperty(this.toggleButton.nativeElement, 'innerText', 'Standard');
      this.renderer.setStyle(
        this.modButton.nativeElement,
        'display',
        'block'
      );

    }
    else{
      document.body.style.background = '#343f4f';
      this.renderer.setProperty(this.toggleButton.nativeElement, 'innerText', 'Scientific');
      this.renderer.setStyle(
        this.modButton.nativeElement,
        'display',
        'none'
      );
    }
  }

}
