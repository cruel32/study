import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    'selector' : "test2-component",
    'template' : `
        <div class="test2" >{{testObj.key}} : {{testObj.value}}</div>
    `,
    'styles' : [`
        .test2 {color:orange; font-size:24px;}
    `]
})
export class Test2Component {
    testObj = {
        key : 'comp2',
        value : 'comp2val'
    }
}