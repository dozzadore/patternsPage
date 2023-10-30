import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import imgLogo from "./logo.png";

const Header = () => {

    return(
        <div className={style.Header}>
            <img className={style.imgLogo} src={imgLogo} alt="" />
            <div className={style.mainLogo}>
                <p>maneken<span>project</span></p>
            </div>
            <div className={style.cubeHeader}><div className={style.cubeHead1}><div className={style.cubeHead2}></div></div></div>
            <div className={style.headerIn}>
                <div className={style.headerBox}>
                    <NavLink to="/" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Home</strong>
                    </NavLink>
                </div>
                <div className={style.headerBox}>
                    <NavLink to="/dialogs" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Messages</strong>
                    </NavLink>
                </div>
                <div className={style.headerBox}>
                    <NavLink to="/profile" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Profile</strong>
                    </NavLink>
                </div>
                <div className={style.headerBox}>
                    <NavLink to="/friends" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Friends</strong>
                    </NavLink>
                </div>
                <div className={style.headerBox}>
                    <NavLink to="/patterns" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Patterns</strong>
                    </NavLink>
                </div>
                <div className={style.headerBox}>
                    <NavLink to="/info" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                            <strong>Info</strong>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;