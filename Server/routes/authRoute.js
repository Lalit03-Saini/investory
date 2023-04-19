const express = require("express");
const { authMiddleware, isAdmin, subAdmin } = require("../middlewares/authMiddlewares");
const { createUser, loginUserCtrl, forgotPasswordToken, updatePassword, loginAdmin, logout, resetPassword, handleRefreshToken, deleteaUser, getauser, getallUser, blockUser, unblockUser, UpdatedUser, createAdmin, createsubAdmin } = require("../controller/userCtrl");
const router = express.Router();

router.post("/create", createUser);
router.post("/create-admin", createAdmin);
router.post("/create/subadmin", createsubAdmin);
router.post("/forgot-password-token", forgotPasswordToken);

router.put("/reset-password/:token", resetPassword);

router.put("/password", updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get("/refresh", handleRefreshToken);
router.get("/all-user", getallUser);
router.get("/:id", authMiddleware, isAdmin, getauser);
router.delete("/:id", authMiddleware, isAdmin, deleteaUser);
router.get("/logout", logout);
router.put("/edit-user",UpdatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);


module.exports = router;

