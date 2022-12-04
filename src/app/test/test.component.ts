import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
    welcome {{name}}
  </h2>`,
  styles: []
})
export class TestComponent {
  public name = "Selamou";
  constructor(){}
  ngOnInit(){

  }

}
