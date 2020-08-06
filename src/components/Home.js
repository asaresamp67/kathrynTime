import React, { Component } from 'react'
import axios from 'axios'
//import data from '../data'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    posts: [],
    //posts: data,
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0, 10),
      })
    })
  }
  render() {
    const { posts } = this.state
    const postList = posts ? (
      posts.map((post) => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <Link to={'/' + post.id}>
                <span className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body.slice(0, 40)}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className='center'>No post yet, loading...</div>
    )
    return (
      <>
        <div className='container'>
          <h4 className='center'>Home</h4>
          <p>{postList}</p>
        </div>
      </>
    )
  }
}

export default Home
