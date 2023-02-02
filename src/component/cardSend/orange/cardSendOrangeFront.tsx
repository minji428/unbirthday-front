import React, {Component, useRef,FocusEvent,useState}  from 'react';
import '../../../static/cardSend/cardSendFront.css';
import { Card } from '../white/cardSendWhiteFrame';
import { cardSendBackProps } from '../white/cardSendWhiteFront';
import ReactGA from "react-ga4";

import CardSendOrangeBack from './cardSendOrangeBack'

// const searchInput = useRef(null);
// const [arr, setArr] = useState<any[]>([]);
class CardSendOrangeFront extends React.Component<cardSendBackProps, any> {    constructor(props: any){
        super(props)

        this.state = {
            showback : false,
            toPerson : "",
            fromPerson : "",
            isFromPersonValid: true,
            isToPersonValid: true,
            card: {} as Card,
        }
        // const [value, setValue] = useState("");
        // const inputRef = useRef();
        this.cardSendOrangeBack = this.cardSendOrangeBack.bind(this)
    }
    
    componentDidMount(): void {
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

    cardSendOrangeBack(){
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
            ReactGA.event({
                category: "Button",
                action: "flip_card",
                label: "cardSend",
            });
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
        let toPerson = event.target.value

        if(this.isInvalid(toPerson) === 1 || this.isInvalid(toPerson) === 2) {
            this.setState({isToPersonValid: false})
        }
        event.target.value = this.handleName(toPerson)

        let getToPerson = event.target.value
        this.setState({toPerson : getToPerson})
    }

    getFromPerson=(event: any) => {
        let fromPerson = event.target.value
        let isInvalid = this.isInvalid(fromPerson)

        if(isInvalid === 1 || isInvalid === 2) {
            this.setState({isFromPersonValid: false})
        }
        // else {
        //     this.setState({isFromPersonValid: true})
        // }
        event.target.value = this.handleName(fromPerson)

        this.setState({fromPerson : event.target.value})
    }

    handleName=(string: string) => {
        if(this.isInvalid(string) === 1) {
            return string.substring(0, 3)
        }
        else if(this.isInvalid(string) === 2) {
            return string.substring(0, 4)
        }
        return string
    }

    // handleFocus=(e:FocusEvent<HTMLInputElement>)=>{
        
    //     if (searchInput.current!=null){
    //         // (document.activeElement as HTMLElement).blur();
    //         (searchInput.current as HTMLElement).blur(); // removing focus
    //     }

    //     // if (
    //     //     document.activeElement === searchInput.current
    //     //   ) {
    //     //     document.activeElement.blur();
    //     //   }
    //     // let [value, state]=useState("");
    //     // const inputRef=React.createRef();
    //     // // this.setState({value:inputRef.current.value})
    //     // e.preventDefault();
    //     // inputRef.current.blur();
    //     // inputRef.current.blur();
    // }

    removeEmoji = (event: any) => {
        // const [value, setValue] = useState("");
        // const inputRef = useRef();

        // (document.activeElement as HTMLElement).blur()
        // inputRef.current.blur();

        let string = event.target.value

        if(this.isInvalid(string) === 3) {
            alert('이모티콘 사용은 불가해요😢')

            //이모지 제거
            event.target.value = string.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
            
            if(event.target.name === 'fromPerson') {
                this.setState({fromPerson : event.target.value})
            } else {
                this.setState({toPerson : event.target.value})
            }
            
        }
    }

    //유효: 0, 길이 초과(한글): 1, 길이 초과(영어): 2 이모지 포함: 2
    isInvalid=(string: string) => {
        const VALID: number = 0
        const KOR: number = 1
        const ENG: number = 2
        const EMOJI: number = 3

        if(this.doesContainKorean(string) && string.length > 3) {
            return KOR
        } else if(!this.doesContainKorean(string) && string.length > 4) {
            return ENG
        } else if(this.doesStrContainEmoji(string)) {
            return EMOJI
        }
        return VALID
    }

    doesContainKorean=(string: string) => {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        return korean.test(string)
    }

    doesStrContainEmoji = (string: string) => {
        // const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
        const regexExp = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g

        return regexExp.test(string)
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className="CS2btnBack">
                    <img src="../img/back.png" className="CS2backBtn" onClick={this.backButton}/>
                </div>
                <div className='CS2mainText'>
                    누구에게 누가 보내는 카드인가요?
                </div>
                <div className="CS2yelloBox">
                    <div>
                        <img src="../img/cardFrontOrange.png" className="CS2card"/>
                    </div>
                        
                    <div className="CS2insideYellow">
                        <div className="CS2write">
                           <div className="CS2toPerson">
                                <div className="CS2nameBox">
                                    {Object.keys(this.props.card).length === 0
                                        ? <input type={'text'} className="form-control"  name="toPerson" placeholder='받는 사람' onChange={this.getToPerson} onBlur={this.removeEmoji} />
                                        : <input type={'text'} className="form-control" name="toPerson" defaultValue={this.props.card.toPerson} onChange={this.getToPerson} onBlur={this.removeEmoji} />

                                        // ? <input type={'text'} className="form-control"  name="toPerson" ref={searchInput} placeholder='받는 사람' onChange={this.getToPerson} onBlur={this.removeEmoji} onFocus={this.handleFocus} />
                                        // : <input type={'text'} className="form-control" name="toPerson" ref={searchInput} defaultValue={this.props.card.toPerson} onChange={this.getToPerson} onBlur={this.removeEmoji} onFocus={this.handleFocus}/>
                                    }                                </div>
                                {this.state.isToPersonValid ? '' : <div className="CS2notice">3자 이내로 입력해주세요.</div>}
                            </div>
                            <div className="CS2fromPerson">
                                <div className="CS2nameBox">
                                    {Object.keys(this.props.card).length === 0 
                                        ? <input type={'text'}  className="form-control" name="fromPerson" placeholder='보내는 사람' onChange={this.getFromPerson} onBlur={this.removeEmoji}/>
                                        : <input type={'text'} className="form-control" name="fromPerson" defaultValue={this.props.card.fromPerson} onChange={this.getFromPerson} onBlur={this.removeEmoji}/>
                                    }
                                </div>
                                {this.state.isFromPersonValid ? '' : <div className="CS2notice">3자 이내로 입력해주세요.</div>}
                            </div>
                        </div> 
                    </div>
                    
                </div>
                    
                <div className='CS2writeBack' >
                    <img src="../../img/bt_write_back.png" onClick={this.cardSendOrangeBack}/>
                    {this.state.showback ? <CardSendOrangeBack card={this.state.card}/>: ''}
                </div>
        </div>

        )
    }
}
export default CardSendOrangeFront;