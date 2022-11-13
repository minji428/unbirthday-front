import React, {Component} from 'react';
import '../../static/gotten/cardGotten.css';
import GetCard1 from '../getCard/getCard1';
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

type CardsWithDate = {
    reg_date: Card[],
}

class CardGotten extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isClicked: false,
            card: {} as Card,
            cards: [] as CardsWithDate[],
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
                cards: this.setCards(rData.data)
            })
            Object.keys(this.state.cards).map((key) =>{
                console.log(key)
            })
            Object.values(this.state.cards).map(key => {
                console.log(key)
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    backButton = async(e: any) => {
        window.location.href="/mypage"
    }

    setCards = (cards: Card[]) => {
        let dict: any = {}
        for(const card of cards){
            let reg_date=card.reg_date

            if(!(reg_date in dict)){
                dict[reg_date]=[]
            }
            dict[reg_date].push(card)
        }

        return dict
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

    getDayOfWeek(date: string){ //ex) getDayOfWeek('2022-06-13')
        const week = ['일', '월', '화', '수', '목', '금', '토'];
    
        return  week[new Date(date).getDay()];
    }
    
    showRegDate = (date: string) => {
        const dayOfWeek = this.getDayOfWeek(date)
        const arr = date.split("-");
        
        return (
                <div className="CGrowText">{arr[1]}월 {arr[2]}일 {dayOfWeek}요일</div>
        )
    }

    setAllCards = () => {
        let arr: any=[]

        Object.keys(this.state.cards).map(key=>{
            arr.push(this.showRegDate(key))

            this.state.cards[key].map((card: Card) =>{
                arr.push(this.showCard(card))
            })
        }) 
        return arr
    
    }

    cardFront = (event: any) => {
        let clickedCard = this.getCardInfo(event.target.id)
        console.log(clickedCard)

        this.setState({
            isClicked: !this.state.isClicked,
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

        Object.keys(this.state.cards).map(key=>{
            this.state.cards[key].map((card: Card) =>{
                if(card.card_no === card_no) {
                    clickedCard = card
                    return clickedCard
                }
            })
        }) 

        return clickedCard
    }

    render() {
        if (this.state.isClicked && this.state.card!=null) {
            return <GetCard1 card={this.state.card}/>
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
                        ? this.setAllCards()
                        : ''}
                    {/* {this.state.cards.length !== 0 
                        ? this.state.cards.map((card: Card) => 
                            this.showCard(card)) 
                        : ''} */}
                    <div className="CGrowText">
                        9월 3일 토요일
                    </div>
                    <div className="CGrowCard">
                        <div className="CGcard">
                                <img className="CGeachCard" src="../img/newwhite.png"/>
                                <div className="user-text">이름1</div>
                        </div>
                        <div className="CGcard">
                            <img className="CGeachCard" src="../img/pink.png"/>
                            <div className="user-text">이름2</div>
                        </div>    
                        <div className="CGcard">
                                <img className="CGeachCard" src="../img/newwhite.png"/>
                                <div className="user-text">이름3</div>
                        </div>
                        <div className="CGcard">
                            <img className="CGeachCard" src="../img/pink.png"/>
                            <div className="user-text">이름4</div>
                        </div>  
                        
                    </div>
               
                <div className="CGrowText">
                    9월 4일 일요일
                </div>
                <div className="CGrowCard">
                    <div className="CGcard">
                            <img className="CGeachCard" src="../img/newwhite.png"/>
                            <div className="user-text">이름1</div>
                        </div>
                        <div className="CGcard">
                            <img className="CGeachCard" src="../img/pink.png"/>
                            <div className="user-text">이름2</div>
                        </div>  
                    <div className="CGcard">
                        <img className="CGeachCard" src="../img/newwhite.png"/>
                        <div className="user-text">이름3</div>
                    </div>
                    </div>
                </div>
                <div className="CGrowText">
                    9월 5일 월요일
                </div>
                <div className="CGrowCard">
                    <div className="CGcard">
                            <img className="CGeachCard" src="../img/newwhite.png"/>
                            <div className="user-text">이름1</div>
                    </div>
                </div>
            </div>
           
        </div>
  
        )
        
    }
}
export default CardGotten;