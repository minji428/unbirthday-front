import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendPurpleFront from './cardSendPurpleFront'

class cardSendPurpleFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendPurpleFront/>
            </div>
        )
    }
}
export default cardSendPurpleFrame;