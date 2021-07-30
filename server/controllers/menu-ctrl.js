const Menu = require("../models/menu-model").model;
const Item = require("../models/item-model").model;

var menu = [
    {
        name: "salmon spaghetti",
        price: 10
    },
    {
        name: "rice pudding",
        price: 3
    },
    {
        name: "mint ice cream",
        price: 5
    },
    {
        name: "enchiladas",
        price: 3
    },
    {
        name: "oreo mcflurry",
        price: 5
    },
    {
        name: "tuna don",
        price: 10
    },
    {
        name: "falafel",
        price: 3
    },
    {
        name: "shoyu ramen",
        price: 12
    },
    {
        name: "beef tripe pho",
        price: 9
    },
    {
        name: "butter chicken and naan",
        price: 13
    },
    {
        name: "tiramisu",
        price: 5
    }
]

getMenus = async (req, res) => {
    Menu.find({},
      function(err, response) {
        if (err) {
          console.log("Error: " + err);
          return res.json({
            message: "Can't fetch menu"
          });
        }
        return res.send(response);
      }
    );
  }

createMenu = async (req, res) => {
    const menu = new Menu({
        items:[],
    });
    menu.save();
    res.send(menu);
};

getMenuById = async (req, res) => {
    const menuId = req.params.menuId;
    const menu = await Menu.findById(menuId);
    menu ? res.send(menu) : res.sendStatus(404);
};

addItemsToMenu = async (req, res) => {
    const body = req.body
    const newMenuItem = new Item(
        {
            name: body.name,
            price: body.price,
            category: body.category
        }
    )
    const menuId = req.params.menuId
    const menu = await Menu.findById(menuId);
    console.log(menu)
    const menuItems = menu ? menu.items : res.sendStatus(404);
    Menu.findByIdAndUpdate(menuId, {items: menuItems.concat(newMenuItem)},
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
};
  

module.exports = {
    getMenus,
    createMenu,
    getMenuById,
    addItemsToMenu
};
  