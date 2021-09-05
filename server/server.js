const express = require('express');
const mongoose = require('mongoose')
const dotenv=  require('dotenv')
const BibleRoute = require('./routes/BibleRoute')

const app = express();
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=> {
    console.log('database connected')
}).catch((err)=> {
    console.log(err)
})

app.use('/api/bible',BibleRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));