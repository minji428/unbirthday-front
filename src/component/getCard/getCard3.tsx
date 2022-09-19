
import React, {Component} from 'react';
import '../../static/getCard/getCard3.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class GetCard3 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'GC3main'>
            <div className="GC3texts">
                <div className='GC3mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
                <div className="GC3subTexts">
                    카드를 저장하면 내가 받은 #태그도 모아볼 수 있어요.
                </div>
            </div>
                <div className="GC3yelloBox">
                    <div>
                        <img className="GC3card" src="../img/yellowBack.png"/>
                    </div>
                        
                    <div className="GC3insideYellow">
                        <div className='GC3personName'>
                            HAPPY<br></br>
                            UN-BIRTHDAY 은빈!
                        </div>
                        <div className="GC3tagMessage">
                            <div className="GC3temp">
                                <div className="GC3tagSpace">
                                    <span className="GC3tag">
                                        <div>#귀여운</div>
                                    </span>
                                 </div>
                                <div className="GC3textSpace">
                                    <div className='GC3subText'>
                                        은빈(이)는
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
                                        <div>#유잼인
                                            
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
                                            은빈(이)의 </div>
                                    </div>
                                    
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>#좋은 에너지를 주는</div>
                                        </span>
                                    </div>
                                </div>
            
                                <div className="GC3temp">
                                    <div className="GC3tagSpace">
                                        <span className="GC3tag">
                                            <div>#현명한</div>
                                        </span>
                                    </div>
                                    <div className="GC3textSpace">
                                        <div className='GC3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                             <div className="GC3writeMessage" >
                                <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                                <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                                <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                                <div>오늘도 해피 언버스데이 :)  </div>          
                            </div>
    
                        </div>
                    </div>
                    
                    <div className="GC3btns">
                        <div className="GC3btn">카드 보내기</div>
                        <div className="GC3btn">내 카드함</div>
                    </div>
                </div>
    

        )
    }
}
export default GetCard3;