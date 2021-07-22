import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  title: string = "Calculation Demo";

  constructor() { }

  ngOnInit(): void {
  }

  addition(num1: number, num2: number): number {
    return num1 + num2;
  }

}
