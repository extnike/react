import ReactDOM from 'react-dom/client'
import React from "react";
import App from "./App.jsx";
import {addPost} from "./redux/state.js";


let rerenderEntireTree = (state) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App appSstate={state} addPost={addPost}/>
        </React.StrictMode>,
    )
}

export default rerenderEntireTree