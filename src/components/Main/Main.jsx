import "./main.css";
import SimplSlider from "./SliderMain/SimpleSlider";
import mainBoxImg from "./main-box-img.jpg";


const Main = () => {
    return(
        <div className="Main">
            <div className='mainContainer'>
              <div className="right-box">
                <div className="main-text"><h1 className="h1-1">STYLE</h1><p>FOR</p><h1 className="h1-2">YOU</h1></div>
                <div className="main-img">
                    <div className="main-to">
                        <div className="main-in-img"><img src={mainBoxImg} alt="" /></div>
                        <div className="main-in1"></div>
                        <div className="main-in2"><p>love</p></div>
                    </div>
                    </div>
                </div>
                <SimplSlider />
            </div>
        </div>
    );
};

export default Main;