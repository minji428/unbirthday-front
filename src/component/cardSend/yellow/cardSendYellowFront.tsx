import React, {Component} from 'react';
import { Card } from '../white/cardSendWhiteFrame'
import { cardSendBackProps } from '../white/cardSendWhiteFront';
import '../../../static/cardSend/cardSendFront.css';

import CardSendYellowBack from './cardSendYellowBack'

class CardSendYellowFront extends React.Component<cardSendBackProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            showback : false,
            toPerson : "",
            fromPerson : "",
            isFromPersonValid: true,
            isToPersonValid: true,
            card: {} as Card
        }

        this.cardSendYelloBack = this.cardSendYelloBack.bind(this)
    }

    componentDidMount(): void {
        console.log(this.props.card)
        if(Object.keys(this.props.card).length !== 0){
            this.setState({
                toPerson: this.props.card.toPerson,
                fromPerson: this.props.card.fromPerson,
                firstTag: this.props.card.firstTag,
                secondTag: this.props.card.secondTag,
                thirdTag: this.props.card.thirdTag,
                fourthTag: this.props.card.fourthTag,
                memo: this.props.card.memo,
            })
        }
    }

    cardSendYelloBack(){
        if (this.state.toPerson == ""
            || this.state.toPerson == " "
            || this.state.toPerson == "   "
            || this.state. toPerson == "    ") {
            alert("받는사람을 입력해주세요.")
        } else if (this.state.fromPerson == ""
            || this.state.fromPerson == " "
            || this.state.fromPerson == "  "
            || this.state.fromPerson == "   ") {
            alert("보내는사람을 입력해주세요.")
        } else {
            this.setState({
                showback : true,
                card: {
                    fromPerson: this.state.fromPerson,
                    toPerson: this.state.toPerson,
                    firstTag: this.state.firstTag,
                    secondTag: this.state.secondTag,
                    thirdTag: this.state.thirdTag,
                    fourthTag: this.state.fourthTag,
                    memo: this.state.memo,
                }
            })
        }
    }

    backButton(){
        window.location.href = '/cardsend'
    }

    getToPerson=(event: any) => {
        if(!this.isValid(event.target.value)) {
            this.setState({isToPersonValid: false})
        }
        event.target.value = this.handleName(event.target.value)

        let getToPerson = event.target.value
        this.setState({toPerson : getToPerson})
    }

    getFromPerson=(event: any) => {
        if(!this.isValid(event.target.value)) {
            this.setState({isFromPersonValid: false})
        } 
        // else {
        //     this.setState({isFromPersonValid: true})
        // }
        event.target.value = this.handleName(event.target.value)

        let getFromPerson = event.target.value
        this.setState({fromPerson : getFromPerson})
    }

    handleName=(string: string) => {
        if(this.doesContainKorean(string) && string.length > 3) {
            return string.substring(0, 3)
        }
        else if(!this.doesContainKorean(string) && string.length > 4) {
            return string.substring(0, 4)
        }
        else {
            return string
        }
    }

    isValid=(string: string) => {
        if((this.doesContainKorean(string) && string.length > 3) 
            || (!this.doesContainKorean(string) && string.length > 4)) {
                return false
        }

        return true
    }

    doesContainKorean=(string: string) => {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        return korean.test(string)
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    render() {
        return(
            <div className= 'CS1main'>
                {/* <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div> */}
                <div className="CS2btnBack">
                    <img src="../img/back.png" className="CS2backBtn" onClick={this.backButton}/>
                </div>
                <div className='CS2mainText'>
                    누구에게 누가 보내는 카드인가요?
                </div>
                <div className="CS2yelloBox">
                    <div>
                        <img src="../img/cardFrontYellow.png" className="CS2card"/>
                    </div>
                        
                    <div className="CS2insideYellow">
                        <div className="CS2write">
                           <div className="CS2toPerson">
                                <div className="CS2nameBox">
                                    {Object.keys(this.props.card).length === 0
                                        ? <input type={'text'} className="form-control" name="toPerson" placeholder='받는 사람' onChange={this.getToPerson}/>
                                        : <input type={'text'} className="form-control" name="toPerson" value={this.props.card.toPerson} onChange={this.getToPerson}/>
                                    }
                                </div>
                                {this.state.isToPersonValid ? '' : <div className="CS2notice">3자 이내로 입력해주세요.</div>}
                            </div>
                            <div className="CS2fromPerson">
                                <div className="CS2nameBox">
                                    {Object.keys(this.props.card).length === 0 
                                        ? <input type={'text'} className="form-control" name="fromPerson" placeholder='보내는 사람' onChange={this.getFromPerson}/>
                                        : <input type={'text'} className="form-control" name="fromPerson" value={this.props.card.fromPerson} onChange={this.getFromPerson}/>
                                    }
                                </div>
                                {this.state.isFromPersonValid ? '' : <div className="CS2notice">3자 이내로 입력해주세요.</div>}
                            </div>
                        </div> 
                    </div>
                </div>
                    
                <div className='CS2writeBack' >
                    <img src="../../img/bt_write_back.png" onClick={this.cardSendYelloBack}></img>
                    {this.state.showback ? <CardSendYellowBack card={this.state.card}/>: ''}
                </div>
        </div>

        )
    }
}
export default CardSendYellowFront;