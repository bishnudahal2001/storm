import { Component } from '@angular/core';
import Amplify from "aws-amplify";
const aws_exports = require('../aws-exports')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stormZtocks';
  ngOnInit() {
    Amplify.configure(aws_exports);
  }
}
