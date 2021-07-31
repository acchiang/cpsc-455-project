const express = require("express");

const SessionCtrl = require("../controllers/session-ctrl");

const router = express.Router();

router.get("/", SessionCtrl.getSessions);
router.post("/", SessionCtrl.createSession);
router.get("/:sessionId/get-session-name", SessionCtrl.getSessionName);
router.get("/:sessionId/order-screen", SessionCtrl.getSessionById);
router.put("/:sessionId/", SessionCtrl.updateSessionName);
router.put("/:sessionId/update-users", SessionCtrl.updateSessionUsers);
// router.put("/:sessionId/user/:userId/order", SessionCtrl.updateUserOrder);

module.exports = router;
