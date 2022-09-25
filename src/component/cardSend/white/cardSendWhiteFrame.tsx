import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendWhiteFront from './cardSendWhiteFront'

class cardSendWhiteFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendWhiteFront/>
            </div>
        )
    }
}
export default cardSendWhiteFrame;