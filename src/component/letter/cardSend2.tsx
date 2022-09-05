import React, {Component} from 'react';
import '../../static/cardsend2.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class cardSend2 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className= 'main'>
        <div className="btn">
            <img src="./img/back.png" className="backBtn"/>
        </div>
            <div className='mainText'>
                누구에게 누가 보내는 카드인가요?
            </div>
            <div className="yelloBox">
                <div>
                    <img src="./img/cardFront.png" className="card"/>
                </div>
                    
                <div className="insideYellow">
                    <div className="write">
                        <div className="toPerson">
                            <div className="nameBox">
                                    받는 사람
                            </div>
                            <div className="notice">3자 이내로 입력해주세요.</div>
                        </div>
                        <div className="fromPerson">
                            <div className="nameBox">
                                보내는 사람
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
                
                <div className='writeBack'>
                    <div>
                        뒷장 쓰기
                    </div>
                </div>
        </div>

        )
    }
}
export default cardSend2;