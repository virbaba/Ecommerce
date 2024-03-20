const express=require("express");
const router=express.Router();

// authentication via middleware
const authenticate = require("../middleware/authenticat.js");
const orderController=require("../controllers/order.controller.js")

router.post("/",authenticate,orderController.createOrder);
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);


module.exports=router;