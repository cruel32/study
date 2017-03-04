import { Component } from '@angular/core';

@Component({
  selector: 'nested-parent',
  template: `
    <div class="parent">
      부모
      <nested-child></nested-child>
    </div>
  `,
  styleUrls: ["parent.css"]
})
export class NestedParentComponent {

}
