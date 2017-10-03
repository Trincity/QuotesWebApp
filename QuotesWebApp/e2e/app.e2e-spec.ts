import { QuotesWebAppPage } from './app.po';

describe('quotes-web-app App', () => {
  let page: QuotesWebAppPage;

  beforeEach(() => {
    page = new QuotesWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
