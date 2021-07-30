const express = require('express');
const MenuCtrl = require("../controllers/menu-ctrl");
const router = express.Router();

router.get("/", MenuCtrl.getMenus);
router.get("/:menuId", MenuCtrl.getMenuById);
router.put("/:menuId", MenuCtrl.addItemsToMenu);
router.post("/", MenuCtrl.createMenu);

module.exports = router;
