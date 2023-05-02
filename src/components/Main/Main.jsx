import "./main.css";
import SimplSlider from "./SliderMain/SimpleSlider";
import img1 from "./images/01.png";
import img2 from "./images/02.png";



const Main = () => {
    return(
        <div className="Main">
            <div className="shadowLine"></div>
            <div className='mainContainer'>
                <div className="main-text">
                    <p className="bottomTextMiddle">Сайт в разработке</p>  
                </div>
                <div className="main-img">
                    <div className="main-to">
                        <div className="main-in-img">
                            <SimplSlider className="simplslider"/>
                            <div className="boxLine"></div>
                            <div className="boxLine1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadowLine"></div>
            <div className="mainContainer1">
                <img src={img1} alt="" />
                <span>В этом сезоне модные дизайнеры позаботились о каждой женщине, ведь в тренде много разных стилей и форм. Часть тенденций можно отнести к вечной классике, другие — к свежим и оригинальным веяниям</span>
            </div>
            <div className="shadowLine"></div>
            <div className="mainContainer2">
            <span>В этом сезоне модные дизайнеры позаботились о каждой женщине, ведь в тренде много разных стилей и форм. Часть тенденций можно отнести к вечной классике, другие — к свежим и оригинальным веяниям</span>
                <img src={img2} alt="" />
            </div>
            <div className="shadowLine"></div>
        </div>
    );
};

export default Main;