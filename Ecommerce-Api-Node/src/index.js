const express=require("express")
const cors=require('cors');

const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

// auth router
const authRouter=require("./routes/auth.routes.js")
app.use("/auth",authRouter)

// user router
const userRouter=require("./routes/user.routes.js");
app.use("/api/users",userRouter)

// product router
const productRouter=require("./routes/product.routes.js");
app.use("/api/products",productRouter);

// admin router
const adminProductRouter=require("./routes/product.admin.routes.js");
app.use("/api/admin/products",adminProductRouter);

// cart router
const cartRouter=require("./routes/cart.routes.js")
app.use("/api/cart", cartRouter);

// cart item router
const cartItemRouter=require("./routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter);

// order router
const orderRouter=require("./routes/order.routes.js");
app.use("/api/orders",orderRouter);

// payment router
const paymentRouter=require("./routes/payment.routes.js");
app.use('/api/payments',paymentRouter)

// review router
const reviewRouter=require("./routes/review.routes.js");
app.use("/api/reviews",reviewRouter);

// rating router
const ratingRouter=require("./routes/rating.routes.js");
app.use("/api/ratings",ratingRouter);

// admin order routes handler
const adminOrderRoutes=require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders",adminOrderRoutes);

module.exports={app};