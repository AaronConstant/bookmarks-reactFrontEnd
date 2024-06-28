import React, {useEffect, useState } from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'

export default function Show () {
    const [bookmarkInfo, setBookmarkInfo] = useState()
    const API = import.meta.env.VITE_BASE_URL
    const { index } = useParams()
    const navigate = useNavigate()
    

    const handleDelete = () => {
        fetch(`${API}/${index}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                navigate('/bookmarks')
            })
            .catch(err => console.error(err))
    }

//if the target in the anchor tag is set to "_blank" will switch indicated URL link
    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then( res => {
                setBookmarkInfo(res)
            })
            .catch(err => console.log(err))

    })




  return (
    <div>
        { bookmarkInfo && 
        <div className='bookmark'>
            <h1>{bookmarkInfo.name}</h1>
            <h4>Category: {bookmarkInfo.category}</h4>
            <a className='external-link' href= {bookmarkInfo.url} target="_blank">Click here</a>
            <Link to={`/bookmarks/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete} className='delete-button'>Delete</button>
        </div>
        }
    </div>
  )
}
