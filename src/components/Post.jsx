import React, { useState } from 'react'
import PostItem from './PostItem'
import thumbnail1 from '../images/thumbnail1.jpg'

import { DUMMY_POSTS } from '../data'


const Post = () => {
    const [posts,setPosts] =useState(DUMMY_POSTS);
  return (
    <section className='posts'>
      {posts.length>0?<div className="container post_container">
      {
             posts.map(post => (
                <PostItem 
                    key={post.id} 
                    thumbnail={post.thumbnail} 
                    postId={post.id} 
                    category={post.category}  
                    desc={post.desc} 
                    authorID={post.authorID}  
                    title={post.title}
                />
            ))
        }
      </div>:<h2 className='center'>No post found</h2>}
    </section>
  )
}

export default Post