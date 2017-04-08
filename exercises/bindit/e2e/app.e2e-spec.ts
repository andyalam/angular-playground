import { BinditPage } from './app.po';

describe('bindit App', () => {
  let page: BinditPage;

  beforeEach(() => {
    page = new BinditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
