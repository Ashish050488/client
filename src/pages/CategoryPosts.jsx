
import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'

import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts,setPost]= useState(DUMMY_POSTS)

  return (
    <section>
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

export default CategoryPosts;