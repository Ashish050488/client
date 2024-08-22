import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css' 

const CreatePost = () => {
  const [title,setTitle] = useState('');
  const [category,setCategory]=useState('Uncategorized');
  const [description,setDescription]=useState('');
  const [thumbnail,setThumbnail]=useState('');

  const modules = {
    toolbar:[
      [{'header':[1,2,4,5,6,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
      ['link','image'],
      ['clean']
    ],
  }


  const formats = ['header','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image']

  const POST_CATEGORIES = ['Agriculture','Business','Education','Entertainment','Art','Investment','Uncategorized','Weather']


  return (
    <section className='create-posts'>
      <div className="container form">
        <h2>Create Post</h2>
        <p className="form_error-message">
          This is an error message
        </p>
        <from className="form create-post_form">
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e=>setCategory(e.target.value)} id="">
            {
              POST_CATEGORIES.map(cat=><option key={cat}>{cat}</option>)
            }
          </select>
            <ReactQuill modules={modules} formats={formats}  value={description} onChange={setDescription}/>
            <input type="file" onChange={e=>setThumbnail(e.target.files[0])} accept='png,jpg,jpeg' name="" id="" />
            <button type='submit' className='btn primary'>Create</button>
        </from>
      </div>
    </section>
  )
}

export default CreatePost