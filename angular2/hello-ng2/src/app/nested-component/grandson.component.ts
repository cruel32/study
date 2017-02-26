import { Component } from '@angular/core';

@Component({
  selector: 'nested-grandson',
  template: `
    <div>손자</div>
  `,
  styles: [`div {border:2px solid #ccc; padding:10px; }`]
})
export class NestedGrandsonComponent {

}
