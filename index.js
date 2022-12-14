const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoute=require('./routes/productRoutes')
const categoryRoute=require('./routes/categoryRoutes')
const path = require('path');
dotenv.config()
const cors = require("cors");
app.use(cors());

const connectMongoDB = require("./config/MongoDBConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.use('/api/product/details',productRoute)
app.use('/api/product/category',categoryRoute)

const port = process.env.PORT || 8000;
module.exports=port;

if (process.env.NODE_ENV==='production') {
  app.use(express.static('Frontend/build'))
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
  })
}

app.listen(port, () => console.log(`listening on port ${port}...`));
connectMongoDB();

