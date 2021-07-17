const express = require("express");

const SessionCtrl = require("../controllers/session-ctrl");

const router = express.Router();

router.post("/", SessionCtrl.createSession);
router.get("/:sessionId/get-session-name", SessionCtrl.getSessionName);
router.get("/:sessionId/order-screen", SessionCtrl.getSessionById);

module.exports = router;
