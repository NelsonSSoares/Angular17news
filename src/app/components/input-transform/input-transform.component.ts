import { User } from './../../app.component';
import { booleanAttribute, Component, Input, numberAttribute, OnInit } from '@angular/core';

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
   @if(showUserAge){

   }
  `,
})
export class InputTransformComponent implements OnInit {

  @Input({required: true, transform: setUsernameToUpperCase})
   public user!: User;
  @Input({required: true, transform: numberAttribute})
   public age!: string;
  @Input({required: true, transform: booleanAttribute})
  public showUserAge!: boolean;

  constructor() { }

  ngOnInit() {
    console.log(typeof this.showUserAge);

  }

}
