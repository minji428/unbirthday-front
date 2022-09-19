import React, {Component} from 'react';
import '../../../static/cardSend/cardSendBack.css';

// import CardSendComplete from './cardSendComplete'

class cardSendWhiteBack extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    backButton(){
        // location.href로 하면 새로고침 되어서 이전에 작성했던 내용들이 사라짐..
        // 뒷장 쓰기 했던 것 처럼 컴포넌트를 변경하는 방법 생각해보기
        window.location.href = '/cardsend/white'
    }

    render() {
        return(
            <div className= 'CS3main'>
            <div className="CS3btn">
                <img src="../img/back.png" className="CS3backBtn" onClick={this.backButton}/>
            </div>
                <div className='CS3mainText'>
                    그 사람을 생각하며 채워주세요.
                </div>
                <div className="CS3yelloBox">
                    <div>
                        <img className="CS3card" src="../img/yellowBack.png"/>
                    </div>
                        
                    <div className="CS3insideYellow">
                        <div className='CS3personName'>
                            HAPPY<br></br>
                            UN-BIRTHDAY 은빈!
                        </div>
                        <div className="CS3tagMessage">
                            <div className="CS3temp">
                                <div className="CS3tagSpace">
                                    <span className="CS3tag">
                                        <div>#태그선택</div>
                                    </span>
                                 </div>
                                <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        은빈(이)는
                                    </div>
                                </div>
                            </div>
                                
                            <div className="CS3temp">
                                 <div className="CS3textSpace">
                                    <div className='CS3subText'>
                                        정말 
                                    </div>
                                </div>
                    
                                <div className="CS3tagSpace">
                                    <span className="CS3tag">
                                        <div>#태그선택
                                            
                                        </div>
                                        </span>
    
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                                사람이야.</div>
                                         </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                            나는 </div>
                                    </div>
                                    
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                            은빈(이)의 </div>
                                    </div>
                                    
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag">
                                            <div>#태그선택</div>
                                        </span>
                                    </div>
                                </div>
            
                                <div className="CS3temp">
                                    <div className="CS3tagSpace">
                                        <span className="CS3tag">
                                            <div>#태그선택</div>
                                        </span>
                                    </div>
                                    <div className="CS3textSpace">
                                        <div className='CS3subText'>
                                        모습이 좋아.</div>
                                    </div>
                                </div>
    
                            </div> 
                        
                        
                             <div className="CS3writeMessage" >
                                <div>생일에나 할 수 있는 얘기를 오늘 해보네! </div>
                                <div>낯간지럽지만 꼭 해주고 싶은 말이야.</div> 
                                <div>매일이 생일처럼 특별했으면 좋겠어.</div> 
                                <div>오늘도 해피 언버스데이 :)  </div>            
                                <div className="CS3numCnt"> 
                                    <div>80/90</div>
                                </div>
                            </div>
                            <div className="CS3notice">최소 1자 이상 입력해주세요.</div>
    
    
                        </div>
                    </div>
                    
                    <div className='CS3complete'>
                        <div>
                            완성하기
                        </div>
                        {/* 완성하기 누르면 uuid 생성하고 그 url로 이동시킨 다음에 Complete 보여주기 */}
                    </div>
                </div>
   
        )
    }
}
export default cardSendWhiteBack;