
import React, {Component} from 'react';
import { Card } from '../../myPage/cardGotten'
import { receiver1Props } from '../YellowReceiver/Yellowreceiver2';

import '../../../static/getCard/getCard2.css';
import PurpleReceiver3 from './Purplereceiver3';

{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class PurpleReceiver2 extends React.Component<receiver1Props, any> {
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
    render() {
        if (this.state.isFlipped && this.state.card!=null) {
            return <PurpleReceiver3 card={this.state.card} setCard={this.setCard}/>
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
                        <img className="GC2card" src="../../img/card_empty_purple.png"/>
                    </div>
    
                    <div className="GC2insideYellow" onClick={this.cardBack}> 
                        <div className='GC2personNamePurple'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.card.receive}
                            {/* 은빈! */}
                        </div>
                        <div className="GC2subTextPurple">
                            From. {this.props.card.send}
                            {/* From. 수수 */}
                        </div>
                       </div>
                    </div>
                    
                    <div className="GC2btns">
                        <div className="GC2btn">
                            <img src="../../img/bt_reply.png"></img>
                        </div>
                        <div className="GC2btn">
                            <img src="../../img/bt_save_card.png"></img>
                        </div>
                    </div>
                </div>
    

        )
    }
}
export default PurpleReceiver2;