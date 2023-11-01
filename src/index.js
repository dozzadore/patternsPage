import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from "react-dom/client";
import { addPost, updateNewPostText } from './redux/state';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {

  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>                   
    </React.StrictMode>
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
