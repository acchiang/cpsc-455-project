const express = require("express");

const SessionCtrl = require("../controllers/session-ctrl");

const router = express.Router();

router.get("/", SessionCtrl.getSessions);
router.post("/", SessionCtrl.createSession);
router.get("/:sessionId/get-session-name", SessionCtrl.getSessionName);
router.get(
  "/:sessionId/get-session-menu-total",
  SessionCtrl.getSessionMenuTotalSoFar
);
router.get(
  "/:sessionId/get-session-tip-total",
  SessionCtrl.getSessionTipTotalSoFar
);
router.get("/:sessionId/order-screen", SessionCtrl.getSessionById);
router.get(
  "/:sessionId/:sessionUserName/get-user-menu-total",
  SessionCtrl.getMenuTotalByUser
);
router.get(
  "/:sessionId/:sessionUserName/get-user-tip-total",
  SessionCtrl.getTipTotalByUser
);
router.put("/:sessionId/", SessionCtrl.updateSessionName);
router.put("/:sessionId/users", SessionCtrl.findOrCreateUserInSession);
router.put("/:sessionId/update_order", SessionCtrl.updateUserOrder);
router.put(
  "/:sessionId/update_user_menu_total",
  SessionCtrl.updateUserMenuTotal
);
router.put("/:sessionId/update_user_tip_total", SessionCtrl.updateUserTipTotal);
router.put(
  "/:sessionId/update_menu_total",
  SessionCtrl.updateSessionMenuTotalSoFar
);
router.put(
  "/:sessionId/update_tip_total",
  SessionCtrl.updateSessionTipTotalSoFar
);

module.exports = router;
