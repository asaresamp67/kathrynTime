import React, { Component } from 'react'
import axios from 'axios'
//import data from '../data'
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
              <span className='card-title'>{post.title}</span>
              <p>{post.body}</p>
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
