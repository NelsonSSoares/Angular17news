import { InputTransformComponent } from './components/input-transform/input-transform.component';
import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
export interface User {
    id: number;
    name: string;
    age: string;
    profession: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTransformComponent],
  template: `

    <app-input-transform [user]="userDatasList[0]" [age]="userDatasList[0].age" [showUserAge]="showUser"/>


    <!-- <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;"> -->

      <!-- <button (click)="renderBlock = true">Renderizar titulo</button> -->
      <!-- <h3 #studying> I am Studying</h3> -->

      <!--- on interaction(references with #)/ on timer(2s)/ viewport(references with #)/ imediate/ idle-->
      <!-- @defer(when renderBlock) {
        <h3 style="color: red;"> Element rendered on interaction</h3>

      }@loading {
        <span style="color: green;"> Loading Element to render</span>
      }
      @placeholder {
        <span style="color: blue;"> Placeholder Element to render</span>
      }@error {
        <span style="color: red;"> Error Element to render</span>
      } -->

      <!-- @defer {
        <h3 style="color: red;"> Second Element to render</h3>

      }@loading {
        <span style="color: green;"> Loading Element to render</span>
      }
      @placeholder {
        <span style="color: blue;"> Placeholder Element to render</span>
      }@error {
        <span style="color: red;"> Error Element to render</span>
      } -->

    <!--
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



  @if(user.profession === 'Software Engineer'){

    <span style="color: blue">{{user.name}} is {{user.profession}}</span>

  }@else if(user.profession === 'DevOps Engineer'){

    <span style="color: yellow">{{user.name}} is {{user.profession}}</span>

  }@else if(user.profession === 'Product Manager'){

    <span style="color: red">{{user.name}} is {{user.profession}}</span>

  }@else {

    <span style="color: black">{{user.name}} is {{user.profession}} and your age is {{user.age}}</span>
  }

}@empty{
  <span>No user found</span>
} -->
<!-- </div> -->
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {



  destroyedRef = Inject(DestroyRef);
  title = 'learnAngular17';
  showUser = "true";
  renderBlock: boolean = false;

  userDatasList: Array<User> = [{
    id: 1,
    name: 'John Doe',
    age: "30",
    profession: 'Software Engineer'
  }, {
    id: 2,
    name: 'Jane Smith',
    age: "25",
    profession: 'Data Scientist'
  }, {
    id: 3,
    name: 'Alice Johnson',
    age: "28",
    profession: 'Product Manager'
  },
  {
    id: 4,
    name: 'Bob Brown',
    age: "35",
    profession: 'UX Designer'
  }, {
    id: 5,
    name: 'Charlie Davis',
    age: "32",
    profession: 'DevOps Engineer'
  }]

  userDatas$ = of(this.userDatasList);

  ngOnInit(): void {
    this.userDatas$
    .pipe(takeUntilDestroyed(this.destroyedRef))
    .subscribe({
      next: (response) => {
        console.log("User datas in Observable: ",response);
      }
    });
  }

}
