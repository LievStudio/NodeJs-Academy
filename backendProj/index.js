const express = require('express');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');
const vehicleRouter = require('./routes/vehicles');

mongoose.connect('mongodb://localhost:27017/local?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false',
                    { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.error('An error occured', error));
db.on('open', () => console.log('Database connection successful'));

app.use(express.json());

app.use('/vehicles', vehicleRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
