import axios from 'axios'

export const fetchBooksList = async () => {
    const {data} = await axios.get('/bible/books/list')
    return data
}

