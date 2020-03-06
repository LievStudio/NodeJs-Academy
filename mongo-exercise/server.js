const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:BsvBcjm1LgdKuM8N@cluster0-h0qte.mongodb.net/test?retryWrites=true&w=majority', 
                    { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.error('An error occurred', error));
db.once('open', () => console.log('connected to the database'));

app.use(express.json());

const subscribeRouter = require ('./routes/subscribers');
app.use('/subscribers', subscribeRouter);

app.listen('3000', () => console.log('server up and running'));