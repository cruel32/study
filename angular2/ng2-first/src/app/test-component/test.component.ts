import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    'selector' : "test-component",
    'template' : `
        <div class="test" tester>{{testObj.key}} : {{testObj.value | testPipe:{pipeKey:"pipe"} }}</div>
    `,
    'styles' : [`
        .test {color:blue; font-size:24px;}
    `]
})
export class TestComponent {
    @Output() val = new EventEmitter();
    @Input('inpTest') set inpObj (val:any){
        this.testObj.key += val.key;
        this.testObj.value += val.value;
    };
    testObj = {
        key : 'keyName',
        value : 'valueCount'
    }
}