import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Items from "./components/Main/Pages/Items/Items";
import Contacts from "./components/Main/Pages/Contacts/Contacts";
import Patterns from "./components/Main/Pages/Patterns/Patterns";
import ItemPage01 from "./components/Main/Pages/Items/itemsPages/page01/ItemPage01";

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
      </Routes>
      </Router>
    </div>
  );
}

export default App;
