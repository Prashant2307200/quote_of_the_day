const mongoose = require('mongoose');
const connectToDatabase = require('./utils/database.js');
const Quote = require('./models/Quote.js');
const quote_url = process.env.API_URL;

connectToDatabase()
.then(() => console.log('connected'))
.catch(() => console.log('error'));

async function init() {

    await Quote.deleteMany({});

    const fetchURL = quote_url;
    const URLResp = await fetch(fetchURL);
    const quotes = await URLResp.json();

    Quote.insertMany(quotes);
};

module.exports = {
    init
    // quotes
}

// mongodb+srv://prashantdobariya276:<password>@cluster0.sj7nmvc.mongodb.net/



