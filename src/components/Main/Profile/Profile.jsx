import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./profile.module.css";



const Profile = (props) => {


    return (
        
        <div className={style.profile}>
            <ProfileInfo />
            <MyPosts 
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;