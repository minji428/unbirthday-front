import React, {Component} from 'react';
import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

interface cardSendWhiteCompleteProps{
    receivePerson: any,
    sendPerson: any,
    clickFunction: any
}

class cardCompleteWhite extends React.Component<cardSendWhiteCompleteProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            cardNo: "",
            cardColor : "",
            firstTag : "",
            secondTag : "",
            thirdTag : "",
            fourthTag : "",
            memo : "",
            receive : "",
            send : ""
        }

    }

    handleCopyClipBoard = async (text: string) => {
        if(navigator.share) {
            navigator.share({
                title: 'HAPPY UNBIRTHDAY!',
                url: text
            })
        } else {
            alert("공유하기가 지원되지 않는 환경입니다.")
        }
    }

    render() {
        return(
            <div className= 'CS4main'>
                                <div className='logo'>
                    <img src="../../img/bt_logo.png"/>
                </div>
        <div className="CS4btn">
            <img src="../../img/back.png" className="CS4backBtn"/>
        </div>
        <div className="CS4texts">
            <div className='CS4mainText'>
                카드가 완성됐어요!
            </div>
            <div className="CS4subTexts">
                링크를 전해주면 카드를 읽고 #태그를 간직할 수 있어요.
            </div>
        </div>
            <div className="CS4yelloBox">
            <div>
                        <img className="GC2card" src="../../img/card_empty_white.png"/>
                    </div>
    
                    <div className="GC2insideYellow" > 
                        <div className='GC2personNameWhite'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.receivePerson}!
                        </div>
                        <div className="GC2subTextWhite">
                            From. {this.props.sendPerson}
                        </div>
                       </div>
                </div>
                <div className="CS4notice" onClick={this.props.clickFunction}>뒷면 보기  </div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png" onClick={()=>this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+this.state.cardNo)}/>
                </div>
            </div>
        )
    }
}
export default cardCompleteWhite;