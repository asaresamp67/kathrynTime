import React from 'react'
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Post from './components/Post'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
      </div>
    </Router>
  )
}

export default App
