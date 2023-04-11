import { Link } from "react-router-dom";
import "./contacts.css";
import logoVk from "./images/logoVk.png";
import logoWa from "./images/logoWa.png";



const Contacts = () => {



    return(
        <div className="Contacts">
            <div className='contactsContainer'>
                <div className="leftBoxContacts">
                    <div>
                        <Link to="https://vk.com/elena_artnature">
                            <img src={logoVk} alt='' className="leftBoxImg" />
                            <div className="leftBoxVkP"><p>vk.com/elena_artnature</p></div>
                        </Link>
                    </div>
                    <div>
                        <img src={logoWa} alt='' className="leftBoxImg" />
                        <p>Whatsapp</p>
                    </div>
                    <div>Telegram</div>
                </div>
                <div className="midleBoxContacts">
                    <p>Красткое описание <span>услуг по пошиву одежды и построению выкроек</span></p>
                </div>
                <div className="rightBoxContacts"></div>
            </div>
        </div>
    );
};

export default Contacts;