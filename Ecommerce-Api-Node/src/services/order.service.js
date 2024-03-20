const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");
const OrderItem = require("../models/orderItem.model.js");
const cartService = require("../services/cart.service.js");

// creating order by user id & shipp address
async function createOrder(user, shippAddress) {
  try {
    let address;
    if (shippAddress._id) {
      let existedAddress = await Address.findById(shippAddress._id);
      address = existedAddress;
    } else {
      address = new Address(shippAddress);
      address.user = user;
      await address.save();

      user.addresses.push(address);
      await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
      const orderItem = new OrderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice,
      });

      const createdOrderItem = await orderItem.save();
      orderItems.push(createdOrderItem);
    }

    const createdOrder = new Order({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discounte: cart.discounte,
      totalItem: cart.totalItem,
      shippingAddress: address,
      orderDate: new Date(),
      orderStatus: "PENDING", // Assuming OrderStatus is a string enum or a valid string value
      "paymentDetails.status": "PENDING", // Assuming PaymentStatus is nested under 'paymentDetails'
      createdAt: new Date(),
    });

    const savedOrder = await createdOrder.save();

    // for (const item of orderItems) {
    //   item.order = savedOrder;
    //   await item.save();
    // }

    return savedOrder;
  } catch (err) {
    throw new Error("error in createOrder: " + err.message);
  }
}

// update order stataus as PLACED
async function placedOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
  } catch (err) {
    throw new Error("error in placedOrder: " + err.message);
  }
}

// update order stataus as CONFIRMED
async function confirmedOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
  } catch (err) {
    throw new Error("error in confirmedOrder: " + err.message);
  }
}

// update order stataus as SHIPPED
async function shipOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
  } catch (err) {
    throw new Error("error in shipOrder: " + err.message);
  }
}

// update order stataus as DELIVERED
async function deliveredOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
  } catch (err) {
    throw new Error("error in DELIVERED: " + err.message);
  }
}

// canceling order by order id
async function cancelledOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED"; // Assuming OrderStatus is a string enum or a valid string value
    return await order.save();
  } catch (err) {
    throw new Error("error in cancelledOrder: " + err.message);
  }
}

// finding order by id
async function findOrderById(orderId) {
  try {
    const order = await Order.findById(orderId)
      .populate("user")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shippingAddress");

    return order;
  } catch (err) {
    throw new Error("error in findOrderById: " + err.message);
  }
}

// getting user order history
async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({
      user: userId,
      orderStatus: "PLACED",
    })
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
        },
      })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

// get all orders
async function getAllOrders() {
  return await Order.find()
    .populate({
      path: "orderItems",
      populate: {
        path: "product",
      },
    })
    .lean();
}

// deleting order by id
async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  if (!order) throw new Error("order not found with id ", orderId);

  await Order.findByIdAndDelete(orderId);
}

module.exports = {
  createOrder,
  placedOrder,
  confirmedOrder,
  shipOrder,
  deliveredOrder,
  cancelledOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};
