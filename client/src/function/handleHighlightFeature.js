import axios from 'axios'
import { closeHighlightModal} from '../redux/modalSlice'

const colorObj = {
    blue:0,
    green:1,
    pink:2,
    yellow:3
}
const handleHighlightFeature = async (color,highlightData,title,lastClick,dispatch,refetch) => {
    if(highlightData.length === 0) {
        let res;
        if(color === 'blue') {
            res = await axios.post('http://localhost:5000/api/highlight', {
                title:  title.bookTitle + "_" + title.chapter,
                data:[
                    {color:'blue',verses:lastClick},
                    {color:'green',verses:[]},
                    {color:'pink',verses:[]},
                    {color:'yellow',verses:[]},
                ]
            })
        } else if(color === 'green') {
            res = await axios.post('http://localhost:5000/api/highlight', {
                title:  title.bookTitle + "_" + title.chapter,
                data:[
                    {color:'blue',verses:[]},
                    {color:'green',verses:lastClick},
                    {color:'pink',verses:[]},
                    {color:'yellow',verses:[]},
                ]
            })
        } else if(color === 'pink') {
            res = await axios.post('http://localhost:5000/api/highlight', {
                title:  title.bookTitle + "_" + title.chapter,
                data:[
                    {color:'blue',verses:[]},
                    {color:'green',verses:[]},
                    {color:'pink',verses:lastClick},
                    {color:'yellow',verses:[]},
                ]
            })
        } else if(color === 'yellow') {
            res = await axios.post('http://localhost:5000/api/highlight', {
                title:  title.bookTitle + "_" + title.chapter,
                data:[
                    {color:'blue',verses:[]},
                    {color:'green',verses:[]},
                    {color:'pink',verses:[]},
                    {color:'yellow',verses:lastClick},
                ]
            })
        }
    } else {
        let temp = [...lastClick]
        for(let i = 0; i < temp.length;i++) {
            if(temp[i][0] + temp[i][1] === "##") {
                let split = temp[i].split('##')
                let color = split[1]
                temp[i] = split[2]/* VERSE */
                await axios.put(`/highlight/remove/${color}`, {
                    title:title.bookTitle + "_" + title.chapter,
                    verses:temp[i]
                })
            }
        }
        lastClick = temp
        try{
            const index = colorObj[color]
            const previousVerses = highlightData[0].data[index].verses
            await axios.put('http://localhost:5000/api/highlight', {
                title:title.bookTitle + "_" + title.chapter,
                color:color,
                newVerses:[...previousVerses,...lastClick]
            })
        } catch(err) {
            console.log(err)
        }
    }
    refetch()
    dispatch(closeHighlightModal())
}

export default handleHighlightFeature