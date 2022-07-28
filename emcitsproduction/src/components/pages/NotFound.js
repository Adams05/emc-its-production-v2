import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'><h3 className='large-title'>Nothing matched your search result.</h3>
    <br />
    <Link to='/' className='goBackBtn'>Go back</Link>
    </div>
  )
}

export default NotFound