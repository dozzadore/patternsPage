import style from "./myposts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let PostsElements = props.posts.map( posts => <Post message={posts.message } likes={posts.likesCount} key={posts.id}/>)

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' })
    }
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div className={style.myposts}>
            
            <div className={style}>
                My posts
                <div>
                    <textarea   
                    onChange={onPostChange}
                    ref={newPostElement} 
                    value={props.newPostText}
                   
                    />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {PostsElements}
            </div>
            
        </div>
    )
}
export default MyPosts;