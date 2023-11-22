import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./profile.module.css";



const Profile = (props) => {


    return (
        
        <div className={style.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile;