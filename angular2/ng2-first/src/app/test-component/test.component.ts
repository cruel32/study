import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    'selector' : "test",
    'template' : `
        <div class="test">{{testObj.key}} : {{testObj.value}}</div>
        <test2-component [inpTest2]="{key:' bottom',value:' 30px'}"></test2-component>
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