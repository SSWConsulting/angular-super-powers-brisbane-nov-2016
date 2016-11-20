import { FirebootcampCrmDemoPage } from './app.po';

describe('firebootcamp-crm-demo App', function() {
  let page: FirebootcampCrmDemoPage;

  beforeEach(() => {
    page = new FirebootcampCrmDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fbc works!');
  });
});
