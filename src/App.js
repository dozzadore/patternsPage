import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import style from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Items from "./components/Main/Pages/Items/Items";
import Info from "./components/Main/Pages/Info/Info";
import Patterns from "./components/Main/Pages/Patterns/Patterns";
import ItemPage01 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage01";
import ItemPage02 from "./components/Main/Pages/Items/itemsPages/page02/ItemPage02";
import ItemPage03 from "./components/Main/Pages/Items/itemsPages/page03/ItemPage03";
import ItemPage04 from "./components/Main/Pages/Items/itemsPages/page04/ItemPage04";
import ItemPage05 from "./components/Main/Pages/Items/itemsPages/page05/ItemPage05";
import ItemPage06 from "./components/Main/Pages/Items/itemsPages/page06/ItemPage06";
import PatternPage01 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage01/PatternPage01";
import PatternPage02 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage02/PatternPage02";
import PatternPage03 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage03/PatternPage03";
import PatternPage04 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage04/PatternPage04";
import PatternPage05 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage05/PatternPage05";
import PatternPage06 from "./components/Main/Pages/Patterns/PatternsPages/PatternPage06/PatternPage06";
import DivManeken from "./components/OptionComponents/DivManeken/DivManeken";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import ShadowLine from "./components/OptionComponents/ShadowLine/ShadowLine";
import Profile from "./components/Main/Profile/Profile";
import Friends from "./components/Main/Profile/Friends/Friends";





function App(props) {
  return (
    <div className={style.App}>
      
      <Router>
        <Header />
        <ShadowLine />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/items" element={<Items />} />
            <Route path="/patterns" element={<Patterns />}/>
            <Route path="/info" element={<Info />} />
            <Route path="/dialogs" element={<Dialogs 
                  state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile 
                  profilePage={props.state.profilePage} 
                  dispatch={props.dispatch}
                  />} />
            <Route path="/friends" element={<Friends state={props.state}/>} />
            <Route path="/items/itempage01" element={<ItemPage01 />}/>
            <Route path="/items/itempage02" element={<ItemPage02 />}/>
            <Route path="/items/itempage03" element={<ItemPage03 />}/>
            <Route path="/items/itempage04" element={<ItemPage04 />}/>
            <Route path="/items/itempage05" element={<ItemPage05 />}/>
            <Route path="/items/itempage06" element={<ItemPage06 />}/>
            <Route path="/patterns/patternpage01" element={<PatternPage01 />}/>
            <Route path="/patterns/patternpage02" element={<PatternPage02 />}/>
            <Route path="/patterns/patternpage03" element={<PatternPage03 />}/>
            <Route path="/patterns/patternpage04" element={<PatternPage04 />}/>
            <Route path="/patterns/patternpage05" element={<PatternPage05 />}/>
            <Route path="/patterns/patternpage06" element={<PatternPage06 />}/>
        </Routes>
        <DivManeken />
      </Router>
    </div>
  );
}

export default App;
