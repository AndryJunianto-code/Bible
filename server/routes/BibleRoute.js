const router = require('express').Router()
const request = require('request');

router.get('/books/list',(req,res)=> {
    request(
        { url: 'https://bible-go-api.rkeplin.com/v1/books' },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
          }
          res.status(200).json(JSON.parse(body));
        }
      )
})

module.exports = router