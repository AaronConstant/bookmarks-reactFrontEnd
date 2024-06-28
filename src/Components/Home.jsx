import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function() {

    const [bookmarks, setBookmarks] = useState([])
    const API = import.meta.env.VITE_BASE_URL


    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(res => {
            setBookmarks(res)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className='bookmark-container'>
        { bookmarks.map((bookmark, i) => {
            return (
                <div key={i} className='bookmark-link'>
                    <Link to={`/bookmarks/${i}`}>{ bookmark.name }</Link>
                </div>
            )
        })}
    </div>
)
}
