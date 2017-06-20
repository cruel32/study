import './test.scss'
export class testClass {
    constructor(){
        this.status = 'show';
    }
    show(){
        console.log("class show : ", this.status);
    }
    hide(){
        console.log("class hide : ", this.status);
    }
}

export class testClass2 {
    constructor(){
        this.status = 'hide';
    }
    show(){
        console.log("class show : ", this.status);
    }
    hide(){
        console.log("class hide : ", this.status);
    }
}

