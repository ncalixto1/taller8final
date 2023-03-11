import express from "express";
import {
    getCustomers,
    postImportCustomers,
    postCustomers
} from "../controllers/client.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.post("/importcustomers", postImportCustomers);
router.post("/newcustomers", postCustomers);


export default router;