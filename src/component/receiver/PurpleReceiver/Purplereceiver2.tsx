
import React, {Component} from 'react';
import { Card } from '../../myPage/cardGotten'
import { Slide, toast, ToastContainer } from "react-toastify";
import { receiver1Props } from '../YellowReceiver/Yellowreceiver2';
import * as service from '../../../service/service'

import '../../../static/getCard/getCard2.css';
import PurpleReceiver3 from './Purplereceiver3';

class PurpleReceiver2 extends React.Component<receiver1Props, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isFlipped: false,
        }
        
        this.setCard = this.setCard.bind(this)
        this.cardBack = this.cardBack.bind(this)
    }

    componentDidMount(): void {        
        if(sessionStorage.getItem('card') !== null) {
            this.saveCard()
            sessionStorage.removeItem('card')
        }
    }

    setCard  = (card: Card) => {
        this.setState({
            isFlipped: false,
        })
    }; 

    cardBack = (event: any) => {
        this.setState({
            isFlipped: true,
        })
    }
    
    cardsend = (event: any) => {
        window.location.href = '/cardsend'
    }
    
    saveCard = () => {
        //로그인된 상태라면 카드 저장
        if(sessionStorage.getItem("id") !== null) {
            const param = {
                card_no: this.props.card.card_no,
                receive_id : sessionStorage.getItem("id")
            }
            service.anyService("/card/save", "patch", this.saveCardCallBack, param)
        }

        //로그인이 안 된 상태라면
        else {
            sessionStorage.setItem("card", this.props.card.card_no)
            window.location.href = '/login'
        }           
    }

    saveCardCallBack = (response: any) => {
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
        if (this.state.isFlipped && this.props.card!=null) {
            return <PurpleReceiver3 card={this.props.card} setCard={this.setCard}/>
        }
        return(
            <div className= 'GC2main'>
                <div className='div-toast' onClick={this.toMyPage}>
                    <ToastContainer 
                        limit={1}
                    />
                </div>
            <div className="GC2texts">
                <div className='GC2mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
                <div className="GC2subTexts">
                    카드를 탭 해보세요!
                </div>
                
            </div>
                <div className="GC2yelloBox">
                    <div>
                        <img className="GC2card" src="../../img/card_empty_purple.png"/>
                    </div>
    
                    <div className="GC2insideYellow" onClick={this.cardBack}> 
                        <div className='GC2personNamePurple'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.card.receive}
                        </div>
                        <div className="GC2subTextPurple">
                            From. {this.props.card.send}
                        </div>
                       </div>
                    </div>
                    
                    <div className="GC2btns">
                        <div className="GC2btn">
                            <img src="../../img/bt_reply.png"></img>
                        </div>
                        <div className="GC2btn">
                            <img src="../../img/bt_save_card.png" onClick={this.saveCard} />
                        </div>
                    </div>
                </div>
    

        )
    }
}
export default PurpleReceiver2;