import "./main.css";
import SimplSlider from "./SliderMain/SimpleSlider";



const Main = () => {
    return(
        <div className="Main">
            <div className='mainContainer'>
              <div className="right-box">
                <div className="main-text">
                    <div className="topText"><h1 className="h1-1"> your</h1>
                    <p>STYLE</p>
                    </div>
                    <div className="bottomText">
                    <p className="bottomTextMiddle">"Девушке нужны два качества: она должна быть стильной и потрясающей"</p><span>Coco Chanel</span>
                    </div>
                </div>
                <div className="main-img">
                    <div className="main-to">
                        <div className="main-in-img">
                            <SimplSlider className="simplslider"/>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default Main;