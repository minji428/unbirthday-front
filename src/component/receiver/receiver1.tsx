
import React, {Component} from 'react';
import { Card } from '../myPage/cardGotten'
import Orangereceiver2 from './OrangeReceiver/Orangereceiver2';
import Purplereceiver2 from './PurpleReceiver/Purplereceiver2';
import Whitereceiver2 from './WhiteReceiver/Whitereceiver2';
import Yellowreceiver2 from './YellowReceiver/Yellowreceiver2';

import '../../static/getCard/getCard1.css';
import * as service from '../../service/service'

{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class Receiver1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isClicked: false,
            timerId: 0,
            card: {} as Card
        }
    }

    componentDidMount(): void {
        this.getCard()

        let newTimerId = window.setInterval(() => {
            this.getCard2()
        }, 5000);

        this.setState({
            timerId: newTimerId
        })
    }

    getCard = async() => {
        const param = {
            cardUrl: window.location.href.split('/').pop(),
        }
        service.anyService("/card/receive", "get", this.getCardsCallBack, param)

    }
    
    getCardsCallBack = (response: any) => {
        console.log(response)
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
    
    render() {
        if (this.state.isClicked && this.state.card!=null) {
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
                <img className="GC1color" src="../img/colors.png"/>
            </div>
            <div className="GC1cakes">
                <img className="GC1cake" src="../img/pinkCake.png"/>
                <div className="GC1texts">
                    <div className="GC1subText">
                        {this.state.card.receive}님 오늘도
                      {/* 은빈님 오늘도 */}
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