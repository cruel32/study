import { NgModule } from '@angular/core';
import { TestComponent } from '../test-component/test.component';
import { Test2Module } from './test2.module';

@NgModule({
    imports : [Test2Module],
    exports : [TestComponent],
    providers : [],
    declarations : [
        TestComponent
    ]
})
export class TestModule {}