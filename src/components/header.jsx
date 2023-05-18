import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className='header'>
        <h1>Blog</h1>
        <ul className='header--items'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Highlights</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </div>
  )
}

export default header