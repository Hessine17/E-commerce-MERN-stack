import express from 'express';
import data from "./data.js";
import config from './config.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from'./routes/userRoute.js'
import productRoute from'./routes/productRoute.js'

import bodyParser from 'body-parser';


dotenv.config()
const mongodbUrl = config.MONGODB_URL;
mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
/*app.get('/api/products',(req, res)=>{
    res.send(data.products)
})
app.get('/api/products/:id',(req, res)=>{
    const productId=req.params.id


    res.send(data.products.find(x=>x._id===productId))
})*/
app.listen(3001, () => {
    console.log('Server started at http://localhost:3000');
});