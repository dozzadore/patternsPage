import "./myposts.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let PostData = [
        {id: 1, message: "Hi hey man", likesCount: 11},
        {id: 2, message: "qrfqf qwfwqf", likesCount: 14}
    ]

    return (
        <div className="myposts">
             My posts
            <div>
                <div>
                    <textarea   textarea name="" id="" ></textarea>
                </div>
                <button>Add post</button>
            </div>
            <Post message={PostData[0].message}/>
        </div>
    )
}
export default MyPosts;