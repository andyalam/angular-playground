import { AuctionAppPage } from './app.po';

describe('auction-app App', () => {
  let page: AuctionAppPage;

  beforeEach(() => {
    page = new AuctionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
