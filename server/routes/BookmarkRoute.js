const router = require('express').Router()
const Bookmark = require('../model/Bookmark')

router.post('/', async (req,res)=> {
    const newBookmark = new Bookmark(req.body)
    try{
        const bookmark = await newBookmark.save()
        res.status(200).json(bookmark)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:userId', async(req,res)=> {
    try{
        const bookmark = await Bookmark.find({userId:req.params.userId})
        res.status(200).json(bookmark)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.status(200).json(bookmark)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router


