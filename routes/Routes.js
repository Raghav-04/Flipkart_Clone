import express from "express";

import { userSignup, userLoginIn } from "../controller/user-controller.js";
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway, paymentResult } from "../controller/payment-controller.js";

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLoginIn);

router.get('/products', getProducts);
router.get('/product/:id',getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResult);

//http://localhost:8000/product/product2

export default router;