import React, {Component} from 'react';
import '../../static/cardSend/cardSend4.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class CardSend4 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS4main'>
        <div className="CS4btn">
            <img src="../img/back.png" className="CS4backBtn"/>
        </div>
        <div className="CS4texts">
            <div className='CS4mainText'>
                카드가 완성됐어요!
            </div>
            <div className="CS4subTexts">
                링크를 전해주면 카드를 읽고 #태그를 간직할 수 있어요.
            </div>
        </div>
            <div className="CS4yelloBox">
                <div>
                    <img className="CS4card" src="../img/yellowBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName'>
                        HAPPY<br></br>
                        UN-BIRTHDAY 은빈!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag">
                                    <div>#귀여운</div>
                                </span>
                             </div>
                            <div className="CS4textSpace">
                                <div className='CS4subText'>
                                    은빈(이)는
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
                                    <div>#유잼인
                                        
                                    </div>
                                    </span>

                                </div>
                                
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                            사람이야.</div>
                                     </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        나는 </div>
                                </div>
                                
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        은빈(이)의 </div>
                                </div>
                                
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>#좋은 에너지를 주는</div>
                                    </span>
                                </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>#현명한</div>
                                    </span>
                                </div>
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                    모습이 좋아.</div>
                                </div>
                            </div>

                        </div> 
                         <div className="CS4writeMessage" >
                            <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                            <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                            <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                            <div>오늘도 해피 언버스데이 :)  </div>          
                        </div>

                    </div>
                </div>
                <div className="CS4notice">앞면 보기  </div>
                
                <div className='CS4complete'>
                    <div>
                        링크 복사하기
                    </div>
                </div>
            </div>

  

        )
    }
}
export default CardSend4;