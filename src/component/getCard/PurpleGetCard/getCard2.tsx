
import React, {Component} from 'react';
import { Card } from '../../myPage/cardGotten'
import { cardGottenProps } from '../YellowGetCard/getCard2';

import '../../../static/getCard/getCard2.css';
import GetCard3 from './getCard3';

{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class PurpleGetCard2 extends React.Component<cardGottenProps, any> {
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
    
    render() {
        if (this.state.isFlipped && this.state.card!=null) {
            return <GetCard3 card={this.state.card} setCard={this.setCard}/>
        }
        return(
            <div className= 'GC2main'>
            <div className="GC2texts">
                <div className='GC2mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
                {/* <div className="GC2subTexts">
                    카드를 저장하면 내가 받은 #태그도 모아볼 수 있어요.
                </div> */}
            </div>
                <div className="GC2yelloBox">
                    <div>
                        <img className="GC2card" src="../../img/card_empty_purple.png"/>
                    </div>
    
                    <div className="GC2insideYellow" onClick={(e) => this.cardBack(e)}>
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
                            <img src="../img/bt_reply.png" onClick={this.cardsend} />
                        </div>
                        
                    </div>
                </div>
    

        )
    }
}
export default PurpleGetCard2;