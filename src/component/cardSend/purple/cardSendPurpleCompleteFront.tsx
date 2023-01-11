import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";
import { cardCompleteProps } from '../white/cardSendWhiteCompleteFront';

import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

class CardCompletePurple extends React.Component<cardCompleteProps, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }

    }

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
            this.openModal()
            // alert("아래 링크를 복사해서 받는 사람에게 보내주세요:)\n" + url)
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
                cardColor : "purple",
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

    cardsend = () => {
        window.location.href = '/cardsend'
    }

    selectAll = (e: any) => {
        e.target.focus()
        e.target.select()
    }

    openModal = () => {
        let modal = document.getElementsByClassName("modal")[0] as HTMLElement
        
        if (modal !== null) { 
            let parent = modal.parentNode as HTMLElement
            if (parent !== null)
                parent.style.overflow = 'hidden'
            modal.style.display = "flex"
        }
    }

    closeModal = (e: any) => {
        let modal = document.getElementsByClassName("modal")[0] as HTMLElement
        
        if (modal !== null) {
            let parent = modal.parentNode as HTMLElement
            if (parent !== null)
                parent.style.overflow = 'scroll'
            modal.style.display="none"
        }
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className='div-toast' onClick={this.cardsend}>
                    <ToastContainer 
                        limit={1}
                    />
                </div>
                {/* modal */}
                <div className="modal" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='modal-body__column'>
                                    아래 링크를 복사해서 받는 사람에게 보내주세요 :) 
                                </div>
                                <div className='modal-body__column'>
                                    <input value={'https://unbirthday.kr/cardreceive/'+this.props.cardUUID } spellCheck="false" onClick={this.selectAll} inputMode="none"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn" onClick={this.props.fixCard} />
                <img src="../../img/bt_grayhome.png" className="CS4home" onClick={this.clickLogo}/>

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
                        <img className="GC2card" src="../../img/card_empty_purple.png"/>
                    </div>
    
                    <div className="GC2insideYellow" > 
                        <div className='GC2personNamePurple'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {this.props.card.toPerson}!
                        </div>
                        <div className="GC2subTextPurple">
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
export default CardCompletePurple;