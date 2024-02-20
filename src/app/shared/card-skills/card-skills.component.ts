import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})
export class CardSkillsComponent implements OnInit {

  constructor() { }

  @Input() 
  photo:any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOlF5VQ7hUHTVWV0h2ntwCEcYvC1zdmTRwsLt04Ve6A&s'
  @Input() 
  descricao: string = 'HTML 5'


  ngOnInit(): void {
  }

}
