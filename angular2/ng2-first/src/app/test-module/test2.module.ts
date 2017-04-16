import { NgModule } from '@angular/core';
import { TestDirecive } from '../test-directive/test.directive';
import { TestPipe } from '../test-pipe/test.pipe';

@NgModule({
    imports : [],
    exports : [
        TestDirecive,
        TestPipe
    ],
    providers : [],
    declarations : [
        TestDirecive,
        TestPipe
    ]
})
export class Test2Module {}