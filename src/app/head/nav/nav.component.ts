import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    public home: string = 'Home'
    public service: string = 'Services'
    public contact: string = 'Contact'
    public value: string;

  constructor() {
    this.value = this.home
   }

  ngOnInit(): void {
  }
  public reload() {
    location.reload()
  }
  
}
