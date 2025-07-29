import { renderCheckout } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/priceSummary.js";
import '../data/cart-class.js';
import { loadProducts } from "../data/products.js";
// import '../data/backend-practice.js'


new Promise((resolve)=>{ //a promise is a class this is used to handle asynchronus code 

    loadProducts(()=>{
        resolve() //this resolve is a built in function which makes it run the asyncronus code completely first and then it goes to another step promise makes two seperate lines of execution so js can so multiple tasks at same time

    })

}).then(()=>{
        renderCheckout()
        renderPaymentSummary()         
    })








