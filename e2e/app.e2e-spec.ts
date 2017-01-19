import { BOBPage } from './app.po';

describe('bob App', function() {
  let page: BOBPage;

  beforeEach(() => {
    page = new BOBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
