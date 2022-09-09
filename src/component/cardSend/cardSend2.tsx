import React, {Component} from 'react';
import '../../static/cardSend/cardSend2.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class cardSend2 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'CS2main'>
                <div className="CS2btnBack">
                    <img src="../img/back.png" className="CS2backBtn"/>
                </div>
                <div className='CS2mainText'>
                    누구에게 누가 보내는 카드인가요?
                </div>
                <div className="CS2yelloBox">
                    <div>
                        <img src="../img/cardFront.png" className="CS2card"/>
                    </div>
                        
                    <div className="CS2insideYellow">
                        <div className="CS2write">
                            <div className="CS2toPerson">
                                <div className="CS2nameBox">
                                    받는 사람
                                </div>
                                <div className="CS2notice">3자 이내로 입력해주세요.</div>
                            </div>
                            <div className="CS2fromPerson">
                                <div className="CS2nameBox">
                                    보내는 사람
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>
                    
                <div className='CS2writeBack'>
                    <div>
                        뒷장 쓰기
                    </div>
                </div>
        </div>

        )
    }
}
export default cardSend2;