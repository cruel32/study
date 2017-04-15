import { NgModule } from '@angular/core';
import { TestPipe } from '../test-pipe/test.pipe';

@NgModule({
    imports : [],
    exports : [TestPipe],
    declarations : [
        TestPipe
    ]
})
export class Test3Module {}