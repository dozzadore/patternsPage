import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Items from "./components/Main/Pages/Items/Items";
import Contacts from "./components/Main/Pages/Contacts/Contacts";
import Patterns from "./components/Main/Pages/Patterns/Patterns";
import ItemPage01 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage01";
import ItemPage02 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage02";
import ItemPage03 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage03";
import ItemPage04 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage04";
import ItemPage05 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage05";
import ItemPage06 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage06";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/items" element={<Items />} />
            <Route path="/patterns" element={<Patterns />}/>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/items/itempage01" element={<ItemPage01 />}/>
            <Route path="/items/itempage02" element={<ItemPage02 />}/>
            <Route path="/items/itempage03" element={<ItemPage03 />}/>
            <Route path="/items/itempage04" element={<ItemPage04 />}/>
            <Route path="/items/itempage05" element={<ItemPage05 />}/>
            <Route path="/items/itempage06" element={<ItemPage06 />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
