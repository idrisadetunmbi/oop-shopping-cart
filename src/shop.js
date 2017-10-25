import ShoppingCart from './shopping_cart';

export default class Shop extends ShoppingCart {
  constructor(shopOwner) {
    super(shopOwner);
    this.quantity = 100;
  }

  removeQuantity() {
    return this.quantity - 1;
  }
}
