import React, {Component} from 'react';
import ReactGA from "react-ga4";

import '../../../static/cardSend/cardSendBack.css';
import * as service from '../../../service/service'

import { Card } from '../white/cardSendWhiteFrame'
import { cardSendFrontProps } from '../white/cardSendWhiteBack';
import ChooseTagFirst from './chooseTag/chooseTag1';
import ChooseTagSecond from './chooseTag/chooseTag2'
import ChooseTagThird from './chooseTag/chooseTag3'
import ChooseTagFourth from './chooseTag/chooseTag4'

import CardCompleteOrange from './cardSendOrangeComplete'
import CardSendOrangeFront from './cardSendOrangeFront'

interface Tag{
    FirstTag : chooseTag1
}

interface chooseTag1 {
    FirstTag : any,
}

interface chooseTag2 {
    SecondTag : any
}

interface chooseTag3 {
    ThirdTag : any
}

interface chooseTag4 {
    FourthTag : any
}

class CardSendOrangeBack extends React.Component<cardSendFrontProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            card: {} as Card,
            chooseFirstTag : false,
            chooseSecondTag : false,
            chooseThirdTag : false,
            chooseFourthTag : false,
            firstTag : "",
            secondTag : "",
            thirdTag : "",
            fourthTag : "",
            memo: "",
            isCompleted: false,
            showFront: false,
        }

        this.chooseTagFirst = this.chooseTagFirst.bind(this)
        this.chooseTagSecond = this.chooseTagSecond.bind(this)
        this.chooseTagThird = this.chooseTagThird.bind(this)
        this.chooseTagFourth = this.chooseTagFourth.bind(this)
        this.clickFirst = this.clickFirst.bind(this)
        this.clickSecond = this.clickSecond.bind(this)
        this.clickThird = this.clickThird.bind(this)
        this.clickFourth = this.clickFourth.bind(this)
        this.writeMemo = this.writeMemo.bind(this)
        this.backButton = this.backButton.bind(this)
    }

    componentDidMount(): void {
        const numOfTags = Object.keys(this.props.card).length

        if(numOfTags !== 0) {
            this.setState({
                firstTag: this.props.card.firstTag,
                secondTag: this.props.card.secondTag,
                thirdTag: this.props.card.thirdTag,
                fourthTag: this.props.card.fourthTag,
                memo: this.props.card.memo,
                card: {
                    fromPerson: this.props.card.fromPerson,
                    toPerson: this.props.card.toPerson,
                    firstTag: this.props.card.firstTag,
                    secondTag: this.props.card.secondTag,
                    thirdTag: this.props.card.thirdTag,
                    fourthTag: this.props.card.fourthTag,
                    memo: this.props.card.memo,
                }
            })
        }
    }
    backButton(){
        // location.href로 하면 새로고침 되어서 이전에 작성했던 내용들이 사라짐..
        // 뒷장 쓰기 했던 것 처럼 컴포넌트를 변경하는 방법 생각해보기
        //window.location.href = '/cardsend/white'

        this.setState({
            showFront: true,
            card: {
                fromPerson: this.props.card.fromPerson,
                toPerson: this.props.card.toPerson,
                firstTag: this.state.firstTag,
                secondTag: this.state.secondTag,
                thirdTag: this.state.thirdTag,
                fourthTag: this.state.fourthTag,
                memo: this.state.memo,
            }
        })    
    }

    // 첫번째 태그 선택하는 화면
    chooseTagFirst(){
        this.setState({
            chooseFirstTag: true
        })
    }

    // 두번째 태그 선택하는 화면
    chooseTagSecond(){
        this.setState({
            chooseSecondTag: true
        })
    }

    // 세번째 태그 선택하는 화면
    chooseTagThird(){
        this.setState({
            chooseThirdTag: true
        })
    }

    // 네번째 태그 선택하는 화면
    chooseTagFourth(){
        this.setState({
            chooseFourthTag: true
        })
    }

    // 첫번째 태그 선택 완료
    clickFirst = (data: any) => {
        this.setState({
            firstTag : data,
            chooseFirstTag : false
        })
    }

    // 두번째 태그 선택 완료
    clickSecond = (data: any) => {
        this.setState({
            secondTag : data,
            chooseSecondTag : false
        })
    }

    // 세번째 태그 선택 완료
    clickThird = (data: any) => {
        this.setState({
            thirdTag : data,
            chooseThirdTag : false
        })
    }

    // 네번째 태그 선택 완료
    clickFourth = (data: any) => {
        this.setState({
            fourthTag : data,
            chooseFourthTag : false
        })
    }

    writeMemo = (data: any) => {
        data.target.value = this.limitString(data.target.value)

        this.setState({
            memo : data.target.value
        })
    }
    
    limitString = (string: string) => {
        const limit = 100
        string.length > limit ? string = string.substring(0, limit) : string = string

        return string
    }

    removeEmoji = (event: any) => {
        let string = event.target.value

        if(this.doesStrContainEmoji(string)) {
            const regexExp =  /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|\ufe0f|\u2764|\u200d)/g

            alert('이모티콘 사용은 불가해요😢')

            event.target.value = string.replace(regexExp, '')
            
            this.setState({
                memo : event.target.value
            })
        }  
    }

    doesStrContainEmoji = (string: string) => {
        const regexExp =  /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|\ufe0f|\u2764|\u200d)/g

        return regexExp.test(string)
    }

    completeCard = async(e: any) => {
        if (!this.state.firstTag) {
            alert("첫번째 태그를 선택해주세요.")
        } else if (!this.state.secondTag) {
            alert("두번째 태그를 선택해주세요.")
        } else if (!this.state.thirdTag) {
            alert("세번째 태그를 선택해주세요.")
        } else if (!this.state.fourthTag) {
            alert("네번째 태그를 선택해주세요.")
        } else {
            ReactGA.event({
                category: "Button",
                action: "complete_card",
                label: "cardSend",
            });
            
            const memoByDefault = "생일에나 할 수 있는 얘기를 오늘 해보네!\n낯간지럽지만 꼭 해주고 싶은 말이야.\n매일이 생일처럼 특별했으면 좋겠어.\n오늘도 해피 언버스데이 :)";
            
            this.setState({
                isCompleted: true,
                card: {
                    toPerson: this.props.card.toPerson,
                    fromPerson: this.props.card.fromPerson,
                    firstTag: this.state.firstTag,
                    secondTag: this.state.secondTag,
                    thirdTag: this.state.thirdTag,
                    fourthTag: this.state.fourthTag,
                    memo: this.state.memo ? this.state.memo : memoByDefault,
                }
            })
        }
    }

    handleCompleteCard = (response: any) => {
        var cardUUID = response.data.data
        sessionStorage.setItem("cardUUID", cardUUID)
        window.location.href = '/cardsend/orange/' + cardUUID
    }

    isCompleted = () => {
        this.setState({isCompleted: !this.state.isCompleted})
    }

    render() {
        if(this.state.showFront) {
            return <CardSendOrangeFront card={this.state.card} />
        }
        else if(this.state.isCompleted) {
            return <CardCompleteOrange card={this.state.card} fixCard={this.isCompleted}/>
        }
        return(
            <div className= 'CS1main'>
                <div className="CS3btn">
                    <img src="../img/back.png" className="CS3backBtn" onClick={this.backButton}/>
                </div>
                <div className='CS3mainText'>
                    그 사람을 생각하며 채워주세요.
                </div>
                <div className="CS3yelloBox">
                    <div>
                        <img className="CS3card" src="../img/orangeBack.png"/>
                    </div>
                        
                    <div className="CS3insideYellow">
                        <div className='CS3personNameforOrange'>
                            HAPPY<br></br>
                            UN-BIRTHDAY {this.props.card.toPerson}!
                        </div>
                        <div className="CS3tagMessage">
                            <div className="CS3temp">
                                <div className="CS3tagSpace">
                                    <span className="CS3tag-orange">
                                        <div onClick={this.chooseTagFirst}>{this.state.firstTag ? this.state.firstTag : "#태그선택"}</div>
                                        {this.state.chooseFirstTag ? <ChooseTagFirst clickFirst = {this.clickFirst}/>:''}
                                    </span>
                                 </div>
                                <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        {this.props.card.toPerson}(이)는
                                    </div>
                                </div>
                            </div>
                                
                            <div className="CS3temp">
                                 <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        정말 
                                    </div>
                                </div>
                    
                                <div className="CS3tagSpace">
                                    <span className="CS3tag-orange">
                                        <div onClick={this.chooseTagSecond}>{this.state.secondTag ? this.state.secondTag : "#태그선택"}</div>
                                        {this.state.chooseSecondTag ? <ChooseTagSecond clickSecond = {this.clickSecond}/>:''}
                                        </span>
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>사람이야.</div>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>나는</div>
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>{this.props.card.toPerson}(이)의</div>
                                    </div>
                                    
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag-orange">
                                            <div onClick={this.chooseTagThird}>{this.state.thirdTag ? this.state.thirdTag : "#태그선택"}</div>
                                            {this.state.chooseThirdTag ? <ChooseTagThird clickThird = {this.clickThird}/>:''}
                                        </span>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag-orange">
                                            <div onClick={this.chooseTagFourth}>{this.state.fourthTag ? this.state.fourthTag : "#태그선택"}</div>
                                            {this.state.chooseFourthTag ? <ChooseTagFourth clickFourth = {this.clickFourth}/>:''}
                                        </span>
                                    </div>
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                        
                        
                            <div className="CS3writeMessage">
                                {!this.state.memo ?
                                    <textarea className="memo" cols={10} rows={5} onChange={this.writeMemo} onBlur={this.removeEmoji} placeholder={"생일에나 할 수 있는 얘기를 오늘 해보네!\n낯간지럽지만 꼭 해주고 싶은 말이야.\n매일이 생일처럼 특별했으면 좋겠어.\n오늘도 해피 언버스데이 :) "} />
                                    : <textarea className="memo" cols={10} rows={5} onChange={this.writeMemo} onBlur={this.removeEmoji} value={this.state.memo}/>
                                }
                                <div className="CS3numCnt">{this.state.memo ? this.state.memo.length : '0'}/100</div>
                                <div className="CS3notice">입력을 안 할 경우 예시 문구로 카드를 완성해드려요.</div>
                            </div>
    
                        </div>
                    </div>
                    
                    <div className='CS3complete'>
                        <img src="../../img/bt_complete.png" onClick={this.completeCard}/>
                        {/* 완성하기 누르면 uuid 생성하고 그 url로 이동시킨 다음에 Complete 보여주기 */}
                    </div>
                </div>
   
        )
    }
}
export default CardSendOrangeBack;