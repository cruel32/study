import { AfterViewInit, Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({selector:"item"})
export class Item {
  @Input() status:boolean;
}

@Component({
  selector: 'item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})

export class ItemComponent {
  displayAction(){
    alert("ItemComponent 입니다");
  }
}

@Component({
  selector : "app-view-child",
  templateUrl : './app-view-child.component.html'
})

export class ViewChildComponent {
  @ViewChild(Item)
  set item(v:Item){
    setTimeout(()=>{this.status = v.status},0);
  }
  @ViewChild(ItemComponent) ItemComponentCons : ItemComponent;
  isShow:boolean = true;
  status:boolean;
  toggle(){
    this.isShow = !this.isShow;
  }
  display(){
    this.ItemComponentCons.displayAction();
  }

}


