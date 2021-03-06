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

export const fetchHighlightedVerse = async(obj) => {
    const userId = obj.queryKey[1]
    const color = obj.queryKey[2]
    const {data} = await axios.get(`highlight/getHighlight/${userId}/${color}`, {
        userId:userId
    })
    return data
}

export const fetchBookmark = async (obj) => {
    const userId = obj.queryKey[1]
    const {data} = await axios.get(`/bookmark/${userId}`)
    return data
}

export const postBookmark = async (obj) => {
    const {data} = await axios.post('/bookmark', {
        userId:obj.userId,
        color:obj.color,
        info:obj.info
    })
    return data
}

export const deleteBookmark = async(obj) => {
    const {data} = await axios.delete(`/bookmark/${obj._id}`)
    return data
}

export const searchTerm = async(obj) => {
    const {data} = await axios.get(`/bible/search/${obj.queryKey[1]}`)
    return data
}