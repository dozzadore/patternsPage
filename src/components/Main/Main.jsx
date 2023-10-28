import style from "./main.module.css";
import SimplSlider from "./SliderMain/SimpleSlider";
import img1 from "./images/01.png";
import img2 from "./images/02.png";
import ShadowLine from "../OptionComponents/ShadowLine/ShadowLine";



const Main = () => {

 
    return(
        <div className={style.Main}>
            <div className={style.mainContainer}>
                <div className={style.mainText}>
                    
                    <p className={style.bottomTextMiddle}>Сайт в разработке</p>  
                </div>
                <div className={style.mainImg}>
                    <div className={style.mainTo}>
                        <div className={style.mainInImg}>
                            <SimplSlider className={style.simplslider}/>
                            <div className={style.boxLine}></div>
                            <div className={style.boxLine1}></div>
                        </div>
                    </div>
                </div>
            </div>
            <ShadowLine />
            <div className={style.mainContainer1}>
                <img src={img1} alt="" />
                <span>В этом сезоне модные дизайнеры позаботились о каждой женщине, ведь в тренде много разных стилей и форм. Часть тенденций можно отнести к вечной классике, другие — к свежим и оригинальным веяниям</span>
            </div>
            <ShadowLine />
            <div className={style.mainContainer2}>
            <span>В этом сезоне модные дизайнеры позаботились о каждой женщине, ведь в тренде много разных стилей и форм. Часть тенденций можно отнести к вечной классике, другие — к свежим и оригинальным веяниям</span>
                <img src={img2} alt="" />
            </div>
            <ShadowLine />
        </div>
    );
};

export default Main;