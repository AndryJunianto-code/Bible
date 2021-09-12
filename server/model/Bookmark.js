const mongoose = require('mongoose')

const Bookmark = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    info:{
        type:Object,
        default:{bookTitle:'',chapter:''}
    }
},{timestamps:true})

module.exports = mongoose.model('bookmarks',Bookmark)