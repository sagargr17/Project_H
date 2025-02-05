import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import  { store } from "@/state/store.js";
import  "./assets/scss/theme.scss"



// This is the cofig for the projects
Amplify.configure(outputs); 


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
