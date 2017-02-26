import { Component } from '@angular/core';

@Component({
  selector: 'nested-child',
  template: `
    <div>
      자식
      <nested-grandson></nested-grandson>
    </div>
  `,
  styles: [`div {border:2px solid orange; padding:10px; }`]
})
export class NestedChildComponent {

}
