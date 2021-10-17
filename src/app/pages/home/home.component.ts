import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public testimonialStorage: any[] = [{
    project_name: 'The Virtual X',
    project_image: 'asdasda/asdasd/asdasd'
  },
  {
    project_name: 'The Money Circle',
    project_image: 'asdasda/asdasd/asdasd'
  },
  {
    project_name: 'Champ Chaser Game',
    project_image: 'asdasda/asdasd/asdasd'
  },
  {
    project_name: 'Launch Rocket',
    project_image: 'asdasda/asdasd/asdasd'
  },
  {
    project_name: 'Security Span',
    project_image: 'asdasda/asdasd/asdasd'
  },
  {
    project_name: 'Data Access X',
    project_image: 'asdasda/asdasd/asdasd'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
