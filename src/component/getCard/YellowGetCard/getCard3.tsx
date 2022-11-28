import React, {Component, ReactPropTypes} from 'react';
import { Card } from '../../myPage/cardGotten'

import '../../../static/getCard/getCard3.css';
import GetCard2 from './getCard2';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

//재사용할 수 있는 방법 찾아보기
export interface getCard2Props {
    card: Card,
    setCard: (card:Card) => void,
}

class YellowGetCard3 extends React.Component<getCard2Props, any> {
    constructor(props: any){
        super(props)

        this.state = {
            isFlipped: true,
        }
        
        this.cardFront = this.cardFront.bind(this)
    }

    cardFront = (event:any) => {
        this.setState({
            isFlipped: false,
        })
        this.props.setCard(this.props.card); 
    }

    cardsend = (event: any) => {
        window.location.href = '/cardsend'
    }
    
    render() {
        if (!this.state.isFlipped && this.props.card!=null) {
            return <GetCard2 card={this.state.card}/>
        }
        
        return(
            <div className= 'GC3main'>
            <div className="GC3texts">
                <div className='GC3mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
            </div>
                <div className="GC3yelloBox">
                    <div>
                        <img className="GC3card" src="../img/yellowBack.png"/>
                    </div>
                        
                    <div className="GC3insideYellow" onClick={(e) => this.cardFront(e)}>
                        <div className='GC3personNameYellow'>
                            HAPPY<br></br>
                            UN-BIRTHDAY {this.props.card.receive}!
                        </div>
                        <div className="GC3tagMessage">
                            <div className="GC3temp">
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>{this.props.card.first_tag}</div>
                                    </span>
                                 </div>
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>
                                    {this.props.card.receive}(이)는
                                    </div>
                                </div>
                            </div>
                                
                            <div className="GC3temp">
                                 <div className="GC3textSpace">
                                    <div className='GC3subText'>
                                        정말 
                                    </div>
                                </div>
                    
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>{this.props.card.second_tag}
                                            
                                        </div>
                                    </span>
                                </div>
                                    
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                                사람이야.</div>
                                         </div>
                                </div>
            
                                <div className="GC3temp">
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                            나는 </div>
                                    </div>
                                    
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                        {this.props.card.receive}(이)의 </div>
                                    </div>
                                    
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>{this.props.card.third_tag}</div>
                                        </span>
                                    </div>
                                </div>
            
                                <div className="GC3temp">
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>{this.props.card.fourth_tag}</div>
                                        </span>
                                    </div>
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                             <div className="GC3writeMessage" >
                                {/* 
                                <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                                <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                                <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                                <div>오늘도 해피 언버스데이 :)  </div>           
                                */}
                                {this.props.card.memo}
                            </div>
    
                        </div>
                    </div>
                    
                    <div className="GC3btns">
                        <div className="GC3btn">
                            <img src="../img/bt_reply.png" onClick={this.cardsend} />
                        </div>
                    </div>
                </div>
    

        )
    }
}
export default YellowGetCard3;