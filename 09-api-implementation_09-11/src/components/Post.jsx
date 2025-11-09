import axios from 'axios'
import React, { useState } from 'react'

function Post() {

    const [post,setPost] = useState([]);
    const getPost = async() => {
        const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
        const DataFetch = await res.data;
        setPost(DataFetch)
        console.log(DataFetch);
        
    }

  return (
    <div>
        <button type='submit' className=' bg-blue-700' onClick={getPost}>GetPost</button>
        <div className='p-10'>
            <h1>Post Data</h1>
            {post.map((data,idx)=>(
                <div key={idx} className=' w-full bg-white p-1 text-black'>
                    <h1>{idx+1 + " " + data.author}</h1>
                    <img src={data.download_url} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Post