export default class ShoppingCart {
  constructor(cartOwner) {
      this._cartOwner = cartOwner;
      this._cartItems = {};
      this._totalPrice = 0;
  }

  addItem(itemName, price, quantity) {
      this._cartItems.itemName = itemName;
      this._totalPrice = price * quantity;
  }

  removeItem(itemName, price, quantity) {
      delete this._cartItems[itemName];
  }

  checkout(amountPaid) {
      return this._totalPrice - amountPaid;
  }

  getCartItems() {
    return this._cartItems;
  }

  getTotalPrice() {
      return this._totalPrice;
  }

  static print() {
      return 'I am a static method, I can only be accessed using the class name';
  }
}
