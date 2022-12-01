import React from 'react'
import { useState } from 'react';

function Header({ setIsAdding }) {
    const [ search, setSearch ] = useState('')
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div style={{ marginTop: '10px', marginBottom : '10px', marginLeft:'20px'}}>
         <a  className="navbar-brand" href="https://www.logic-square.com" target="_blank" rel='noreferrer'>
		    <img src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png" className="ls-logo" alt="LS Logo" />
		</a>
        
        </div>
        <div className=" float-right">
            <h4 style={{marginLeft:'1200px'}}>Page Name</h4>
        </div>
        </nav>
            <div style={{ marginLeft:'10px', marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
            </div>
            <input type="text" className="searchbox"placeholder='Search by name or department' onChange={(e) => {
                setSearch(e.target.value.toLowerCase())
              }}/>
              
        </header>
    )
}

export default Header