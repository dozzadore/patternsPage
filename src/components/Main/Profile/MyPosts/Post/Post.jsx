import style from "./post.module.css";



const Post = (props) => {

    return (
        <div className={style.post}>
            <div>{props.message}</div>  
            <div className={style.likes}>Likes {props.likes}</div>
        </div>
    )
}
export default Post;