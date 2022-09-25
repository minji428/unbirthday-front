import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendOrangeFront from './cardSendOrangeFront'

class cardSendOrangeFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendOrangeFront/>
            </div>
        )
    }
}
export default cardSendOrangeFrame;