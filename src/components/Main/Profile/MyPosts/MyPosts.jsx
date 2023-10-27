import "./myposts.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

 

    let PostsElements = props.posts.map( posts => <Post message={posts.message } likes={posts.likesCount} key={posts.id}/>)

    return (
        <div className="myposts">
            
            <div>
                My posts
                <div>
                    <textarea   name="" id="" ></textarea>
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