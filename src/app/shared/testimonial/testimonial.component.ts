import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  public hoverOverCard: boolean;
  @Input() testimonialStorage: any[] =[{}]

  constructor() { 
    this.hoverOverCard = false;
  }

  ngOnInit(): void {
  }



}
