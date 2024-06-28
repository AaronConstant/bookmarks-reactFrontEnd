import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <nav>
        <Link to='/bookmarks'><h1>Bookmarks</h1></Link>
        <ul>
            <li>
                <Link to="/about"> About </Link>
            </li>
            <li>
                <Link to='/bookmarks/new'>Add Bookmark</Link>
            </li>
        </ul>

    </nav>
  )
}
