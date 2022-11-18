import React, {Component} from 'react';
import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

class cardSendYellowComplete extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            cardNo: "",
            cardColor : "",
            firstTag : "",
            secondTag : "",
            thirdTag : "",
            fourthTag : "",
            memo : "",
            receive : "",
            send : ""
        }

    }

    componentDidMount = () => {
        service.anyService("/card/info/"+sessionStorage.getItem("cardUUID"), "get", this.didMountCallback)
    }

    didMountCallback = (response: any) => {
        console.log(response.data)
        const data = response.data.data
        console.log(data)
        this.setState({
            cardNo: data.card_no,
            cardColor : data.card_color,
            firstTag : data.first_tag,
            secondTag : data.second_tag,
            thirdTag : data.third_tag,
            fourthTag : data.fourth_tag,
            memo : data.memo,
            receive : data.receive,
            send : data.send
        })
    }

    render() {
        return(
            <div className= 'CS4main'>
        <div className="CS4btn">
            <img src="../../img/back.png" className="CS4backBtn"/>
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
                    <img className="CS4card" src="../../img/yellowBack.png"/>
                </div>
                    
                <div className="CS4insideYellow">
                    <div className='CS4personName'>
                        HAPPY<br></br>
                        UN-BIRTHDAY {this.state.receive}!
                    </div>
                    <div className="CS4tagMessage">
                        <div className="CS4temp">
                            <div className="CS4tagSpace">
                                <span className="CS4tag">
                                    <div>{this.state.firstTag}</div>
                                </span>
                             </div>
                            <div className="CS4textSpace">
                                <div className='CS4subText'>
                                    {this.state.receive}(이)는
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
                                    <div>{this.state.secondTag}</div>
                                </span>

                            </div>
                                
                            <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                            사람이야.
                                    </div>
                            </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        나는
                                    </div>
                                </div>
                                
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        {this.state.receive}(이)의
                                    </div>
                                </div>
                                
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>{this.state.thirdTag}</div>
                                    </span>
                                </div>
                            </div>
        
                            <div className="CS4temp">
                                <div className="CS4tagSpace">
                                    <span className="CS4tag">
                                        <div>{this.state.fourthTag}</div>
                                    </span>
                                </div>
                                <div className="CS4textSpace">
                                    <div className='CS4subText'>
                                        모습이 좋아.
                                    </div>
                                </div>
                            </div>

                        </div> 
                         <div className="CS4writeMessage" >
                            {this.state.memo}     
                        </div>

                    </div>
                </div>
                <div className="CS4notice">앞면 보기</div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png"/>
                </div>
            </div>

  

        )
    }
}
export default cardSendYellowComplete;