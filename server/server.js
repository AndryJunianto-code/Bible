const express = require('express');
const mongoose = require('mongoose')
const dotenv=  require('dotenv')
const cors = require('cors')
const BibleRoute = require('./routes/BibleRoute')
const HighlightRoute = require('./routes/HighlightRoute')
const BookmarkRoute = require('./routes/BookmarkRoute')

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

app.use('/api/bible',BibleRoute)
app.use('/api/highlight',HighlightRoute)
app.use('/api/bookmark',BookmarkRoute)

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=> {
    console.log('database connected')
}).catch((err)=> {
    console.log(err)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));