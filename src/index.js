import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
