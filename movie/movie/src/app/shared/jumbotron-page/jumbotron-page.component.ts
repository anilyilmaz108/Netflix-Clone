import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron-page',
  templateUrl: './jumbotron-page.component.html',
  styleUrls: ['./jumbotron-page.component.css']
})
export class JumbotronPageComponent {
  @Input() title: any = "";
  @Input() play: any = "";
  @Input() info: any = "";
  @Input() getMovieVideoResult: any = "";
  @Input() desc: any = "";
  @Input() backdrop: any = "";
  @Input() path: any = "";
  @Input() movieId: any;
}
