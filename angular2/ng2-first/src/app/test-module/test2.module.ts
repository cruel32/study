import { NgModule } from '@angular/core';
import { TestDirecive } from '../test-directive/test.directive';

@NgModule({
    imports : [],
    exports : [
        TestDirecive
    ],
    providers : [],
    declarations : [
        TestDirecive
    ]
})
export class Test2Module {}