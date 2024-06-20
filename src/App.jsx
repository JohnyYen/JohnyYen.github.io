import { useState } from "react";
import { Title } from "./Components/Title";
import {QuestionList} from './Components/QuestionList'
import {GlobalProvider} from './Context/GlobalState'
import './App.css';
export default function App(){
  return (
    <GlobalProvider>
      <Title/>
      <QuestionList/>
    </GlobalProvider>
  );
}