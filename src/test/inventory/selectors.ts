export const selectors = {
  login: {
    usernameInput: 'input[data-test="username"]',
    passwordInput: 'input[data-test="password"]',
    loginButton: 'input[data-test="login-button"]',
  },
  product: {
    labelName: '[data-test="inventory-item-name"]',
    labelDesc: '[data-test="inventory-item-desc"]',
    labelPrice: '[data-test="inventory-item-price"]',
    addCarButton: '[data-test="add-to-cart"]',
  },
  menu: {
    catalogList: '[data-test="inventory-list"]',
    itemLogoutMenu: '[data-test="logout-sidebar-link"]',
    menuButton: 'button[name="Open Menu"]',
    carButton: '[data-test="shopping-cart-link"]',
    itemProduct:'//*[@id="inventory_container"]/div/div[2]',
    itemProductname:'[data-test="inventory-item-name"]',
    itemProductdesc:'[data-test="inventory-item-desc"]',
    itemProductprice:'[data-test="inventory-item-price"]'
  },
};
//*[@id="inventory_container"]/div
//*[@id="inventory_container"]/div/div[1]
//*[@id="inventory_container"]/div/div[2]
//*[@id="inventory_container"]/div/div[3]