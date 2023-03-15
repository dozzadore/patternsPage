import "./main.css";
import SimplSlider from "./SliderMain/SimpleSlider";
import mainBoxImg from "./main-box-img.jpg";


const Main = () => {
    return(
        <div className="Main">
            <div className='mainContainer'>
              <SimplSlider />
              <div className="right-box">
                <img src={mainBoxImg} alt="" />
                <div className="main-box-text">
                    <h1 className="box-h1">LifeStyle</h1>
                    <div className="main-box-color"></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;