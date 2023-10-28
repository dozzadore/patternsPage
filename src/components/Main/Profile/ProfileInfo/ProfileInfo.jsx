import style from "./profileinfo.module.css";
import img from "./01.png"



const ProfileInfo = (props) => {

    

    return (
        <div className={style.profileInfo}>
            <div>
             <img src={img} alt="" width={200} height={200}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;