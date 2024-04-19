import { faContactBook, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBars, faClose, faCog, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
  return (
    <div className='text-2xl bg-slate-50 py-2 shadow-xl'>
        <FontAwesomeIcon className='cursor-pointer px-2' onClick={handleClick} icon={faBars}/>

        <nav className={`${show ? 'visible' : 'hidden'} flex flex-col transition-all bg-blue-800 absolute h-screen top-0 px-[10px]`}>
            <FontAwesomeIcon onClick={handleClick} className='cursor-pointer my-2' icon={faClose} />
            <Link to='/'><FontAwesomeIcon className='cursor-pointer my-[60px]' icon={faHome} /></Link>
            <Link to='/contact'><FontAwesomeIcon className='cursor-pointer my-[60px]' icon={faContactBook} /></Link>
            <FontAwesomeIcon className='cursor-pointer my-[60px]' icon={faMessage} />
            <FontAwesomeIcon className='cursor-pointer my-[60px]' icon={faCog} />
        </nav>
    </div>
  )
}
