
import React, {Component} from 'react';
import { Card } from '../myPage/cardGotten'
import Orangereceiver2 from './OrangeReceiver/Orangereceiver2';
import Purplereceiver2 from './PurpleReceiver/Purplereceiver2';
import Whitereceiver2 from './WhiteReceiver/Whitereceiver2';
import Yellowreceiver2 from './YellowReceiver/Yellowreceiver2';

import '../../static/getCard/getCard1.css';
import * as service from '../../service/service'

class Receiver1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isClicked: false,
            timerId: 0,
            card: {} as Card,
            isOnMobile: false,
        }
    }

    componentDidMount(): void {
        //PC 유입 확인
        let details = navigator.userAgent
        let regexp = /android|iphone|kindle|ipad/i
        let isMobileDevice = regexp.test(details)

        if (isMobileDevice) {
            this.setState({isMobileDevice: true})
        }

        this.getCard()

        let newTimerId = window.setInterval(() => {
            this.getCard2()
        }, 5000);

        this.setState({
            timerId: newTimerId
        })

        // document.querySelector('meta[property="og:image"]')?.setAttribute("content")
        document.querySelector('meta[property="og:url"]')?.setAttribute("content",window.location.href)
    }

    getCard = async() => {
        const param = {
            cardUrl: window.location.href.split('/').pop(),
        }
        service.anyService("/card/receive", "get", this.getCardsCallBack, param)

    }
    
    getCardsCallBack = (response: any) => {
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
            this.setState({
                card: rData.data
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId)
    }
        
    getCard2 = () => {
        this.setState({
            isClicked: true,
        })
    }
    
    isOnMobile(): boolean {
        let details = navigator.userAgent
        let regexp = /android|iphone|kindle|ipad/i
        let isMobileDevice = regexp.test(details)

        return isMobileDevice
    }
    
    render() {
        if(!this.isOnMobile()) {
            return (
                <div className='pcMain'>
                    <div className="parties">
                        <img src="../../img/colors.png"/>
                        <img src="../../img/colors.png"/>
                    </div>
                    <div className="mains">
                        <img className="pcLogo" src="../../img/bt_logo.png"/>
                        <div className='texts'>
                            생일이 아니더라도, 오늘을 축하해!<br></br>
                            모바일로 언버스데이 카드를 주고 받아 보세요 :)
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.isClicked && this.state.card!==null) {
            if(this.state.card.card_color === 'orange') {
                return <Orangereceiver2 card={this.state.card} />
            } else if(this.state.card.card_color === 'purple') {
                return <Purplereceiver2 card={this.state.card} />
            } else if(this.state.card.card_color === 'white') {
                return <Whitereceiver2 card={this.state.card} />
            } else if(this.state.card.card_color === 'yellow') {
                return <Yellowreceiver2 card={this.state.card} />
            }
        }

        return(
            <div className= 'GC1main'  onClick={this.getCard2}>
            <div className="GC1colors">
                <img className='SF1-1' src="../img/line1.png"/>
                <img className='SF1-2' src="../img/line2.png"/>
                <img className='SF1-3' src="../img/line3.png"/>
                <img className='SF1-4' src="../img/line4.png"/>
                <img className='SF1-5' src="../img/line5.png"/>
                <img className='SF1-6' src="../img/line6.png"/>
                <img className='SF1-7' src="../img/line7.png"/>
                <img className='SF1-8' src="../img/line8.png"/>
            </div>
            <div className="GC1cakes">
                <img className="GC1cake" src="../img/pinkCake.png"/>
                <div className="GC1texts">
                    <div className="GC1subText">
                        {this.state.card.receive}님 오늘도
                    </div>
                    <div className="GC1subText">
                      언버스데이 축하해요&nbsp;💌
                    </div>
                </div>
            </div>
            <div className="GC1btns">
                <img className="GC1btn" src="../img/bt_what.png"></img>
            </div>
           
        </div>
        )
    }
}
export default Receiver1;