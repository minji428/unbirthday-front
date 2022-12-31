import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendYellowFront from '../yellow/cardSendYellowFront'
import CardCompleteWhite from './cardSendYellowComplete'
import CardSendWhiteFront from './cardSendYellowFront'
import { Card } from '../white/cardSendWhiteFrame'

class cardSendYellowFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            card: {} as Card,
        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendYellowFront card={this.state.card}/>
            </div>
        )
    }
}
export default cardSendYellowFrame;