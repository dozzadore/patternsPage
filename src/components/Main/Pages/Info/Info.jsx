import { Link } from "react-router-dom";
import "./info.css";
import logoVk from "./images/logoVk.png";
import logoWa from "./images/logoWa.png";



const Info = () => {



    return(
        <div className="Info">
            <div className="shadowLine"></div>
            <div className='infoContainer'>
                <div className="leftBoxContacts">
                    <div ><span>Контакты</span></div>
                    <div>
                        <Link to="https://vk.com/elena_artnature">
                            <img src={logoVk} alt='' className="leftBoxImg" />
                            <div className="leftBoxVkP"><p>vk.com/elena_artnature</p></div>
                        </Link>
                    </div>
                    <div>
                        <img src={logoWa} alt='' className="leftBoxImg" />
                        <div className="leftBoxWup"><p>Whatsapp</p></div>
                    </div>
                </div>
                <div className="midleBoxInfo">
                    <div><span>Важно!</span></div>
                    <p>Красткое описание услуг по пошиву одежды и построению выкроек</p>
                </div>
            </div>
        </div>
    );
};

export default Info;