const express = require('express');
const BibleRoute = require('./routes/BibleRoute')

const app = express();
app.use(express.json())

app.use('/api/bible',BibleRoute)

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));