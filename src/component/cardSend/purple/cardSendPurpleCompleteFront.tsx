import React, {Component} from 'react';
import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

interface cardSendPurpleCompleteProps{
    receivePerson: any,
    sendPerson: any,
    clickFunction: any
}

class cardCompleteWhite extends React.Component<cardSendPurpleCompleteProps, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

    }

    handleCopyClipBoard = async (url: string) => {
        if(navigator.share) {
            navigator.share({
                title: 'HAPPY UNBIRTHDAY!',
                text: '364일의 언버스데이 즐기기',
                url: url
            })
        } else {
            alert("공유하기가 지원되지 않는 환경입니다.")
        }
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className='logo' onClick={this.clickLogo}>
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
                링크를 전해주면 홈 화면에 은빈(이)의 이름이 떠요.<br></br>
                    얼른 은빈(이)를 놀래켜주세요!.
                </div>
            </div>
            <div className="CS4yelloBox">
            <div>
                        <img className="GC2card" src="../../img/card_empty_purple.png"/>
                    </div>
    
                    <div className="GC2insideYellow" > 
                        <div className='GC2personNamePurple'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.receivePerson}!
                        </div>
                        <div className="GC2subTextPurple">
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