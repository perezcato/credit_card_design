import React,{useState} from 'react';
import master from "../assets/images/master.jpg";

let background:string = master

const ToggleContext = React.createContext(background)

export default ToggleContext;