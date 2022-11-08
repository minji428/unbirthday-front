import React, {Component} from 'react';
import '../../static/gotten/cardGotten.css';
import GetCard2 from '../receiver/receiver1';
import * as service from '../../service/service'

export interface Card {
    card_no: string,
    send: string,
    receive: string,
    first_tag: string,
    second_tag: string,
    third_tag: string,
    fourth_tag: string,
    memo: string,
    card_color: string,
    reg_date: string
}

class CardGotten extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            showfront: false,
            cards: [] as Card[],
            card: {} as Card,
        }

        this.cardFront = this.cardFront.bind(this)
    }

    componentDidMount(): void {
        const id = sessionStorage.getItem("id")

        this.getCards(id)
    }

    getCards = async(id: unknown) => {
        if(typeof id === 'string') {
            const param = {
                id: id,
            }
            service.anyService("/mypage/cardgotten", "get", this.getCardsCallBack, param)
        } else {
            //id가 없으면?,,
        }
    }

    getCardsCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
            this.setState({
                cards: rData.data
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    backButton = async(e: any) => {
        window.location.href="/mypage"
    }

    getDate = (date: string) => {

    }

    showCard = (card: Card) => {
        let src = ""

        if(card.card_color === "white"){
            src = "../img/newwhite.png"
        } else if(card.card_color === "pink"){
            src = "../img/pink.png"
        } else if(card.card_color === "yellow"){
            src = "../img/_.png"
        }

        return (
            // <div className="CGrowCard">
            //             <img className="CGeachCard" src={src} id={card.card_no} onClick={(e) => this.cardFront(e)}/>
            //             <img className="CGeachCard" src={src}/>
            // </div>
            <div className="user-wrap">
                <img className="user-image" src={src} id={card.card_no} onClick={(e) => this.cardFront(e)}/>
                <div className="user-text">{card.send}</div>
            </div>
            )
    }

    cardFront = (event: any) => {
        let clickedCard = this.getCardInfo(event.target.id)

        this.setState({
            showfront: true,
            card: {
                card_no: clickedCard.card_no,
                send: clickedCard.send,
                receive: clickedCard.receive,
                first_tag: clickedCard.first_tag,
                second_tag: clickedCard.second_tag,
                third_tag: clickedCard.third_tag,
                fourth_tag: clickedCard.fourth_tag,
                memo: clickedCard.memo,
                card_color: clickedCard.card_color,
                reg_date: clickedCard.reg_date,
            }
        })
    }

    //클릭한 카드의 card_no로 카드 정보 반환
    getCardInfo = (card_no: string) => {
        let clickedCard = {} as Card

        this.state.cards.forEach(function(card: Card){
            if(card.card_no === card_no){
                clickedCard = card
                return clickedCard
            }
        });
        return clickedCard
    }

    render() {
        if (this.state.showfront && this.state.card!=null) {
            return <GetCard2 card={this.state.card}/>
        }
        return(
            <div className= 'CGmain'>
            <div className="CGstatus">
                <img src="../img/back.png" className="CGbackBtn" onClick={this.backButton} />


                <div className="CGmainText">
                    받은 언버스데이 카드
                </div>
            </div>
    
            <hr></hr>
    
            <div className="CGcards">
                <div className="CGrow">
                    {this.state.cards.length !== 0 
                        ? this.state.cards.map((card: Card) => 
                            this.showCard(card)) 
                        : ''}
                    <div className="CGrowText">
                        9월 3일 토요일
                    </div>
                    <div className="CGrowCard">
                        <img className="CGeachCard" src="../img/newwhite.png"/>
                        <img className="CGeachCard" src="../img/pink.png"/>
                    </div>
                    <div className="CGrowCard">
                        <img className="CGeachCard" src="../img/newwhite.png"/>
                        <img className="CGeachCard" src="../img/pink.png"/>
                    </div>
                </div>
                <div className="CGrowText">
                    9월 3일 토요일
                </div>
                <div className="CGrowCard">
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                    <img className="CGeachCardEmpty"/>
                </div>
                <div className="CGrowCard">
                    <img className="CGeachCard" src="../img/newwhite.png"/>
                    <img className="CGeachCard" src=""/>
                </div>
            </div>
        </div>
  
        )
        
    }
}
export default CardGotten;