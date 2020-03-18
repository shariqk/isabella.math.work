import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export interface boardItem {
  n: number;
  selected: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  //@ViewChild('inputAnswer', null) inputAnswer: ElementRef;


  board: boardItem[] = [];

  number1: number = 0
  number2: number = 0;
  //result: number = 0;
  //resultText = '';

  readonly board_size = 37;
  readonly max_number = 20;

  constructor(
  ) {


  }

  ngAfterViewInit() {
    this.generateBoard();
    this.generateNumbers();

  }

  checkAnswer(b: boardItem) {
    if(!b.selected && this.number1+this.number2==b.n) {
      b.selected = true;

      alert("Yaay!!! You got it.");

      this.generateNumbers();
    }
    else {
      alert("Let's keep trying...");
    }

  }

  generateNumbers() {
    this.number1 = Math.ceil(Math.random() * this.max_number);
    this.number2 = Math.ceil(Math.random() * this.max_number);
    //(this.inputAnswer as any).setFocus();
    //
    //document.getElementById("#inputAnswer").focus();
    //console.log(this.inputAnswer);
  }

  generateBoard() {
    this.board = [];

    for(let i=0; i<this.board_size*20; i++) {
      const number = Math.ceil(Math.random() * this.board_size);
      if(number>1 && this.board.filter(b => b.n == number).length==0) {
        this.board.push({
          n: number,
          selected: false
        });

        if(this.board.length>=this.board_size) {
          break;
        }
      }
    };



  }

}
