const express = require("express");

const { createProduct, updateProduct, deleteProduct, getaProduct, getAllProduct} = require("../controller/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.get("/:id", getaProduct);
router.get("/",getAllProduct)
//router.put("/rating",authMiddleware,rating);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;