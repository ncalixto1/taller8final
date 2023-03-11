import express from "express";
import { postCustomers, postImportCustomers } from "../controllers/securitytrax/post/customer.js";

import { getCustomers } from "../controllers/securitytrax/get/customer.js";

const router = express.Router();

router.post("/customer", postCustomers);
router.post("/importcustomer", postImportCustomers);

router.get("/customer", getCustomers);



export default router;