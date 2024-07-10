import './index.css'
import store from "./redux/state.js";
import ReactDOM from 'react-dom/client'
import React from "react";
import App from "./App.jsx";

let root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {
    root.render(<React.StrictMode>
        <App appState={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,)
}

export default rerenderEntireTree

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

