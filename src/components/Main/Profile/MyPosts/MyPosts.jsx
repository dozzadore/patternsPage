import style from "./myposts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let PostsElements = props.posts.map( posts => <Post message={posts.message } likes={posts.likesCount} key={posts.id}/>)

    let addPost = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value.length > 0 ? props.addPost(text) : newPostElement.current.value = '';
        newPostElement.current.value = '';
    }
    let newPostElement = React.createRef();

    return (
        <div className={style.myposts}>
            
            <div>
                My posts
                <div>
                    <textarea   ref={newPostElement} ></textarea>
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