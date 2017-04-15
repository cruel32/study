import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    'name' : 'testPipe'
})
export class TestPipe implements PipeTransform {
    transform(value,param){
        console.log(`value : ${value}`);
        console.log(`param : ${param.pipeKey}`);
        return value+'?'+param.pipeKey
    }
}