
import React, {Component} from 'react';
import { Card } from '../../myPage/cardGotten'
import { receiver1Props } from '../YellowReceiver/Yellowreceiver2';
import * as service from '../../../service/service'

import '../../../static/getCard/getCard2.css';
import WhiteReceiver3 from './Whitereceiver3';

{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class WhiteReceiver2 extends React.Component<receiver1Props, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isFlipped: false,
            card: {} as Card,
        }
        
        this.setCard = this.setCard.bind(this)
        this.cardBack = this.cardBack.bind(this)
    }

    setCard  = (card: Card) => {
        this.setState({
            isFlipped: false,
            card: card,
        })
    }; 

    cardBack = (event: any) => {
        this.setState({
            isFlipped: true,
            card: {
                card_no: this.props.card.card_no,
                send: this.props.card.send,
                receive: this.props.card.receive,
                first_tag: this.props.card.first_tag,
                second_tag: this.props.card.second_tag,
                third_tag: this.props.card.third_tag,
                fourth_tag: this.props.card.fourth_tag,
                memo: this.props.card.memo,
                card_color: this.props.card.card_color,
                reg_date: this.props.card.reg_date,
            }
        })
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
        if (this.state.isFlipped && this.state.card!=null) {
            return <WhiteReceiver3 card={this.state.card} setCard={this.setCard}/>
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
                        <img className="GC2card" src="../../img/card_empty_white.png"/>
                    </div>
    
                    <div className="GC2insideYellow" onClick={this.cardBack}> 
                        <div className='GC2personNameWhite'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.card.receive}
                            {/* 은빈! */}
                        </div>
                        <div className="GC2subTextWhite">
                            From. {this.props.card.send}
                            {/* From. 수수 */}
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
export default WhiteReceiver2;