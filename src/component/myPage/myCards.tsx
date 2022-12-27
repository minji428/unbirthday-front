
import React, {Component} from 'react';
import TagGotten from './tagGotten';
import '../../static/gotten/myCards.css';
import '../../static/gotten/tagGotten.css'
import * as service from '../../service/service'

interface CardFront {
    card_no: string,
    send: string,
    receive: string,
    reg_date: string
    card_color: string,
}

export interface Tag {
    tag: string,
    num: number,
}

export interface AllTags {
    first_tag: Tag[],
    second_tag: Tag[],
    third_tag: Tag[],
    fourth_tag: Tag[],
}


class MyCards extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            cards: [] as CardFront[],
            tags: {} as AllTags,
            isClicked: false,
        }
        
        this.notion = this.notion.bind(this)
    }

    componentDidMount() {
        const id = sessionStorage.getItem("id")

        if(id === null) {
            window.location.href = '/login'
        }

        this.getTags(id)
        this.getCards(id)
    }

    getTags = async(id: unknown) => {
        if(typeof id === 'string') {
            const param = {
                id: id,
            }
            service.anyService("/mypage/taggotten", "get", this.getTagsCallBack, param)
        } else {
            //id가 없으면
        }
    }

    getTagsCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00") {
            this.setState({
                tags: {
                    first_tag: rData.data.first_tag,
                    second_tag: rData.data.second_tag,
                    third_tag: rData.data.third_tag,
                    fourth_tag: rData.data.fourth_tag,
                }
            })
        } else if(rData.rtCode !== "09") {
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
        if (this.state.cards !== null) {
            window.location.href="/gotten/cardgotten"
        }  else {
            alert("받은 카드를 저장하면 기능이 오픈돼요")
        }
    }

    handleClickTagDetail = async(e: any) => {
        //window.location.href="/gotten/taggotten"

        if (Object.keys(this.state.tags).length !== 0) {
            this.setState({
                isClicked: !this.state.isClicked,
            })
        } else {
            alert("받은 카드를 저장하면 기능이 오픈돼요")
        }
    }

    showCard = (card: CardFront) => {
        let src = `../img/card_empty_${card.card_color}.png`
        let color_from = `CGfrom-${card.card_color}`
        let color_to = `hubd-${card.card_color}`
        
        return (
            <div className="card">
                <img className="MCeachCard" src={src} id={card.card_no}/>
                <div className={color_to}>
                    HAPPY<br></br>
                    UN-BIRTHDAY<br></br>
                    {card.send}!
                </div>
                <div className={color_from}>From.{card.receive}</div>
            </div>
            )
    }

    showTag = (index: number, tag: Tag) => {
        let color=""

        if(index === 0) color = "pink"
        else if(index === 1) color = "blue"
        else if(index === 2) color = "green"
        else color = "orange"

        tag.num > 1 ? color=`MC${color}-Tag` : color=`MC${color}-BlankTag`
        
        return (
            <div className={color}>{tag.tag}</div>
        )
    }
    
    logout(){
        sessionStorage.clear()
        window.location.href="/"
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    notion(){
        window.location.href = 'https://www.notion.so/620ee737c47240e0a77faba2b831df24'
    }

    render() {
        if(this.state.isClicked) {
            return <TagGotten tags={this.state.tags}/>
        }
        return(
            <div className= 'MCmain'>
                <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div>
        <div className="MCstatus">
            {/* <img className="MClogo" src="../img/logo.png"/> */}
            <div className="MCmainText">
                내 카드함
            </div>
        </div>
        { Object.keys(this.state.tags).length !== 0 ?
            <div className='MCstatusBar_full'>
                <div className='MCstatusBarText_full'>생일이 아닌 오늘도 특별하길!</div>
            </div>
            : 
            <div className='MCstatusBar_empty'>
                <img className="barImg" src="../../img/bt_warn.png"/>
                <div className='MCstatusBarText_empty'>아직 받은 카드가 없어요. 먼저 카드를 보내보는 건 어때요?</div>
            </div>
        }

        <div className="MCtags">
            <div className="MCrow1">
                <div className="MCrowText1">
                    <div>받은 #태그</div>
                    <div className="MCsmall1" onClick={this.handleClickTagDetail}>자세히 보기</div>
                </div>
                <div className="MCrowTag">
                    <div className="MCrowTags">
                        { Object.keys(this.state.tags).length !== 0
                            ? Object.keys(this.state.tags).map((key, index) => this.showTag(index, {
                                        tag: Object.keys(this.state.tags[key])[0], 
                                        num:  Number(Object.values(this.state.tags[key])[0])
                                    }
                                ))
                            : ''
                        }
                        {/* 
                        <div className="MCpink-Tag">#확인용핑크</div>
                        <div className="MCpink-BlankTag">#블랭크핑크</div>
                        <div className="MCorange-Tag">#확인용주황</div>
                        <div className="MCorange-BlankTag">#블랭크주황</div>
                        <div className="MCblue-Tag">#확인용블루</div>
                        <div className="MCblue-BlankTag">#블랭크블루</div>
                        <div className="MCgreen-Tag">#확인용그린</div>
                        <div className="MCgreen-BlankTag">#블랭크그린</div> 
                        */}
                    </div>
                    { Object.keys(this.state.tags).length === 0
                        ? <div className="MCrowTags">
                            <div className="MCTag-null">#???</div>
                            <div className="MCTag-null">#???</div>
                            <div className="MCTag-null">#???</div>
                            <div className="MCTag-null">#???</div>
                        </div>
                        :  ''
                    }
                </div>
            </div>
        </div>

        <div className="MCcards">
                <div className="MCrowText2">
                    <div>받은 카드</div>
                    <div className="MCsmall2" onClick={this.handleClickCardDetail}>자세히 보기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> 
                </div>
                <div className="MCrowCard">
                        <div className="scroll-container">
                            { this.state.cards !== null
                            ? this.state.cards.slice(0, 5).map((card: CardFront) => this.showCard(card))
                            : ''}
                            {/* 
                            <div className="card">
                                <img className="MCeachCard" src="../img/card_empty_white.png"/>
                                <div className="hubd-white">HAPPY<br></br>
                                UN-BIRTHDAY<br></br>
                                주연!</div>
                                <div className="CGfrom-white">From.재현</div>
                            </div>
                            <div className="card">
                                <img className="MCeachCard" src="../img/card_empty_yellow.png"/>
                                <div className="hubd-yellow">HAPPY<br></br>
                                UN-BIRTHDAY<br></br>
                                정혜!</div>
                                <div className="CGfrom-yellow">From.소연이</div>
                            </div>
                            <div className="card">
                                <img className="MCeachCard" src="../img/card_empty_purple.png"/>
                                <div className="hubd-purple">HAPPY<br></br>
                                UN-BIRTHDAY<br></br>
                                아름이!</div>
                                <div className="CGfrom-purple">From.지윤</div>
                            </div>
                            <div className="card">
                                <img className="MCeachCard" src="../img/card_empty_orange.png"/>
                                <div className="hubd-orange">HAPPY<br></br>
                                UN-BIRTHDAY<br></br>
                                지수!</div>
                                <div className="CGfrom-orange">From.민규</div>
                            </div>
                            <div className="card">
                                <img className="MCeachCard" src="../img/card_empty_white.png"/>
                                <div className="hubd-white">HAPPY<br></br>
                                UN-BIRTHDAY<br></br>
                                주연!</div>
                                <div className="CGfrom-white">From.재현</div>
                            </div>
                             */}
                        </div>
                        { this.state.cards !== null
                            ? ''
                            : <div className="scroll-container">
                                <div className="card">
                                    <img className="MCeachCard" src="../img/card_empty_white.png"/>
                                    <div className="hubd-white-null">
                                    ???</div>
                                    <div className="CGfrom-white-null">???</div>
                                </div>
                                <div className="card">
                                    <img className="MCeachCard" src="../img/card_empty_yellow.png"/>
                                    <div className="hubd-yellow-null">
                                    ???</div>
                                    <div className="CGfrom-yellow-null">???</div>
                                </div>
                                <div className="card">
                                    <img className="MCeachCard" src="../img/card_empty_orange.png"/>
                                    <div className="hubd-orange-null">
                                    ???</div>
                                    <div className="CGfrom-orange-null">???</div>
                                </div>
                            </div> 
                        }
                        
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
                    <div className="MCnotices" onClick={this.logout}>로그아웃하기</div>
                    <div className="MCnotices" onClick={this.notion}>문의하기</div>
                </div>
            </div>
            
        </div>

    </div>
        )
    }
}
export default MyCards;