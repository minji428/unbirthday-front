import React, {Component} from 'react';
// import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

import CardSendOrangeCompleteFront from './cardSendOrangeCompleteFront'

class cardSendCompleteOrange extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            cardNo: "",
            cardColor : "",
            firstTag : "",
            secondTag : "",
            thirdTag : "",
            fourthTag : "",
            memo : "",
            receive : "",
            send : "",
            showFront : false
        }

    }

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

        this.cardSendOrangeCompleteFront = this.cardSendOrangeCompleteFront.bind(this)

    }

    handleCopyClipBoard = async (url: string) => {
        this.checkItsShared(url)

        if(navigator.share) {
            navigator.share({
                title: 'HAPPY UNBIRTHDAY!',
                text: '364일의 언버스데이 즐기기',
                url: url
            })
        } else {
            alert("공유하기가 지원되지 않는 환경입니다.")
        }
    }

    checkItsShared = async(url: string) => {
        const param = {
            cardUrl: url
        }
        service.anyService("/card/share", "patch", this.checkItsSharedCallBack, param)
    }

    checkItsSharedCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00") {
            
        } else {
            //alert(rData.rtMsg)
        }
    }

    cardSendOrangeCompleteFront(){
        if(this.state.showFront == true) {
            this.setState({
                showFront : false
            })
        } else {
            this.setState({
                showFront : true
            })
        }
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    render() {
        return(
            <div className= 'CS1main'>
                <div className='logo' onClick={this.clickLogo}>
                    <img src="../../img/bt_logo.png"/>
                </div>
            <div className="CS4btn">
                <img src="../../img/back.png" className="CS4backBtn"/>
            </div>
            <div className="CS4texts">
                <div className='CS4mainText'>
                    카드가 완성됐어요!
                </div>
                <div className="CS4subTexts">
                    링크를 전해주면 홈 화면에 {this.state.receive}(이)의 이름이 떠요.<br></br>
                    얼른 {this.state.receive}(이)를 놀래켜주세요!
                </div>
            </div>
            <div className="CS4yelloBox">
                <div>
                    <img className="CS4card" src="../../img/orangeBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName-orange'>
                        HAPPY<br></br>
                        UN-BIRTHDAY {this.state.receive}!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag">
                                    <div>{this.state.firstTag}</div>
                                </span>
                             </div>
                            <div className="CS4textSpace">
                                <div className='CS4subText'>
                                    {this.state.receive}(이)는
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
                                <span className="CS4tag">
                                    <div>{this.state.secondTag}</div>
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
                                        {this.state.receive}(이)의
                                    </div>
                                </div>
                                
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>{this.state.thirdTag}</div>
                                    </span>
                                </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>{this.state.fourthTag}</div>
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
                            {this.state.memo}     
                        </div>

                    </div>
                </div>
                <div className="CS4notice" onClick={this.cardSendOrangeCompleteFront}>
                    앞면
                    {this.state.showFront ? <CardSendOrangeCompleteFront receivePerson={this.state.receive} sendPerson={this.state.send} clickFunction = {this.cardSendOrangeCompleteFront}/> :''}
                </div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png" onClick={()=>this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+this.state.cardNo)}/>
                </div>
            </div>
        )
    }
}
export default cardSendCompleteOrange;