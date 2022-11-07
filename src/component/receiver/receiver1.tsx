
import React, {Component} from 'react';
import '../../static/getCard/getCard2.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class Receiver1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'GC2main'>
            <div className="GC2texts">
                <div className='GC2mainText'>
                   짜잔~ 축하받은 걸 축하해요!
                </div>
                <div className="GC2subTexts">
                    카드를 저장하면 내가 받은 #태그를 분석해줘요.
                </div>
                
            </div>
                <div className="GC2yelloBox">
                    <div>
                        <img className="GC2card" src="../img/cardNormal.png"/>
                    </div>
    
                    <div className="GC2insideYellow">
                        <div className='GC2personName'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            은빈!
                        </div>
                        <div className="GC2subText">
                         From. 수수
                        </div>
                       </div>
                    </div>
                    
                    <div className="GC2btns">
                        <div className="GC2btn">
                            <img src="../img/bt_reply.png"></img>
                        </div>
                        <div className="GC2btn">
                            <img src="../img/bt_save_card.png"></img>
                        </div>
                    </div>
                </div>
    

        )
    }
}
export default Receiver1;