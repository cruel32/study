jest.dontMock('../Button.react');

describe('Button component', function () {
  it('calls handler function on click', function () {
    let React = require('react');
    let TestUtils = require('react-addons-test-utils');
    let Button = require('../Button.react');
    let handleClick = jest.genMockFunction();

    let button = TestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );
    let buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    
    TestUtils.Simulate.click(buttonInstance);
    
    expect(handleClick).toBeCalled();
    
    let numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
    
    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
});