const express = require("express");
const UserCtrl = require("../controllers/user-ctrl");
const router = express.Router();

router.get("/:user-id/get-menu-total", UserCtrl.getMenuTotalByUser);
router.get("/:user-id/get-tip-total", UserCtrl.getTipTotalByUser);

module.exports = router;
