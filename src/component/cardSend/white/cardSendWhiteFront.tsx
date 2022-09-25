import React, {Component} from 'react';
import '../../../static/cardSend/cardSendFront.css';

import CardSendWhiteBack from './cardSendWhiteBack'

class cardSendWhiteFront extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            showback : false
        }

        this.cardSendYelloBack = this.cardSendYelloBack.bind(this)
    }

    componentDidUpdate = (prevProps:any, prevState:any, snapshot:any) => {

    }

    cardSendYelloBack(){
        this.setState({
            showback : true
        })
    }

    backButton(){
        window.location.href = '/cardsend'
    }

    render() {
        return(
            <div className= 'CS2main'>
                <div className="CS2btnBack">
                    <img src="../img/back.png" className="CS2backBtn" onClick={this.backButton}/>
                </div>
                <div className='CS2mainText'>
                    누구에게 누가 보내는 카드인가요?
                </div>
                <div className="CS2yelloBox">
                    <div>
                        <img src="../img/cardFrontWhite.png" className="CS2card"/>
                    </div>
                        
                    <div className="CS2insideYellow">
                        <div className="CS2write">
                           <div className="CS2toPerson">
                                <div className="CS2nameBox">
                                    <input type="text" className="form-control" name="keyword" placeholder='받는 사람'/>
                                </div>
                                <div className="CS2notice">3자 이내로 입력해주세요.</div>
                            </div>
                            <div className="CS2fromPerson">
                                <div className="CS2nameBox">
                                    보내는 사람
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                    
                <div className='CS2writeBack' >
                    <div onClick={this.cardSendYelloBack}>뒷장 쓰기</div>
                    {this.state.showback ? <CardSendWhiteBack/>: ''}
                </div>
        </div>

        )
    }
}
export default cardSendWhiteFront;