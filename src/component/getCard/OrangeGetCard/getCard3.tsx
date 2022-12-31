import React, {Component, ReactPropTypes} from 'react';
import { getCard2Props } from '../YellowGetCard/getCard3';

import '../../../static/getCard/getCard3.css';
import '../../../static/getCard/getCard2.css';
import GetCard2 from './getCard2';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}

class OrangeGetCard3 extends React.Component<getCard2Props, any> {
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
    
    toCardGotten = (event: any) => {
        window.location.href = '/gotten/cardGotten'
    }

    render() {
        if (!this.state.isFlipped && this.props.card!=null) {
            return <GetCard2 card={this.props.card}/>
        }
        
        return(
            <div className= 'GC2main'>
                <img src="../img/back.png" className="GC3backBtn" onClick={this.toCardGotten} />
                <div className="GC2texts">
                    <div className='GC2mainText'>
                    짜잔~ 축하받은 걸 축하해요!
                    </div>
                </div>
                <div className="GC2yelloBox">
                    <div>
                        <img className="GC2card" src="../../img/orangeBack.png"/>
                    </div>
                        
                    <div className="GC3insideYellow" onClick={(e) => this.cardFront(e)}>
                        <div className='GC3personNameOrange'>
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
                                    <div className='GC3subText'>{this.props.card.receive}(이)는</div>
                                </div>
                            </div>
                                
                            <div className="GC3temp">
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>정말</div>
                                </div>
                    
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>{this.props.card.second_tag}</div>
                                    </span>
                                </div>
                                    
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>사람이야.</div>
                                </div>
                            </div>
            
                            <div className="GC3temp">
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>나는 </div>
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
                                    <div className='GC3subText'>모습이 좋아.</div>
                                </div>
                            </div>
                        </div> 
                        <div className="GC3writeMessage" >
                            {this.props.card.memo}
                        </div>
                    </div>
                </div>
                    
                <div className="GC2btns">
                    <div className="GC2btn">
                        <img src="../img/bt_reply.png" onClick={this.cardsend} />
                    </div>
                </div>
            </div>
    

        )
    }
}
export default OrangeGetCard3;