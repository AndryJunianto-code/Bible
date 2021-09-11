import axios from 'axios'

export const fetchBooksList = async () => {
    const {data} = await axios.get('/bible/books/list')
    return data
}

export const fetchChapterContent = async(obj) => {
    const book = obj.queryKey[1]
    const chapter = obj.queryKey[2]
    const {data} = await axios.get(`/bible/books/${book}/chapters/${chapter}`)
    return data
}

export const fetchHighlight = async(obj) => {
    const title = obj.queryKey[1]
    const userId = obj.queryKey[2]
    const {data} = await axios.get(`/highlight/${title}/${userId}`)
    return data
}
