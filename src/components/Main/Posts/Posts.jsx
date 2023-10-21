import "./posts.css";


const PostInfo = (props) => {
    return (
        <div className="postInfo">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                posts
            </div>
        </div>
    )
}
const MyPost = (props) => {

    return (
        <div>
            <p>My Post </p>
            <div>
                <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
            <div>Hey! This is your post!</div>
        </div>
    )
}
const Post = (props) => {
    return (
        <>
        <PostInfo />
        <MyPost />
        </>
        )
}

const Posts = (props) => {
    return (
        <div className="Posts">
            <Post />
        </div>
    )
}
export default Posts;