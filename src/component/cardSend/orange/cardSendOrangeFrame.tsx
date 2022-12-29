import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendOrangeFront from './cardSendOrangeFront'
import { Card } from '../white/cardSendWhiteFrame'

class cardSendOrangeFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            card: {} as Card,
        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendOrangeFront card={this.state.card}/>
            </div>
        )
    }
}
export default cardSendOrangeFrame;