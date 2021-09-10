const router = require('express').Router()
const Highlight = require('../model/Highlight')

router.get('/:title', async(req,res)=> {
    try{
        const highlights = await Highlight.find({title:req.params.title})
        res.status(200).json(highlights)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async(req,res)=> {
    const newHighlight = new Highlight(req.body)
    try{
        const savedHighlight = await newHighlight.save()
        res.status(200).json(savedHighlight)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.put('/', async(req,res)=> {
    try{
        const highlight = await Highlight.updateOne(
            {title:req.body.title,"data.color":req.body.color},
            {$set:{
                "data.$.verses":req.body.newVerses
            }}
        )
        res.status(200).json(highlight)
    } catch(err) {
        res.status(500).json(err)
    }
})
module.exports = router