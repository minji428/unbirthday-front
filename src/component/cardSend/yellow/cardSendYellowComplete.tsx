import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";
import ReactGA from "react-ga4";

import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'
import CardSendYellowCompleteFront from './cardSendYellowCompleteFront'
import { cardSendWhiteProps } from '../white/cardSendWhiteComplete';

class CardCompleteYellow extends React.Component<cardSendWhiteProps, any> {    
    constructor(props: any){
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

    flip(){
        this.setState({showFront: !this.state.showFront})
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    completeCard = async(e: any) => {

        if(this.state.cardUUID === "") {
            ReactGA.event({
                category: "Button",
                action: "share_card",
                label: "cardSend",
            });
            
            const param = {
                send : this.props.card.fromPerson,
                receive : this.props.card.toPerson,
                firstTag : this.props.card.firstTag,
                secondTag : this.props.card.secondTag,
                thirdTag : this.props.card.thirdTag,
                fourthTag : this.props.card.fourthTag,
                memo : this.props.card.memo,
                cardColor : "yellow",
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
        if (this.state.showFront){
            return <CardSendYellowCompleteFront
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
                                    <input 
                                        value={'https://unbirthday.kr/cardreceive/'+this.state.cardUUID } 
                                        readOnly
                                        onClick={this.selectAll}
                                        inputMode="none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn" onClick={this.props.fixCard}/>
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
                    <img className="CS4card" src="../../img/yellowBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName'>
                        HAPPY<br></br>
                        UN-BIRTHDAY {this.props.card.toPerson}!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag-yellow">
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
                                <span className="CS4tag-yellow">
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
                                    <span className="CS4tag-yellow">
                                        <div>{this.props.card.thirdTag}</div>
                                    </span>
                                </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4tagSpace">
                                    <span className="CS4tag-yellow">
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
                        <pre className='CS4writeMessage'>{this.props.card.memo}</pre>

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
export default CardCompleteYellow;