import { TeachMeWebPage } from './app.po';

describe('teach-me-web App', function() {
  let page: TeachMeWebPage;

  beforeEach(() => {
    page = new TeachMeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
