const fetchURLRand = process.env.API_RAND_URL;
const quote_url = process.env.API_URL;
const Quote = require('../models/Quote.js'); 
// const quotes = require('../init.js')

const asyncWrap = fn => (req, res ,next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const home = asyncWrap(async (req, res) => {  
    let n = Math.floor(Math.random()*30);
    const quotes = await Quote.find({});
    const quoteData = quotes[n];
    res.json(quotes[n]);
});

const search = asyncWrap(async (req, res) => {
    let { author } = req.query;
    const quotesByAuthor = await Quote.find({ author });
    // const quotesByAuthor = quotes.filter(quote => quote.author == author);
    res.json(quotesByAuthor);
});

module.exports = { home,search };