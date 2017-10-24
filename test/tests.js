const ShoppingCart = require('./shopping_cart.js').shopping_cart;
const Shop = require('./shop.js').shop;
const assert = require('chai').assert;

describe('ShoppingCart', () => {

  describe('ShoppingCart as a class', () => {
    it('should allow new instances to be created', () => {
      assert.equal(
        new ShoppingCart('Idris').toString(),
        '[object Object]'
      );
    });
    it('confirms instances of it can be created', () => {
      assert.equal(new ShoppingCart('Idris') instanceof ShoppingCart, true);
    });
  });

  describe('instance methods are correctly implemented', () => {          
    const idrisCart = new ShoppingCart('Idris');
    idrisCart.addItem('apple', 60, 2);
    const totalPrice = idrisCart.getTotalPrice();

    it('confirms addQuantity method works', () => {
      assert.equal(totalPrice, 120);
    });

    it('confirms getCartItems method works', () => {
      assert.equal(idrisCart.getCartItems().itemName, 'apple');
    });
  });

  describe('inheritance is demonstrated', () => {
      
    it('should return true with Shop.prototype instanceof ShoppingCart', () => {
      assert.equal(Shop.prototype instanceof ShoppingCart, true); 
    });

    it('confirms polymorphism is demonstrated', () => {
      assert.equal(new Shop('Idris') instanceof ShoppingCart, true); 
    });
  });

  describe('static methods are implemented', () => {      
    it('should return \'I am a static method, I can only be accessed using the class name\'', () => {
      assert.equal(
        ShoppingCart.print(),
        'I am a static method, I can only be accessed using the class name'
      );
    });
  });
});
