import axios from 'axios'
import { closeHighlightModal} from '../redux/modalSlice'

const colorObj = {
    blue:0,
    green:1,
    pink:2,
    yellow:3
}
const removeHighlight = async (highlightData,title,lastClick,dispatch,refetch) => {
    let temp = [...lastClick]
    for(let i = 0; i < temp.length;i++) {
        let split = temp[i].split('##')
        let color = split[1]
        temp[i] = split[2]/* VERSE */
        try{
            await axios.put(`/highlight/remove/${color}`, {
                title:title.bookTitle + "_" + title.chapter,
                verses:temp[i]
            })
        } catch(err){console.log(err)}
    }
    lastClick = temp
    const previousVerses = highlightData[0].data[0].verses
    refetch()
    dispatch(closeHighlightModal())
}

export default removeHighlight