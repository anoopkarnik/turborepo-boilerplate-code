import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import PostPage from '../components/PostPage.tsx';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Publish() {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()
    const user = localStorage.getItem('user');
    const token = JSON.parse(user).jwt;

    const publishPost = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,
             {title,content},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
        )
        navigate(`/blog/${response.data.id}`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <PostPage title={title} content={content} setTitle={setTitle} setContent={setContent} publishPost={publishPost}/>
    </div>
  )
}


