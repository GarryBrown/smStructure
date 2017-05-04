import { SmPage } from './app.po';

describe('sm App', function() {
  let page: SmPage;

  beforeEach(() => {
    page = new SmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
