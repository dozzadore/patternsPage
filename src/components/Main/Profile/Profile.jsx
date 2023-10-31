import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./profile.module.css";



const Profile = (props) => {


    return (
        
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts 
                posts={props.state.profilePage.posts}
                addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;