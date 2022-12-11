import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../static/main.css';
import * as service from '../../service/service';


class main extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            receiverName : []
        }

        this.cardSend = this.cardSend.bind(this)
    }

    componentDidMount(): void {
        //PC 유입 시
        let details = navigator.userAgent
        let regexp = /android|iphone|kindle|ipad/i
        let isMobileDevice = regexp.test(details)
        
        if (!isMobileDevice) {
            alert('모바일을 이용하면 더 편하게 카드를 주고받을 수 있어요 :)')
        }

        service.anyService("/main", "get", this.mainCallback)
    }

    mainCallback = (response: any) => {
        console.log(response)
        console.log(response.data)

        this.setState({
            receiverName : response.data
        })
    }

    cardSend(){
        window.location.href = '/cardsend'
    }

    mycards() {
        console.log(sessionStorage.getItem("id"))
        if(sessionStorage.getItem("id") === null) {
            window.location.href = '/login'
        } else {
            window.location.href = '/mypage'
        }
        
    }

    render() {
        return(
            <div className= 'HomeMain'>
                <div className="happyUnbirthday">
                    <img src="./img/mainText.png"/>
                </div>
                <div className="names">
                    <div className="NameRow"> 
                        <div>{this.state.receiverName[0]}</div>
                        <div>{this.state.receiverName[1]}</div>
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
                        <img src="../img/bt_mycards.png" onClick={this.mycards}></img>
                    </div>
                </div>
            </div>
  
        )
    }
}
export default main;