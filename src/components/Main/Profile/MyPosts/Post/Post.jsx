import "./post.css";



const Post = (props) => {

    return (
        <div className="post">
            <div>{props.message}</div>  
            <div>Likes {props.likes}</div>
        </div>
    )
}
export default Post;