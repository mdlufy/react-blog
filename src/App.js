import React, { useState, useRef } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "JavaScript 2", body: "Description" },
        { id: 3, title: "JavaScript 3", body: "Description" },
    ]);


    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            {posts.length
                ? 
                <PostList remove={removePost} posts={posts} title="Посты про JS" />
                : 
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    );
}

export default App;
