import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
           <h1>Вы открыли страницу поста с ID = {params.id}</h1> 
           {isLoading 
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
                : <div>{post.id}. {post.title}</div>
           }
           <h1>
               Комментарии
           </h1>

        </div>
    );
};

export default PostIdPage;