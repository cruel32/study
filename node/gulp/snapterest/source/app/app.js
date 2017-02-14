import test from './components/com';
for(let key in test.test){
    test.test[key]();
}

let React = require("react");
let ReactDom = require("react-dom");

//1. React.createElement(type,props,children);
// let reactElement = React.createElement('h1',{className:'header'}, 'This is react');
// ReactDom.render(reactElement, document.getElementById('react-application'));


//2.
// let h1 = React.createElement('h1', {className : 'header', key : 'header'}, 'This is React');
// let p = React.createElement('p', {className : 'content', key : 'content'}, "And that's how it works.");
// let reactFragment = [h1,p];
// let section = React.createElement('section', {className : 'container'}, reactFragment);
// ReactDom.render(section, document.getElementById('react-application'));

//3.
// let listItemElement1 = React.createElement('li',{className:'item-1',key : 'item-1'}, 'item 1');
// let listItemElement2 = React.createElement('li',{className:'item-2',key : 'item-2'}, 'item 2');
// let listItemElement3 = React.createElement('li',{className:'item-3',key : 'item-3'}, 'item 3');
// let reactFragment = [listItemElement1,listItemElement2,listItemElement3];
// let listOfItems = React.createElement('ul', {className : 'list-of-items'}, reactFragment);
// ReactDom.render(listOfItems, document.getElementById('react-application'));

//4.
// let createListItemElement = React.createFactory('li');
// let listItemElement1 = createListItemElement({className : 'item-1', key : 'item-1'}, 'Item 1');
// let listItemElement2 = createListItemElement({className : 'item-2', key : 'item-2'}, 'Item 2');
// let listItemElement3 = createListItemElement({className : 'item-3', key : 'item-3'}, 'Item 3');
// let reactFragment = [listItemElement1,listItemElement2,listItemElement3];
// let listOfItems = React.createElement('ul', {className : 'list-of-items'}, reactFragment);
// ReactDom.render(listOfItems, document.getElementById('react-application'));

//5.
// let listItemElement1 = React.DOM.li({className : 'item-1', key : 'item-1'},'Item -1');
// let listItemElement2 = React.DOM.li({className : 'item-2', key : 'item-2'},'Item -2');
// let listItemElement3 = React.DOM.li({className : 'item-3', key : 'item-3'},'Item -3');

// let reactFragment = [listItemElement1,listItemElement2,listItemElement3];
// let listOfItems = React.DOM.ul({className : 'list-of-items'}, reactFragment);
// ReactDom.render(listOfItems, document.getElementById('react-application'));

//6.
// let ReactDomServer = require('react-dom/server');
// let reactElement = React.createElement('h1',{className:'header'}, 'This is react');
// // ReactDomServer.renderToString(reactElement,document.getElementById('react-application'));
// ReactDomServer.renderToStaticMarkup(reactElement,document.getElementById('react-application'));

/*let listOfItems =
<ul class="list-of-items">
    <li className="item-1">Item 1</li>
    <li className="item-2">Item 2</li>
    <li className="item-3">Item 3</li>
</ul>;
ReactDom.render(listOfItems, document.getElementById('react-application'));*/

//7.
let ReactClass = React.createClass({
    getInitialState : function(){
        return {
            isHeaderHidden : false
        }
    },
    handleClick : function(){
        console.log("this : ", this);
        this.setState({
            isHeaderHidden : !this.state.isHeaderHidden
        });
    },
    render : function(){
        let title = "Stateful React Component";
        let headerElement = React.createElement('h1',{className :'header', key:'header'},title);
        let buttonElement = React.createElement('button',{className :'btn btn-default', onClick : this.handleClick, key : 'button'}, 'Toggle header');
        
        if(this.state.isHeaderHidden){
            return React.createElement('div',null,[buttonElement]);
        }
        return React.createElement('div',null,[buttonElement,headerElement]);
    }
})
let reactComponentElement = React.createElement(ReactClass);
let reactComponent = ReactDom.render(reactComponentElement, document.getElementById('react-application'));

