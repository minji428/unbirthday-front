import React, {Component} from 'react';
import { Card } from '../white/cardSendWhiteFrame'
import { cardSendWhiteProps } from '../white/cardSendWhiteComplete';
import CardSendOrangeBack from './cardSendOrangeBack'
// import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

import CardSendOrangeCompleteFront from './cardSendOrangeCompleteFront'

class CardCompleteOrange extends React.Component<cardSendWhiteProps, any> {
        constructor(props: any){
        super(props)

        this.state = {
            showFront : false
        }
        this.flip = this.flip.bind(this)
    }
    /*
    componentDidMount = () => {
        service.anyService("/card/info/"+sessionStorage.getItem("cardUUID"), "get", this.didMountCallback)
    }

    didMountCallback = (response: any) => {
        const data = response.data.data

        this.setState({
            cardNo: data.card_no.replaceAll("-",""),
            cardColor : data.card_color,
            firstTag : data.first_tag,
            secondTag : data.second_tag,
            thirdTag : data.third_tag,
            fourthTag : data.fourth_tag,
            memo : data.memo,
            receive : data.receive,
            send : data.send
        })

    }
    */
   
    handleCopyClipBoard = async (url: string) => {
        //this.checkItsShared(url)

        if(navigator.share) {
            navigator.share({
                title: 'HAPPY UNBIRTHDAY!',
                text: '당신에게 언버스데이 카드가 도착했어요!',
                url: url
            })
        } else {
            alert("공유하기가 지원되지 않는 환경입니다.")
        }
    }
    /*
    checkItsShared = async(url: string) => {
        const param = {
            cardUrl: url
        }
        service.anyService("/card/share", "patch", this.checkItsSharedCallBack, param)
    }

    checkItsSharedCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00") {
            
        } else {
            //alert(rData.rtMsg)
        }
    }
    cardSendOrangeCompleteFront(){
        if(this.state.showFront == true) {
            this.setState({
                showFront : false
            })
        } else {
            this.setState({
                showFront : true
            })
        }
    }
    */

    flip(){
        this.setState({showFront: !this.state.showFront})
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }
    
    completeCard = async(e: any) => {
        const param = {
            send : this.props.card.fromPerson,
            receive : this.props.card.toPerson,
            firstTag : this.props.card.firstTag,
            secondTag : this.props.card.secondTag,
            thirdTag : this.props.card.thirdTag,
            fourthTag : this.props.card.fourthTag,
            memo : this.props.card.memo,
            cardColor : "orange",
            sendId : sessionStorage.getItem("id")
        }

        service.anyService("/card/send/complete", "post", this.handleCompleteCard, param)
    }

    handleCompleteCard = (response: any) => {
        console.log(response)
        console.log(response.data)
        var cardUUID = response.data.data
        sessionStorage.setItem("cardUUID", cardUUID)
        //window.location.href = '/cardsend/white/' + cardUUID

        this.setState({cardUUID: cardUUID})
        this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+cardUUID)
    }

    render() {
        if (this.state.showFront){
            return <CardSendOrangeCompleteFront card={this.props.card} flip={this.flip} fixCard={this.props.fixCard} />
        }
        return(
            <div className= 'CS1main'>
                {/* <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div> */}
            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn" onClick={this.props.fixCard}/>
            </div>
            <div className="CS4texts">
                <div className='CS4mainText'>
                    카드가 완성됐어요!
                </div>
                <div className="CS4subTexts">
                    링크를 전해주면 홈 화면에 '{this.props.card.toPerson}'의 이름이 떠요.<br></br>
                    얼른 {this.props.card.toPerson}(이)를 놀래켜주세요!
                </div>
            </div>
            <div className="CS4yelloBox">
                <div>
                    <img className="CS4card" src="../../img/orangeBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName-orange'>
                        HAPPY<br></br>
                        UN-BIRTHDAY {this.props.card.toPerson}!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag-orange">
                                    <div>{this.props.card.firstTag}</div>
                                </span>
                             </div>
                            <div className="CS4textSpace">
                                <div className='CS4subText'>
                                    {this.props.card.toPerson}(이)는
                                </div>
                            </div>
                        </div>
                            
                        <div className="CS4temp">
                             <div className="CS4textSpace">
                                <div className='CS4subText'>
                                    정말 
                                </div>
                            </div>
                
                            <div className="CS4tagSpace">
                                <span className="CS4tag-orange">
                                    <div>{this.props.card.secondTag}</div>
                                </span>

                            </div>
                                
                            <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                            사람이야.
                                    </div>
                            </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        나는
                                    </div>
                                </div>
                                
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        {this.props.card.toPerson}(이)의
                                    </div>
                                </div>
                                
                                <div className="CS4tagSpace">
                                    <span className="CS4tag-orange">
                                        <div>{this.props.card.thirdTag}</div>
                                    </span>
                                </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4tagSpace">
                                    <span className="CS4tag-orange">
                                        <div>{this.props.card.fourthTag}</div>
                                    </span>
                                </div>
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        모습이 좋아.
                                    </div>
                                </div>
                            </div>

                        </div> 
                         <div className="CS4writeMessage" >
                            {this.props.card.memo}     
                        </div>

                    </div>
                </div>
                <div className="CS4notice" onClick={this.flip}>
                    앞면 &gt;
                </div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png" onClick={this.completeCard}/>
                </div>
            </div>
        )
    }
}
export default CardCompleteOrange;