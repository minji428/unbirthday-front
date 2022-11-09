
import React, {Component} from 'react';
import { Card } from '../myPage/cardGotten'
import GetCard2 from '../getCard/getCard2';

import '../../static/getCard/getCard1.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

interface cardGottenProps {
    card: Card,
}

class GetCard1 extends React.Component<cardGottenProps, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isClicked: false,
        }
    }

    getCard2 = (event: any) => {
        this.setState({
            isClicked: true,
        })
    }

    render() {
        if (this.state.isClicked && this.props.card!=null) {
            return <GetCard2 card={this.props.card} />
        }
        return(
            <div className= 'GC1main' onClick={(e) => this.getCard2(e)}>
            <div className="GC1colors">
                <img className="GC1color" src="../img/colors.png"/>
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