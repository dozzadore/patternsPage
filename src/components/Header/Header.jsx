import { NavLink } from "react-router-dom";
import "./header.css";
import imgLogo from "./logo.png";

const Header = () => {

    return(
        <div className="Header">
            <img className="imgLogo" src={imgLogo} alt="" />
            <div className="mainLogo">
                <p>maneken<span>project</span></p>
            </div>
            <div className="cubeHeader"><div className="cubeHead1"><div className="cubeHead2"></div></div></div>
            <div className="headerIn">
                <div className='headerBox'>
                    <NavLink to="/" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Home</strong>
                    </NavLink>
                </div>
                <div className='headerBox'>
                    <NavLink to="/dialogs" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Messages</strong>
                    </NavLink>
                </div>
                <div className='headerBox'>
                    <NavLink to="/profile" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Posts</strong>
                    </NavLink>
                </div>
                <div className='headerBox'>
                    <NavLink to="/items" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Items</strong>
                    </NavLink>
                </div>
                <div className='headerBox'>
                    <NavLink to="/patterns" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Patterns</strong>
                    </NavLink>
                </div>
                <div className='headerBox'>
                    <NavLink to="/info" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                            <strong>Info</strong>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;