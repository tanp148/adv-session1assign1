import { SampPage } from './app.po';

describe('samp App', () => {
  let page: SampPage;

  beforeEach(() => {
    page = new SampPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
