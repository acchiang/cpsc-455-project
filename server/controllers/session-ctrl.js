const Session = require("../models/session-model").model;

const generateSessionId = () => {
  const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 256));
  return Array.from(arr, val => val.toString(16)).join("");
};

const getUniqueSessionId = async () => {
  let id = generateSessionId();
  while (await Session.exists({ _id: id })) {
    id = generateSessionId();
  }
  return id;
};

createSession = (req, res) => {
  const sessionId = await getUniqueSessionId();
  const session = new Session({
    _id: sessionId,
    name: req.body.sessionName || sessionId,
    users: [],
    menuTotalSoFar: 0,
    tipTotalSoFar: 0
  });
  session.save();
  // TODO: set owner of session after christy's pr
  res.send(sessionId);
};

getSessionById = (req, res) => {
  const sessionId = req.params.sessionId;
  const session = await Session.findById(sessionId, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  });
  session ? res.send(session) : res.sendStatus(404);
};

module.exports = router;
