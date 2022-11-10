
import React, {Component} from 'react';
import '../../static/gotten/myCards.css';
import * as service from '../../service/service'

interface CardFront {
    card_no: string,
    send: string,
    receive: string,
    reg_date: string
    card_color: string,
}

class MyCards extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            cards: [] as CardFront[],
            tags: [],
        }
    }

    componentDidMount() {
        const id = sessionStorage.getItem("id")

        this.getTags(id)
        this.getCards(id)
    }

    getTags = async(id: unknown) => {
        if(typeof id === 'string') {
            const param = {
                id: id,
            }
            service.anyService("/mypage/tags", "get", this.getTagsCallBack, param)
        } else {
            //id가 없으면
        }
    }

    getTagsCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
            this.setState({
                tags: rData.data
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    getCards = async(id: unknown) => {
        if(typeof id === 'string') {
            const param = {
                id: id,
            }
            service.anyService("/mypage/cards", "get", this.getCardsCallBack, param)
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

    handleClickCardDetail = async(e: any) => {
        window.location.href="/gotten/cardgotten"
    }

    handleClickTagDetail = async(e: any) => {
        window.location.href="/gotten/taggotten"
    }

    showCard = (card: CardFront) => {
        let src = ""
        
        //색 하나 더 필요함
        if(card.card_color === "white"){
            src = "../img/newwhite.png"
        } else if(card.card_color === "pink"){
            src = "../img/pink.png"
        } else if(card.card_color === "yellow"){
            src = "../img/_.png"
        }
        return (
            <div className="user-wrap">
                <img className="user-image" src={src} id={card.card_no}/>
                <div className="user-text">{card.send}</div>
            </div>
            )
    }

    render() {
        return(
            <div className= 'MCmain'>
        <div className="MCstatus">
            <img className="MClogo" src="../img/logo.png"/>
            <div className="MCmainText">
                내 카드함
            </div>
        </div>

        <div className="MCtags">
            <div className="MCrow1">
                <div className="MCrowText1">
                    <div>받은 #태그</div>
                    <div className="MCsmall1" onClick={this.handleClickTagDetail}>자세히 보기</div>
                </div>
                <div className="MCrowTag">
                    {/* {this.state.tags.length !== 0 ? this.state.tags.slice(0, 3).map((tag: String) => <div className="MCblue-Tag">#{tag}</div>) : ''} */}
                    <div className="MCrowTags">
                        <img className="MCeachTag" src="../img/tag_crazy.png"/>
                        <img className="MCeachTag" src="../img/tag_likekid.png"/>
                        <img className="MCeachTag" src="../img/tag_goodenergy.png"/>
                        <img className="MCeachTag" src="../img/tag_goodenergy.png"/>
                        {/* 여기에 태그 이어서 들어감 */}
                    </div>
                </div>
            </div>
        </div>

        <div className="MCcards">
            <div className="MCrow2">
                <div className="MCrowText2">
                    <div>받은 카드</div>
                    <div className="MCsmall2" onClick={this.handleClickCardDetail}>자세히 보기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> 
                </div>
                <div className="MCrowCard">
                    {this.state.cards.length !== 0 
                        ? this.state.cards.slice(0, 5).map((card: CardFront) => 
                            this.showCard(card)) 
                        : ''}

                {/* <img className="user-wrap" src="../img/tag_crazy.png"/>
                <img className="user-wrap" src="../img/tag_crazy.png"/> */}
                    {/* <div className="MCrowCards"> */}
                        <div className="user-wrap">
                            {/* <div className="user-image">  */}
                                <img className="user-image"src="../img/newwhite.png"/>
                            {/* </div> */}
                            <div className="user-text">이름1
                                {/* <div>이름1</div> */}
                            </div>
                        </div>
                        <div className="user-wrap">
                            <img className="user-image"src="../img/newwhite.png"/>
                            <div className="user-text"> 이름2</div>
                        </div>
                        <div className="user-wrap">
                            <img className="user-image"src="../img/newwhite.png"/>
                            <div className="user-text"> 이름2</div>
                        </div>
                        {/* <div className="user-wrap">
                            <div className="user-image"> 
                                <img src="../img/newwhite.png"/>
                            </div>
                            <div className="user-text">
                                <div>이름1</div>
                            </div>
                        </div>
                        <div className="user-wrap">
                            <div className="user-image"> 
                                <img src="../img/newwhite.png"/>
                            </div>
                            <div className="user-text">
                                <div>이름1</div>
                            </div>
                        </div> */}
                    {/* </div> */}
                    
                    {/* <img className="MCeachCard" src="../img/pink.png"/>
                    <div>이름2</div>
                    <img className="MCeachCard" src="../img/newwhite.png"/>
                    <div>이름3</div> */}
                </div>
            </div>
            
        </div>

        <div className="MCinfos">
            <div className="MCrowText2">
                내 정보
            </div>
            <div className="MCrowInfo">
                <div className="MCidpw">
                    <div className="MCname">아이디</div> 
                    <div className="MCuser">{sessionStorage.getItem("id")}</div>
                </div>
                <div className="MCnoticeText">
                    <div className="MCnotices">로그아웃하기</div>
                    <div className="MCnotices">FAQ, 이런 기능은 없나요?</div>
                </div>
            </div>
            
        </div>

    </div>
        )
    }
}
export default MyCards;