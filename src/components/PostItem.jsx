import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postId, category, title, authorID, desc, thumbnail}) => {

  const shortdesc = desc.length >145? desc.substr(0,145)+'...':desc;
  const postTitle = title.length >30? title.substr(0,145)+'...':title;
  
  return (
    <article className='post'>
      <Link to={`/posts/${postId}`}>
      <div className="post_thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post_content">
        <h3>{postTitle}</h3>
        <p>{shortdesc}</p>
      </div>
      <div className="post_footer">
        <PostAuthor authorID={authorID}/>
        <Link to={`/post/categories/${category}`} className='btn category'>{category}</Link>
      </div>
      </Link>
    </article>
  )
}

export default PostItem;
