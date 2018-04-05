import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent {

  public title:string = 'app';

  constructor() { }

  ngOnInit() {

  }
}
