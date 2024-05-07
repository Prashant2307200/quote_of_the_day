const express = require('express');
const cors = require('cors');
const quoteController = require('../controllers/quote-controller.js');
const mongoose = require("mongoose"); 
// const fetch = require('node-fetch');

const router = express.Router();

router.use(cors()); 
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

// router.route('/').get(quoteController.home);
router.get('/', quoteController.home);
router.get('/search', quoteController.search);

router.use((error, req, res, next) => { 
    console.error(error.stack); 
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = router;