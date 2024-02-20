import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-soft',
  templateUrl: './card-soft.component.html',
  styleUrls: ['./card-soft.component.css']
})
export class CardSoftComponent implements OnInit {

  constructor() { }

  @Input()
  titulo: string =''
  @Input()
  photo: string =''
  @Input()
  descricao: string =''

  ngOnInit(): void {
  }

}
