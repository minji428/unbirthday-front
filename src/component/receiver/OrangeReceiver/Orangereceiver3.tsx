import React, {Component} from 'react';
import { receiver2Props } from '../YellowReceiver/Yellowreceiver3';
import Receiver2 from './Orangereceiver2';
import * as service from '../../../service/service'

import '../../../static/getCard/getCard2.css';
import '../../../static/getCard/getCard3.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class OrangeReceiver3 extends React.Component<receiver2Props, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isFlipped: true,
        }

        this.cardFront = this.cardFront.bind(this)
    }

    cardFront = (event:any) => {
        this.setState({
            isFlipped: false,
        })
        this.props.setCard(this.props.card); 
    }

    cardsend = (event: any) => {
        window.location.href = '/cardsend'
    }
    
    saveCard = (event: any) => {
        //로그인된 상태라면 카드 저장
        if(sessionStorage.getItem("id") !== null) {
            const param = {
                card_no: this.props.card.card_no,
                receive_id : sessionStorage.getItem("id")
            }
            console.log(param)
            service.anyService("/card", "patch", this.saveCardCallBack, param)
        }

        //로그인이 안 된 상태라면
        //sessionStorage.setItem("card", this.props.card.card_no)
        
        window.location.href = '/login'
    }

    saveCardCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        //이미 저장된 카드면?
        if(rData.rtCode === "00") {
            window.location.href = "/mypage"
        } else {
            alert(rData.rtMsg)
        }
    }

    render() {
        if (!this.state.isFlipped && this.props.card!=null) {
            return <Receiver2 card={this.state.card}/>
        }

        return(
            <div className= 'GC2main'>
            <div className="GC2texts">
                <div className='GC2mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
                <div className="GC2subTexts">
                    카드를 저장하면 내가 받은 #태그를 분석해줘요.
                </div>
            </div>
                <div className="GC2yelloBox">
                    <div>
                        <img className="GC2card" src="../../img/orangeBack.png"/>
                    </div>
                        
                    <div className="GC3insideYellow" onClick={this.cardFront}>
                        <div className='GC3personNameOrange'>
                            HAPPY<br></br>
                            UN-BIRTHDAY {this.props.card.receive}!
                            {/* UN-BIRTHDAY 은빈! */}
                        </div>
                        <div className="GC3tagMessage">
                            <div className="GC3temp">
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>{this.props.card.first_tag}</div>
                                    </span>
                                 </div>
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>
                                        {this.props.card.receive}(이)는
                                    </div>
                                </div>
                            </div>
                                
                            <div className="GC3temp">
                                 <div className="GC3textSpace">
                                    <div className='GC3subText'>
                                        정말 
                                    </div>
                                </div>
                    
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>{this.props.card.second_tag}
                                            
                                        </div>
                                        </span>
    
                                    </div>
                                    
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                                사람이야.</div>
                                         </div>
                                </div>
            
                                <div className="GC3temp">
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                            나는 </div>
                                    </div>
                                    
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                            {this.props.card.receive}(이)의 </div>
                                    </div>
                                    
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>{this.props.card.third_tag}</div>
                                        </span>
                                    </div>
                                </div>
            
                                <div className="GC3temp">
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>{this.props.card.fourth_tag}</div>
                                        </span>
                                    </div>
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                             <div className="GC3writeMessage" >
                                {this.props.card.memo}
                                {/* <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                                <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                                <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                                <div>오늘도 해피 언버스데이 :)  </div>           */}
                            </div>
    
                        </div>
                    </div>
                    
                    <div className="GC2btns">
                        <div className="GC2btn">
                            <img src="../../img/bt_reply.png" onClick={this.cardsend} />
                        </div>
                        <div className="GC2btn">
                            <img src="../../img/bt_save_card.png" onClick={this.saveCard} />
                        </div>
                    </div>
                </div>
    

        )
    }
}
export default OrangeReceiver3;