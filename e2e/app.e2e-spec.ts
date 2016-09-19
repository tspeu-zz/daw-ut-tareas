import { TareasAppPage } from './app.po';

describe('tareas-app App', function() {
  let page: TareasAppPage;

  beforeEach(() => {
    page = new TareasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
