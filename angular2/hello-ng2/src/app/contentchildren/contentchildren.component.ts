import { Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';

@Directive({selector:"word"})
export class Word {
  @Input() value:string;
}

@Component({
  selector : "word-group",
  styleUrls: ['contentchildren.component.scss'],
  template : `{{words}}`
})

export class WordGroup {
  @ContentChildren(Word) word:QueryList<Word>;
  get words():string {
    return this.word ? this.word.map(p=>p.value).join(', ') : '';
  }
}

@Component({
  selector: 'example-app',
  templateUrl: './contentchildren.component.html'
})

export class ContentChildrenComp {
  cnt:number = 0;
  add(){
    if(this.cnt == 4){
      this.cnt = 0;
    } else {
      this.cnt++;
    }
  }
}
