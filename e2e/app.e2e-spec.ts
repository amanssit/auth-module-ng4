import { AuthModuleNg4Page } from './app.po';

describe('auth-module-ng4 App', () => {
  let page: AuthModuleNg4Page;

  beforeEach(() => {
    page = new AuthModuleNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
