import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector : '[tester]',
    host : {
        '(window:click)' : 'clickWindow($event)',
        'prop': 'expression',
        'role' : 'button'
    }
})
export class TestDirecive {
    el:HTMLElement;
    constructor(el:ElementRef){
        this.el = el.nativeElement;
    }
    clickWindow($event){
        console.log("el : ", this.el);
        console.log("clickWindow event : ", $event);
    }
}