import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";
import { cardCompleteProps } from '../white/cardSendWhiteCompleteFront';

import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

class CardCompleteOrange extends React.Component<cardCompleteProps, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

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
            //카드보내기 팝업
            this.showAlert()

        } else {
            alert("공유하기가 지원되지 않는 환경입니다.")
        }
    }

    showAlert = () => {
        toast("💌 다른 친구에게도 카드를 보내 볼까요?", {
            position: 'top-center',
            closeButton: false,
            className: 'SF3alerts-toast',
            draggablePercent: 60,
            draggableDirection: 'y',
            autoClose: false,
            transition: Slide,
            delay: 5000,
        })
    }

    cardsend = () => {
        window.location.href = '/cardsend'
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    completeCard = async(e: any) => {

        if(this.props.cardUUID === "") {
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
        else {
            this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+this.props.cardUUID)
        }
    }

    handleCompleteCard = (response: any) => {
        var cardUUID = response.data.data
        //sessionStorage.setItem("cardUUID", cardUUID)
        //window.location.href = '/cardsend/white/' + cardUUID

        this.props.isShared(cardUUID)
        this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+cardUUID)
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className='div-toast' onClick={this.cardsend}>
                    <ToastContainer 
                        limit={1}
                    />
                </div>

            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn" onClick={this.props.fixCard} />
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
                <img className="GC2card" src="../../img/card_empty_orange.png"/>
            </div>
    
            <div className="GC2insideYellow" > 
                <div className='GC2personNameOrange'>
                    HAPPY<br></br>
                    UN-BIRTHDAY<br></br>
                    {this.props.card.toPerson}!
                </div>
                <div className="GC2subTextOrange">
                    From. {this.props.card.fromPerson}
                </div>
                </div>
                </div>
                <div className="CS4notice" onClick={this.props.flip}>뒷면 &gt;  </div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png" onClick={this.completeCard}/>
                </div>
            </div>
        )
    }
}
export default CardCompleteOrange;