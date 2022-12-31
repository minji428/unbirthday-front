import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";

import * as service from '../../../service/service'
import { cardSendWhiteProps } from '../white/cardSendWhiteComplete'

// import '../../../static/cardSend/cardSendComplete.css';
// import '../../../static/cardSend/cardSend4.css';

import CardSendPurpleCompleteFront from './cardSendPurpleCompleteFront'

class CardCompletePurple extends React.Component<cardSendWhiteProps, any> {    constructor(props: any){
        super(props)

        this.state = {
            showFront : false,
            cardUUID: "",
        }
        
        this.flip = this.flip.bind(this)

    }
    
    isShared = (cardUUID: string) => {
        this.setState({cardUUID: cardUUID})
    }

    handleCopyClipBoard = async (url: string) => {
        if(navigator.share) {
            navigator.share({
                title: 'HAPPY UNBIRTHDAY!',
                text: '당신에게 언버스데이 카드가 도착했어요!',
                url: url
            })
            //카드보내기 팝업
            this.showAlert()

        } else {
            await navigator.clipboard.writeText(url);
            alert("링크가 복사되었어요!📃\n메신저 채팅창에 붙여넣기 해서 카드를 공유해보세요")
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

    flip(){
        this.setState({showFront: !this.state.showFront})
    }

    completeCard = async(e: any) => {
        
        if(this.state.cardUUID === "") {
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
        //이미 저장되었다면
        else {
            this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+this.state.cardUUID)
        }
    }


    handleCompleteCard = (response: any) => {
        var cardUUID = response.data.data
        sessionStorage.setItem("cardUUID", cardUUID)
        //window.location.href = '/cardsend/white/' + cardUUID

        this.setState({cardUUID: cardUUID})
        this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+cardUUID)
    }

    cardsend = () => {
        window.location.href = '/cardsend'
    }

    render() {
        if (this.state.showFront){
            return <CardSendPurpleCompleteFront 
                        card={this.props.card} 
                        flip={this.flip} 
                        fixCard={this.props.fixCard} 
                        isShared={this.isShared}
                        cardUUID={this.state.cardUUID}
                    />
        }
        return(
            <div className= 'CS1main'>
                <div className='div-toast' onClick={this.cardsend}>
                    <ToastContainer 
                        limit={1}
                    />
                </div>
            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn" onClick={this.props.fixCard}/>
            </div>
            <div className="CS4texts">
                <div className='CS4mainText'>
                    카드가 완성됐어요!
                </div>
                <div className="CS4subTexts">
                    링크를 전해주면 홈 화면에 '{this.props.card.toPerson}'의 이름이 떠요.<br></br>
                    얼른 {this.props.card.toPerson}(이)를 놀래켜주세요!.
                </div>
            </div>
            <div className="CS4yelloBox">
                <div>
                    <img className="CS4card" src="../../img/purpleBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName-purple'>
                        HAPPY<br></br>
                        UN-BIRTHDAY {this.props.card.toPerson}!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag-purple">
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
                                <span className="CS4tag-purple">
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
                                <span className="CS4tag-purple">
                                    <div>{this.props.card.thirdTag}</div>
                                </span>
                            </div>
                        </div>
        
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag-purple">
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
export default CardCompletePurple;