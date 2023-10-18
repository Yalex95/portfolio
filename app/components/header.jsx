import { Link } from '@remix-run/react'
import React from 'react'
import Navigation from './navigation'

const Header = () => {
  return (
    <header>
        <div>
            <Link to='/'>
                home
            </Link>
            <Navigation/>
        </div>
    </header>
  )
}

export default Header