import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';

import ChooseTag1 from './chooseTag1'
import ChooseTag2 from './chooseTag2'
import ChooseTag3 from './chooseTag3'
import ChooseTag4 from './chooseTag4'

class chooseTagFrame extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            clickFirstTag: "",
            clickSecondTag: "",
            clickThirdTag: "",
            clickFourthTag: "",
        }
    }

    render() {
        return(
            <div className= 'CS2main'>

            </div>
        )
    }
}
export default chooseTagFrame;