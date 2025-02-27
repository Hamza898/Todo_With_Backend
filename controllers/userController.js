const { use } = require("../routes/userRoutes");

let userData = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    gender: "male",
  },
  {
    id: 2,
    name: "John",
    email: "john@gmail.com",
    gender: "male",
  },
];

exports.getAll = (req, res) => {
  try {
    if (userData.length < 0) {
      throw new error("No data found");
    }
    res.json(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.getOne = (req, res) => {
    console.log('hello world');
    
  const { id } = req.params;
  console.log('id: ', id);
  
  const user = userData.find((user) => user.id == id);
  console.log('user: ', user);
  
  try {
    if (!user) {
      throw new error("No User found on this id");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send.message;
  }
};
exports.create = (req, res) => {
  const newUser = req.body;
  try {
    if (!userData) {
      throw new error("Sorry Request Failed");
    }
    userData.push(newUser);
    res.json(userData);
  } catch (error) {
    res.status(500).send.message;
  }
};
exports.update = (request, response) => {
    try {
        const id = request.body.id;
        const updatedData = request.body;
        let userFound=false

        userData = userData.map(user => {
            if (user.id == id) { 
                userFound = true;
                return { ...user, ...updatedData };
            }
            return user;
        });

        if (!userFound) {
            return response.status(404).json({ message: "User not found" });
        }

        response.json(userData );
    } catch (err) {
        response.status(500).send(err.message);
    }
};
exports.remove = (request, response) => {
    try {
        const {id} = request.params
       userData= userData.filter(user=> user.id!=id)
        response.json(userData);
    } catch(err) {
        response.status(500).send(err.message);
    }
};
