const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.service.js");

// Create a new cart item
async function createCartItem(cartItemData) {
  try {
    const cartItem = new CartItem(cartItemData);
    cartItem.quantity = 1;
    cartItem.price = cartItem.product.price * cartItem.quantity;
    cartItem.discountedPrice =
      cartItem.product.discountedPrice * cartItem.quantity;

    const createdCartItem = await cartItem.save();
    return createdCartItem;
  } catch (err) {
    throw new Error("error in createCartItem: " + err.message);
  }
}

// Update an existing cart item
async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    // console.log("cartItemData ",item)

    if (!item) {
      throw new Error("cart item not found : ", cartItemId);
    }
    const user = await userService.findUserById(item.userId);

    if (!user) {
      throw new Error("user not found : ", userId);
    }

    if (user.id === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You can't update another user's cart_item");
    }
  } catch (err) {
    throw new Error("error in updateCartItem: " + err.message);
  }
}

// Check if a cart item already exists in the user's cart
async function isCartItemExist(cart, product, size, userId) {
  try {
    const cartItem = await CartItem.findOne({ cart, product, size, userId });
    return cartItem;
  } catch (err) {
    throw new Error("error in isCartItemExist: " + err.message);
  }
}

// Remove a cart item
async function removeCartItem(userId, cartItemId) {
  // console.log(`userId - ${userId}, cartItemId - ${cartItemId}`);
  try {
    const cartItem = await CartItem.findById(cartItemId);
    const user = await userService.findUserById(cartItem.userId);
    const reqUser = await userService.findUserById(userId);

    if (user.id === reqUser.id) {
      return await CartItem.findByIdAndDelete(cartItem.id);
    } else {
      throw new UserException("You can't remove another user's item");
    }
  } catch (err) {
    throw new Error("error in removeCartItem: " + err.message);
  }
}

// Find a cart item by its ID
async function findCartItemById(cartItemId) {
  try {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    
    if (cartItem) {
      return cartItem;
    } else {
      throw new CartItemException(`CartItem not found with id: ${cartItemId}`);
    }
  } catch (err) {
    throw new Error("error in findCartItemById: " + err.message);
  }
}

module.exports = {
  createCartItem,
  updateCartItem,
  isCartItemExist,
  removeCartItem,
  findCartItemById,
};
