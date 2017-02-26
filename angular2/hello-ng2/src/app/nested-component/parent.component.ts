import { Component } from '@angular/core';

@Component({
  selector: 'nested-parent',
  template: `
    <div>
      부모
      <nested-child></nested-child>
    </div>
  `,
  styles: [`div {border:2px solid blue; padding:10px; }`]
})
export class NestedParentComponent {

}
