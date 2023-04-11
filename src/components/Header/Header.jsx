import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {

    return(
        <div className="Header">
            <div className="mainLogo">maneken<span>project</span></div>
            <div className="headerIn">
                <div className='headerBox'>
                    <NavLink to="/" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                        <strong>Home</strong>
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
                    <NavLink to="/contacts" style={({ isActive }) =>({color: isActive ? '#fffdfd80' : 'white'})}>
                            <strong>Contacts</strong>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;