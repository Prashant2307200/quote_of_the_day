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
    let quotes = await URLResp.json();

    let cnt = 0;
    for (const quoteData of quotes) {
        cnt++;
        const quote = await new Quote({
            quote: quoteData.q,
            author: quoteData.a,
        });
        await quote.save()
    }
    console.log(cnt);
};

init().then(res => console.log('saved'))

// mongodb+srv://prashantdobariya276:<password>@cluster0.sj7nmvc.mongodb.net/



