const User = require("../models/user-model").model;

getMenuTotalByUser = async (req, res) => {
  const { params: { userId } } = req;
  const user = await User.findById(userId, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  });
  user.menuTotal ? res.send(user.menuTotal) : res.sendStatus(404);
};

getTipTotalByUser = async (req, res) => {
  const { params: { userId } } = req;
  const user = await User.findById(userId, {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  });
  user.tipTotal ? res.send(user.tipTotal) : res.sendStatus(404);
};

module.exports = {
  getMenuTotalByUser,
  getTipTotalByUser
};
