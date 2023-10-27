import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./profile.css";



const Profile = (props) => {

    

    return (
        
        <div className="profile">
            
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
export default Profile;