import "./main.css";
import SimplSlider from "./SliderMain/SimpleSlider";



const Main = () => {
    return(
        <div className="Main">
            <div className='mainContainer'>
              <div className="right-box">
                <div className="main-text">
                    <div className="topText"><h1 className="h1-1">ArtNature</h1>
                    <p>FOR</p>
                    <h1 className="h1-2">YOU</h1>
                    </div>
                    
                    <div className="bottomText">
                    <p className="marksMainText1">''</p><p className="bottomTextMiddle">FashionTV presents BABYFACE FASHIONTV CLUB SHANGHAI, one of the most exclusive studios, clubs & restaurants in Shanghai. Join the fashion elite and celebrate the cosmopolitan lifestyle with a new generation of fashion, music and models.</p><p className="marksMainText2">''</p>
                    </div>
                </div>
                <div className="main-img">
                    <div className="main-to">
                        <div className="main-in-img">
                            <SimplSlider className="simplslider"/>
                        </div>
                        <div className="main-in1"></div>
                        <div className="main-in2"><p>love</p></div>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default Main;