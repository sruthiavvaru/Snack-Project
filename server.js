const express = require('express');
const cors = require('cors');
const snackRoute = require('./routes/snackRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');
require('./db');

const app = express();


app.use(express.json());
app.use(cors());


app.use('/getsnacks', snackRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
