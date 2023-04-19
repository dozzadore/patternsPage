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
                    <div className="bottomText">
                    <p className="bottomTextMiddle">Совершенное, красивое и бесконечное - это три атрибута, которых мы ищем в жизни и в искусстве. Совершенное может относиться к идеальной форме, к наших стандартам красоты известных объектов (например, культурный наследие) и к тому, что мы считаем идеальным. Красивое это то, что приятно глазу и вызывает у нас положительные эмоции. Бесконечное - это то, что не имеет конца, и у нас есть чувство бесконечности, например, когда мы смотрим на звездное небо или океан. Наше желание найти совершенное, красивое и бесконечное связано с нашей потребностью в гармонии и счастье. Мы ищем красоту и совершенство в мире, чтобы ощущать себя более счастливыми и исполненными, а чувство бесконечности нам помогает понять, что мы часть более широкой вселенной и что в этих областях есть многое, что мы еще не знаем и не можем понять.</p>
                    </div>
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