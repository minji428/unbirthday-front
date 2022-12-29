import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendWhiteFront from './cardSendWhiteFront'

export interface Card {
    toPerson: any,
    fromPerson: any,
    firstTag: any,
    secondTag: any,
    thirdTag: any,
    fourthTag: any,
    memo: string,
}

class cardSendWhiteFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            card: {} as Card
        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendWhiteFront card={this.state.card}/>
            </div>
        )
    }
}
export default cardSendWhiteFrame;