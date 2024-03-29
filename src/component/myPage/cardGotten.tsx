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
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
            this.setState({
                cards: this.setCards(rData.data)
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
        let src = `../img/card_empty_${card.card_color}.png`
        let color_from = `CGfrom-${card.card_color}`
        let color_to = `hubd-${card.card_color}`

        return (
            <div className="CGcard">
                <img className="CGeachCard" src={src} id={card.card_no} onClick={(e) => this.cardFront(e)}/>
                <div className={color_to}>HAPPY<br></br>
                    UN-BIRTHDAY<br></br>
                    {card.receive}!</div>
                <div className={color_from}>From.{card.send}</div>
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
                <div className="CGrowText">{arr[0].slice(-2)}년 {arr[1]}월 {arr[2]}일 {dayOfWeek}요일</div>
        )
    }

    setAllCards = () => {
        let arr: any=[]
        let arr_cards: any=[]

        Object.keys(this.state.cards).map(key=>{
            //날짜
            arr.push(this.showRegDate(key))
            
            //카드
            this.state.cards[key].map((card: Card) =>{
                arr_cards.push(this.showCard(card))
            })
            arr.push(<div className="CGrowCard">{arr_cards}</div>)
            
            arr_cards=[]
        }) 

        return arr
    }

    cardFront = (event: any) => {
        let clickedCard = this.getCardInfo(event.target.id)

        this.setState({
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
            },
            isClicked: !this.state.isClicked,
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
                <div className="CGcards">
                    <div className="CGrow">
                        {this.state.cards !== null
                            ? this.setAllCards()
                            : ''}
                    </div>
                </div>
        </div>
  
        )
        
    }
}
export default CardGotten;