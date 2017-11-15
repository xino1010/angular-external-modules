import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: 'component1.component.html',
  styleUrls: ['component1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
