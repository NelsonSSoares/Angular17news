import { User } from './../../app.component';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';

//recomendado criar dentro de um arquivo separado, utils
function setUsernameToUpperCase(user: User): User {
  return {
    ...user,
    name: user.name.toUpperCase(),

  };

}

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

  @Input({required: true, transform: setUsernameToUpperCase}) public user!: User;
  @Input({required: true, transform: numberAttribute}) public age!: string;
  public userAge!: number;
  constructor() { }

  ngOnInit() {
    console.log(typeof this.userAge);

  }

}
