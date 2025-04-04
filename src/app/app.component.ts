import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
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
