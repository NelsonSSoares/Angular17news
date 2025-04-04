import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;">

@for (user of userDatasList; track user.id) {

  @switch (user.age) {
    @case (30) {
      <span> {{user.name}} is {{user.profession}} have 30 years old</span>
    }
    @case (25) {
      <span> {{user.name}} is {{user.profession}} have 25 years old</span>
    }
    @case (28) {
      <span> {{user.name}} is {{user.profession}} have 28 years old</span>
    }
    @case (35) {
      <span> {{user.name}} is {{user.profession}} have 35 years old</span>
    }
    @case (32) {
      <span> {{user.name}} is {{user.profession}} have 32 years old</span>
    }
    @default {
      <span> {{user.name}} is {{user.profession}} have unknown years old</span>
    }

  }



  <!-- @if(user.profession === 'Software Engineer'){

    <span style="color: blue">{{user.name}} is {{user.profession}}</span>

  }@else if(user.profession === 'DevOps Engineer'){

    <span style="color: yellow">{{user.name}} is {{user.profession}}</span>

  }@else if(user.profession === 'Product Manager'){

    <span style="color: red">{{user.name}} is {{user.profession}}</span>

  }@else {

    <span style="color: black">{{user.name}} is {{user.profession}} and your age is {{user.age}}</span>
  }
  }
    -->
}@empty{
  <span>No user found</span>
}
</div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learnAngular17';

  userDatasList: Array<{
    id: number;
    name: string;
    age: number;
    profession: string;
  }> = [{
    id: 1,
    name: 'John Doe',
    age: 30,
    profession: 'Software Engineer'
  }, {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    profession: 'Data Scientist'
  }, {
    id: 3,
    name: 'Alice Johnson',
    age: 28,
    profession: 'Product Manager'
  },
  {
    id: 4,
    name: 'Bob Brown',
    age: 35,
    profession: 'UX Designer'
  }, {
    id: 5,
    name: 'Charlie Davis',
    age: 32,
    profession: 'DevOps Engineer'
  }]


}
