const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const router = express.Router();

const route = "/me";
const me = async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact; 

    const result = {
      status: "success",
      user: {
        email: "nnajioformiracle247@gmail.com", 
        name: "Nnajiofor Ralueke Miracle", 
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(" Error fetching cat fact:", error.message);

    const fallback = {
      status: "success",
      user: {
        email: "youremail@example.com",
        name: "Your Full Name",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Couldn't fetch a cat fact right now — please try again later ",
    };

    res.status(200).json(fallback);
  }
};

router.route(route).get(me);
app.use("/", router);

const server = app.listen(port, () => {
  console.log(` Server running at port ${port}`);
});

module.exports = app;