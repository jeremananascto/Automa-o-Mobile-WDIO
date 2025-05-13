import BasePage from "../base.page";

class MenuPage extends BasePage {
  get appNameHeader() {
    return $("android.widget.TextView");
  }
  get allMenuItemsElements() {
    return $$("android.widget.TextView");
  }
  get appMenuElement() {
    return $("~App");
  }
  get viewsMenuElement() {
    return $("~Views");
  }

  async openMenu() {
    await this.openUsingPackage(".ApiDemos");
  }

  async clickOnAppMenu() {
    await this.appMenuElement.click();
  }

  async clickOnViewsMenu() {
    await this.viewsMenuElement.click();
  }
}
export default new MenuPage();
