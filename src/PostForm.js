import React, { Component } from 'react';

export default class PostForm extends Component {
  render() {
    return (
      <div>
          <h1> Create Post</h1>
          <form action="">
              <input type="text" placeholder="Enter post title " required />
              <br/>
              <br/>
              <textarea cols="30" rows="5" placeholder="Enter post" required/>
              <button>Post</button>

          </form>
      </div>
    );
  }
}
