import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';
import CardSendYellowFront from '../yellow/cardSendYellowFront'

class cardSendOrangeFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <CardSendYellowFront/>
            </div>
        )
    }
}
export default cardSendOrangeFrame;