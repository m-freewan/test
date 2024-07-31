import { Component } from '@angular/core';
import { MatButtonModule } from './../../index';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
