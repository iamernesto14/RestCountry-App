import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='sticky top-0 p-8 bg-white shadow-md mb-8'>
        <nav className='flex items-center justify-between'>
            <Link to="/"><h1 className='cursor-pointer tracking-normal text-xl'>Where in the world?</h1></Link>
            <div>Dark Mode</div>
        </nav>
    </header>
  )
}


export default Header;