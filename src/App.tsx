// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from './component/main/main'
import CardSend from './component/cardSend/cardSend'
import CardSendYellow from './component/cardSend/yellow/cardSendYellowFrame'
import CardSendOrange from './component/cardSend/orange/cardSendOrangeFrame'
import CardSendWhite from './component/cardSend/white/cardSendWhiteFrame'
import CardSendPurple from './component/cardSend/purple/cardSendPurpleFrame'
import CardSend3 from './component/cardSend/cardSend3'
import CardSend4 from './component/cardSend/cardSend4'
import Login from './component/login/login'
import Register from './component/register/register';
import ChooseTag1 from './component/chooseTag/chooseTag1';
import ChooseTag2 from './component/chooseTag/chooseTag2';
import ChooseTag3 from './component/chooseTag/chooseTag3';
import ChooseTag4 from './component/chooseTag/chooseTag4';
import TagGotten from './component/myPage/tagGotten';
import CardGotten from './component/myPage/cardGotten';
import MyCards from './component/myPage/myCards';
import GetCard1 from './component/getCard/getCard1';
import GetCard2 from './component/getCard/getCard2';
import GetCard3 from './component/getCard/getCard3';
import SignInFin1 from './component/signInFin/signInFin1';
import SignInFin2 from './component/signInFin/signInFin2';
import SignInFin3 from './component/signInFin/signInFin3';
import CardComplete from './component/cardSend/yellow/cardSendYellowComplete'

const App = () => {

  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/cardsend' element={<CardSend/>}></Route>
          <Route path='/cardsend/yellow' element={<CardSendYellow/>}></Route>
          <Route path='/cardsend/orange' element={<CardSendOrange/>}></Route>
          <Route path='/cardsend/white' element={<CardSendWhite/>}></Route>
          <Route path='/cardsend/purple' element={<CardSendPurple/>}></Route>
          <Route path='/cardsend/yellow/:cardId' element={<CardComplete/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/gotten/taggotten' element={<TagGotten/>}></Route>
          <Route path='/gotten/cardgotten' element={<CardGotten/>}></Route>
          <Route path='/mypage' element={<MyCards/>}></Route>
          {/* <Route path='/chooseTag/chooseTag1' element={<ChooseTag1/>}></Route>
          <Route path='/chooseTag/chooseTag2' element={<ChooseTag2/>}></Route>
          <Route path='/chooseTag/chooseTag3' element={<ChooseTag3/>}></Route>
          <Route path='/chooseTag/chooseTag4' element={<ChooseTag4/>}></Route> */}
          <Route path='/getCard/getCard1' element={<GetCard1/>}></Route>
          <Route path='/getCard/getCard2' element={<GetCard2/>}></Route>
          <Route path='/getCard/getCard3' element={<GetCard3/>}></Route>
          <Route path='/signInFin/signInFin1' element={<SignInFin1/>}></Route>
          <Route path='/signInFin/signInFin2' element={<SignInFin2/>}></Route>
          <Route path='/signInFin/signInFin3' element={<SignInFin3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

