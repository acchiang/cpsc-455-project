const Session = require("../models/session-model").model;

const generateSessionId = () => {
  const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 256));
  return Array.from(arr, val => val.toString(16)).join("");
};

getSessions = async (req, res) => {
  return await Session.find({}, (err, sessions) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!sessions.length) {
      return res
        .status(404)
        .json({ success: false, error: `Session not found` });
    }
    return res.status(200).json({ success: true, data: sessions });
  }).catch(err => console.log(err));
};

getUniqueSessionId = async (req, res) => {
  let id = generateSessionId();
  while (await Session.exists({ _id: id })) {
    id = generateSessionId();
  }
  return id;
};

createSession = async (req, res) => {
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

getSessionById = async (req, res) => {
  const sessionId = req.params.sessionId;
  const session = await Session.findById(sessionId, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  });
  session ? res.send(session) : res.sendStatus(404);
};

getSessionName = async (req, res) => {
  const sessionId = req.params.sessionId;
  const sessionName = await Session.findById(sessionId, {
    name: 1
  });
  console.log(sessionName);
  sessionName ? res.send(sessionName) : res.sendStatus(404);
};

updateSessionName = async (req, res) => {
  const body = req.body;
  const sessionId = req.params.sessionId;
  Session.findByIdAndUpdate(
    sessionId,
    { name: body.name },
    { new: true },
    function(err, response) {
      if (err) {
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
};

updateSessionUsers = async (req, res) => {
  const body = req.body;
  const sessionId = req.params.sessionId;
  Session.findByIdAndUpdate(
    sessionId,
    { users: body.users },
    { new: true },
    function(err, response) {
      if (err) {
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
};

updateUserOrder = async (req, res) => {
  const { body } = req;
  const { params: { sessionId, userId } } = req
  const session = await getSessionById(sessionId)
  const { users } = session
  users.map((u) => {
    
  })
  Session.updateOne(
   { _id: sessionId, "users._id":  mongoose.Types.ObjectId(userId) },
   { $set: { "users.$.order" : order } }
  )
}

module.exports = {
  getSessions,
  createSession,
  getSessionById,
  getSessionName,
  updateSessionName,
  updateSessionUsers,
  updateUserOrder
};
