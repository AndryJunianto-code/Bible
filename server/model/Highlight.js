const mongoose = require('mongoose')

const Highlight = new mongoose.Schema({
    title:{
        type:String,
    },
    userId:{
        type:String,
        required:true,
    },
    data:{
        type:Array,
        default:[
            {color:'blue',verses:[]},
            {color:'green',verses:[]},
            {color:'pink',verses:[]},
            {color:'yellow',verses:[]},
        ]
    }
},{timestamps:true})

module.exports = mongoose.model('highlights',Highlight)