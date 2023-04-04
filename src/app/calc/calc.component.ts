import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  	num1 : number = 0;
    num2 : number = 0;
    result : number = 0;

    somar(){
      this.result = this.num1 + this.num2;
    }

    menos(){
      this.result = this.num1 - this.num2;
    }

    multiplicar(){
      this.result = this.num1 * this.num2;
    }

    dividir(){
      this.result = this.num1 / this.num2;
    }


}
