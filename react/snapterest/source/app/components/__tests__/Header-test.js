jest.dontMock('../Header.react');

describe('Header component', function () {
  it('renders provided header text', function () {
    let React = require('react');
    let ReactDOM = require('react-dom');
    let TestUtils = require('react-addons-test-utils');
    let Header = require('../Header.react');

    let header = TestUtils.renderIntoDocument(
      <Header text="Testing..." />
    );
    let actualHeaderText = ReactDOM.findDOMNode(header).textContent;

    expect(actualHeaderText).toBe('Testing...');
    
    let defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    );
    let actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;
    
    expect(actualDefaultHeaderText).toBe('Default header');
  });
});