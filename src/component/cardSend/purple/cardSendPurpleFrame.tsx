import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendPurpleFront from './cardSendPurpleFront'
import { Card } from '../white/cardSendWhiteFrame'

class cardSendPurpleFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            card: {} as Card
        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendPurpleFront card={this.state.card}/>
            </div>
        )
    }
}
export default cardSendPurpleFrame;