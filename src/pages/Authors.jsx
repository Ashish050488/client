import React, { useState } from 'react'
import thumbnail1 from '../images/thumbnail1.jpg'
import { Link } from 'react-router-dom'


const authorsData = [
  {id:1,avatar:thumbnail1,name:'Ashish',posts:3},
  {id:2,avatar:thumbnail1,name:'Ash',posts:5},
  {id:3,avatar:thumbnail1,name:'Ashu',posts:0},
  {id:4,avatar:thumbnail1,name:'Ashi',posts:2},
  {id:5,avatar:thumbnail1,name:'Ahish',posts:2},
]


const Author = () => {
  const [authors,setAuthors]=useState(authorsData)
  return (
    <section className='authors'>
      {authors.length>0? <div className="container authors_container">
        {
          authors.map(({id,avatar,name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
               <div className="author_avatar">
                <img src={avatar} alt={`image of of author ${name}`} />
               </div>
               <div className="author_info">
                <h4>{name}</h4>
                <p>{posts}</p>
               </div>
            </Link>
          })
        }
      </div>:<h2 className='center'>No Posts Yet</h2>}
    </section>
  )
}

export default Author