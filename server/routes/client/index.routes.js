const homeRoutes = require ("./home.routes.js")
const productsRoutes = require ("./products.routes.js")
const loginRoutes = require ("./authen.routes.js")
const registerRoutes = require ("./register.routes.js")
const cartRoutes = require ("./cart.routes.js")
const orderRoutes = require ("./order.routes.js")
const otpRoutes = require ("./otp.routes.js")
const cartMiddleware = require("../../middlewares/client/cart.middleware")
const useMiddleware = require("../../middlewares/client/user.middleware")
module.exports = (app) =>{
    app.use(cartMiddleware.cartId)
    app.use("/",homeRoutes)
    app.use("/user",useMiddleware.requireAuthClient,homeRoutes)
    app.use("/products",productsRoutes)
    app.use("/login",loginRoutes)
    app.use("/register",registerRoutes)
    app.use("/cart",cartRoutes)
    app.use("/order",orderRoutes)
    app.use("/otp",otpRoutes)
}