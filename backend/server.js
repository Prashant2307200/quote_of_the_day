const express = require("express");
const quoteRoute = require('./routers/quote-router.js');
const connectToDatabase = require("./utils/database.js");
const init = require("./init.js");

const app = express();
const port = process.env.PORT;


connectToDatabase()
.then(() => {
    app.listen(port, () => {
        console.log(`listing on port http://localhost:${port}/quote`);
    });
})

init();

app.get('/api',(req,res) => res.send("Success"));

app.use('/api/quote',quoteRoute);




