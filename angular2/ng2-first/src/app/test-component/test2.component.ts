import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    'selector' : "test2-component",
    'template' : `
        <div class="test2" tester>{{testObj.key}} : {{testObj.value | testPipe:{pipeKey:"pipe"} }}</div>
    `,
    'styles' : [`
        .test2 {color:blue; font-size:24px;}
    `]
})
export class Test2Component {
    @Output() val = new EventEmitter();
    @Input('inpTest2') set inpObj (val:any){
        this.testObj.key += val.key;
        this.testObj.value += val.value;
    };
    testObj = {
        key : 'keyName',
        value : 'valueCount'
    }
}