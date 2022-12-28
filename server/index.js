const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const waitlistRouter = require('./routes/Waitlist');
app.use("/waitlist", waitlistRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});