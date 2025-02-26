import React from "react";
import { createRoot } from 'react-dom/client';

//component file
import "./App.css";
import App from "./App";
const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(<App />) 
