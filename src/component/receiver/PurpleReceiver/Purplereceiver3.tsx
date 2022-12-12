import React, {Component} from 'react';
import { receiver2Props } from '../YellowReceiver/Yellowreceiver3';
import { Slide, toast, ToastContainer } from "react-toastify";
import PurpleReceiver2 from './Purplereceiver2';
import * as service from '../../../service/service'

import '../../../static/getCard/getCard2.css';
import '../../../static/getCard/getCard3.css';

class PurpleReceiver3 extends React.Component<receiver2Props, any> {
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
        else {
            sessionStorage.setItem("card", this.props.card.card_no)
            window.location.href = '/login'
        }
        
    }

    saveCardCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00") {
            toast("💌 카드가 저장됐어요. 내 카드함으로 가보실래요?", {
                position: 'top-center',
                closeButton: false,
                className: 'SF3alerts-toast',
                draggablePercent: 60,
                draggableDirection: 'y',
                autoClose: false,
                transition: Slide,
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    toMyPage = (event: any) => {
        window.location.href = "/mypage"
    }

    render() {
        if (!this.state.isFlipped && this.props.card!=null) {
            return <PurpleReceiver2 card={this.state.card}/>
        }

        return(
            <div className= 'GC2main'>
                <ToastContainer 
                    onClick={this.toMyPage}
                    limit={1}
                />
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
                        <img className="GC2card" src="../../../img/purpleBack.png"/>
                    </div>
                        
                    <div className="GC3insideYellow" onClick={this.cardFront}>
                        <div className='GC3personNamePurple'>
                            HAPPY<br></br>
                            UN-BIRTHDAY {this.props.card.receive}!
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
                            </div>
    
                        </div>
                    </div>
                    
                    <div className="GC2btns">
                        <div className="GC2btn">
                           <img src="../../img/bt_reply.png" onClick={this.cardsend}></img>
                        </div>
                            <div className="GC2btn">
                                <img src="../../img/bt_save_card.png" onClick={this.saveCard} />
                            </div>
                        </div>
                </div>
    

        )
    }
}
export default PurpleReceiver3;