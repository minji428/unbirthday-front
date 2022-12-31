
import React, {Component} from 'react';
import { Card } from '../../myPage/cardGotten'
import { cardGottenProps } from '../YellowGetCard/getCard2';

import '../../../static/getCard/getCard2.css';
import GetCard3 from './getCard3';

class OrangeGetCard2 extends React.Component<cardGottenProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isFlipped: false,
        }

        this.setCard = this.setCard.bind(this)
        this.cardBack = this.cardBack.bind(this)
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

    toCardGotten = (event: any) => {
        window.location.href = '/gotten/cardGotten'
    }

    render() {
        if (this.state.isFlipped && this.props.card!=null) {
            return <GetCard3 card={this.props.card} setCard={this.setCard}/>
        }
        return(
            <div className= 'GC2main'>
                <img src="../img/back.png" className="GC2backBtn" onClick={this.toCardGotten} />
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
                        <img className="GC2card" src="../../img/card_empty_orange.png"/>
                    </div>
    
                    <div className="GC2insideYellow" onClick={(e) => this.cardBack(e)}>
                        <div className='GC2personNameOrange'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.card.receive}
                        </div>
                        <div className="GC2subTextOrange">
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
export default OrangeGetCard2;