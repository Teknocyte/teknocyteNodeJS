const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

//middleware for parsing JSON in request body
app.use(express.json());

app.get('/', (request, response) => {

	response.render('contact', { errors : '' });

});

//start server
app.listen(3000, () => {

	console.log('Server started on port 3000');

});