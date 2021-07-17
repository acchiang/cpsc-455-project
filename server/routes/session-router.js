const express = require('express');
const router = express.Router();

const Session = require('../models/session-model').model

const generateSessionId = () => {
  const arr = Array.from({length: 8}, () => Math.floor(Math.random() * 256))
  return Array.from(arr, (val) => val.toString(16)).join('')
}

const getUniqueSessionId = async () => { 
  let id = generateSessionId();
  while (await Session.exists({_id: id})) {
    id = generateSessionId();
  }
  return id;
}

router.post('/', async (req, res) => {
  const sessionId = await getUniqueSessionId();
  const session = new Session({
    _id: sessionId,
    name: req.body.sessionName || sessionId,
    users: [],
    menuTotalSoFar: 0,
    tipTotalSoFar: 0
  })
  session.save()
  // TODO: set owner of session after christy's pr
  res.send(sessionId)
})

router.put('/:sessionId', async (req, res) => {
  const body = req.body
  const sessionId = req.params.sessionId
  Session.findByIdAndUpdate(sessionId, {name: body.name},
    { new: true },
    function(err, response) {
      if (err) {
        console.log("Error: " + err);
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
});

router.get('/:sessionId/order-screen', async (req, res) => {
  const sessionId = req.params.sessionId
  const session = await Session.findById(sessionId, { __v: 0, createdAt: 0, updatedAt: 0 })
  session ? res.send(session) : res.sendStatus(404)
})

module.exports = router
