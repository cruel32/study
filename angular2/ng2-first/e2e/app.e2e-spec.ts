import { Ng2FirstPage } from './app.po';

describe('ng2-first App', () => {
  let page: Ng2FirstPage;

  beforeEach(() => {
    page = new Ng2FirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
