const fetchURLRand = process.env.API_RAND_URL;
const quote_url = process.env.API_URL;
const Quote = require('../models/Quote.js'); 

const asyncWrap = fn => (req, res ,next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const home = asyncWrap(async (req, res) => {  
    let n = Math.floor(Math.random()*32);
    const quotes = await Quote.find({});
    const quoteData = quotes[n];
    res.json(quoteData);
});

const search = asyncWrap(async (req, res) => {
    const { author } = req.query;
    const quotesByAuthor = await Quote.find({ author });
    console.log(quotesByAuthor);
    res.json(quotesByAuthor);
});

module.exports = { home,search };