import axios from 'axios'

export const fetchBooksList = async () => {
    const {data} = await axios.get('/bible/books/list')
    return data
}

export const fetchChapterContent = async(book,chapter) => {
    const {data} = await axios.get(`/bible/books/${book}/chapters/${chapter}`)
    return data
}

export const fetchHighlight = async(obj) => {
    const title = obj.queryKey[1]
    const {data} = await axios.get(`/highlight/${title}`)
    return data
}
