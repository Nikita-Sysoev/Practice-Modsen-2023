import './App.css';
import GetAPI from './API.js'

import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';

export default function App(){
  return (
    <>
      <Header serachFunction={GetAPI} />
      <Main />
    </>
  );
}