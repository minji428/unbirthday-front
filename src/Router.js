import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './component/main/main'
import CardSend from './component/cardSend/cardSend'
import CardSendYellow from './component/cardSend/yellow/cardSendYellowFrame'
import CardSendOrange from './component/cardSend/orange/cardSendOrangeFrame'
import CardSendWhite from './component/cardSend/white/cardSendWhiteFrame'
import CardSendPurple from './component/cardSend/purple/cardSendPurpleFrame'
import Login from './component/login/login'
import Register from './component/register/register';
import CardGotten from './component/myPage/cardGotten';
import MyCards from './component/myPage/myCards';
import Receiver1 from './component/receiver/receiver1';

import RouteChangeTracker from "./components/RouteChangeTracker";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/cardsend' element={<CardSend/>}></Route>
          <Route path='/cardsend/yellow' element={<CardSendYellow/>}></Route>
          <Route path='/cardsend/orange' element={<CardSendOrange/>}></Route>
          <Route path='/cardsend/white' element={<CardSendWhite/>}></Route>
          <Route path='/cardsend/purple' element={<CardSendPurple/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/gotten/cardgotten' element={<CardGotten/>}></Route>
          <Route path='/mypage' element={<MyCards/>}></Route>
          <Route path='/cardreceive/:cardUrl' element={<Receiver1/>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;