
import React, {Component} from 'react';
import { Card } from '../myPage/cardGotten'
import YellowGetCard2 from './YellowGetCard/getCard2';
import OrangeGetCard2 from './OrangeGetCard/getCard2';
import WhiteGetCard2 from './WhiteGetCard/getCard2';
import PurpleGetCard2 from './PurpleGetCard/getCard2';

import '../../static/getCard/getCard1.css';
import { anyService } from '../../service/service';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

interface cardGottenProps {
    card: Card,
}

class GetCard1 extends React.Component<cardGottenProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isClicked: false,
            timerId: 0,
        }

    }

    componentDidMount(): void {
        let newTimerId = window.setInterval(() => {
            this.getCard2()
        }, 5000);

        this.setState({
            timerId: newTimerId
        })
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
        if (this.state.isClicked && this.props.card!=null) {
            if(this.props.card.card_color === 'orange') {
                return <OrangeGetCard2 card={this.props.card} />
            } else if(this.props.card.card_color === 'purple') {
                return <PurpleGetCard2 card={this.props.card} />
            } else if(this.props.card.card_color === 'white') {
                return <WhiteGetCard2 card={this.props.card} />
            } else if(this.props.card.card_color === 'yellow') {
                return <YellowGetCard2 card={this.props.card} />
            }
        }
        return(
            <div className= 'GC1main' onClick={this.getCard2}>
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
                        {this.props.card.receive}님 오늘도
                      {/* 은빈님 오늘도 */}
                    </div>
                    <div className="GC1subText">
                      언버스데이 축하해요&nbsp;💌
                    </div>
                </div>
            </div>
            {/* <div className="GC1btns">
                <div className="GC1btn">뭐지?</div>
            </div> */}
           
        </div>
        )
    }
}
export default GetCard1;