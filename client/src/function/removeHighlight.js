import axios from 'axios'
import { closeHighlightModal} from '../redux/modalSlice'

const removeHighlight = async (title,lastClick,dispatch,highlightRefetch,user) => {
    let temp = [...lastClick]
    for(let i = 0; i < temp.length;i++) {
        let split = temp[i].split('##')
        let color = split[1]
        temp[i] = split[2]/* VERSE */
        try{
            await axios.put(`/highlight/remove/${color}`, {
                title:title.bookTitle + "_" + title.chapter,
                userId:user.sub,
                verses:temp[i]
            })
        } catch(err){console.log(err)}
    }
    lastClick = temp
    highlightRefetch()
    dispatch(closeHighlightModal())
}

export default removeHighlight