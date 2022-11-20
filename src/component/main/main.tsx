import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../static/main.css';

class main extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

        this.cardSend = this.cardSend.bind(this)
    }

    cardSend(){
        window.location.href = '/cardsend'
    }

    render() {
        return(
            <div className= 'HomeMain'>
                <div className="happyUnbirthday">
                    <img src="./img/mainText.png"/>
                </div>
                <div className="names">
                    <div className="NameRow"> 
                        <div>김채윤</div>
                        <div>김윤채</div>
                    </div>
                    <div className="NameRow">
                        <div className="insideRow2">
                            <div>Dino</div>
                            <div>김채윤</div>
                        </div> 
                        <div className="insideRow2">
                            <div>장원영</div>
                            <div>김채윤</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>장원영</div>
                            <div>김채윤</div>
                            <div>장영채</div>
                            <div>김채윤</div>
                            <div>장원희</div>
                            <div>halley</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>장원영</div>
                            <div>김채윤</div>
                            <div>장원영</div>
                            <div>김윤채</div>
                            <div>영지영</div>
                            <div>김채윤</div>
                        </div>
                    </div>
                    <div className="rowSpecial">
                        <div>
                            장원영
                        </div>
                        <div className="ment">
                            <div>
                                바로 어제 비생일 축하를 받은 사람들
                            </div>
                            <div>
                                오늘도 비생일 축하해!
                            </div>
                        </div>
                        <div>
                            홍김킴
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow6">
                            <div>영영영</div>
                            <div>김윤희</div>
                            <div>장원영</div>
                            <div>김채윤</div>
                            <div>장원영</div>
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow7">
                            <div>장원영</div>
                            <div>김채희</div>
                            <div>장원영</div>
                            <div>김김김</div>
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow8">
                            <div>장원영</div>
                            <div>김윤희</div>
                            <div>Luke</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow9">
                            <div>장원영</div>
                            <div>김채윤</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>장원영</div>
                        </div>
                    </div>
                </div>

                <div className="btns">
                    <div className="btn1">
                        <img src="../img/bt_send_card.png" onClick={this.cardSend}></img>
                    </div>
                    <div className="btn2">
                        <img src="../img/bt_mycards.png"onClick={this.cardSend}></img>
                    </div>
                </div>
            </div>
  
        )
    }
}
export default main;