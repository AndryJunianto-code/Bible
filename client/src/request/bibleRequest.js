import axios from 'axios'

export const fetchBooksList = async () => {
    const {data} = await axios.get('/bible/books/list')
    return data
}

export const fetchChapterContent = async(book,chapter) => {
    const {data} = await axios.get(`/bible/books/${book}/chapters/${chapter}`)
    return data
}
