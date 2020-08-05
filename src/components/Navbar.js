import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
export const Navbar = (props) => {
  // console.log(props)
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
  return (
    <div className='app'>
      <nav className='nav-wrapper red darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            Kathryn Asare
          </Link>
          <ul className='right'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default withRouter(Navbar)
