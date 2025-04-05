import { User } from './../../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-transform',
  standalone: true,
  styleUrls: [],
  template: `
    <h2>Nome: {{user?.name}}</h2>
    <h2>Idade: {{user?.age}}</h2>
    <h2>Profissão: {{user?.profession}}</h2>
  `,
})
export class InputTransformComponent implements OnInit {

  @Input({required: true}) public user!: User;

  constructor() { }

  ngOnInit() {
  }

}
