const express = require("express");

const SessionCtrl = require("../controllers/session-ctrl");

const router = express.Router();

router.post("/", SessionCtrl.createSession);
router.post("/:sessionId/order-screen", SessionCtrl.getSessionById);

module.exports = router;
