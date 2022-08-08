const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, deleteItem } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getMotivation } = require('./controller')

app.get("/api/motivation", getMotivation);

const {
    getMotivation,
    deleteMotivation,
    createMotivation,
    updateMotivation
} = require('./controller')

app.listen(4000, () => console.log("Server running on 4000"));
