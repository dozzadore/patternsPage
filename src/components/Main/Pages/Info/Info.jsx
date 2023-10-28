import { Link } from "react-router-dom";
import style from "./info.module.css";
import logoVk from "./images/logoVk.png";
import logoWa from "./images/logoWa.png";



const Info = () => {



    return(
        <div className={style.Info}>
            <div className={style.infoContainer}>
                <div className={style.leftBoxContacts}>
                    <div ><span>Контакты</span></div>
                    <div>
                        <Link to="https://vk.com/elena_artnature">
                            <img src={logoVk} alt='' className={style.leftBoxImg} />
                            <div className={style.leftBoxVkP}><p>vk.com/elena_artnature</p></div>
                        </Link>
                    </div>
                    <div>
                        <img src={logoWa} alt='' className={style.leftBoxImg} />
                        <div className={style.leftBoxWup}><p>Whatsapp</p></div>
                    </div>
                </div>
                <div className={style.midleBoxInfo}>
                    <div><span>Важно!</span></div>
                    <p>Красткое описание услуг по пошиву одежды и построению выкроек</p>
                </div>
            </div>
        </div>
    );
};

export default Info;