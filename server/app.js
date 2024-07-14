const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const signupRoute = require('./src/routes/signup');
const loginRoute = require('./src/routes/login');
const userRoute = require('./src/routes/user');
const createAdminAccount = require('./src/scripts/admin')


app.use(express.json());
app.use(cors());

createAdminAccount();

app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/api', userRoute);

app.listen(process.env.PORT, ()=>{
    console.log("Server started");
})