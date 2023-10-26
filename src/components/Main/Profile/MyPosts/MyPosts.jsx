import "./myposts.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let PostsData = [
        {id: 1, message: "Hi hey man", likesCount: 11},
        {id: 2, message: "qrfqf qwfwqf", likesCount: 14}
    ]

    let PostsElements = PostsData.map( posts => <Post message={posts.message } likes={posts.likesCount}/>)

    return (
        <div className="myposts">
            <div>
                My posts
                <div>
                    <textarea   textarea name="" id="" ></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div>
                {PostsElements}
            </div>
            
        </div>
    )
}
export default MyPosts;