import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../static/main.css';
import * as service from '../../service/service';


class main extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            receiverName : []
        }

        this.cardSend = this.cardSend.bind(this)
    }

    componentDidMount(): void {
        //PC 유입 시
        let details = navigator.userAgent
        let regexp = /android|iphone|kindle|ipad/i
        let isMobileDevice = regexp.test(details)
        
        if (!isMobileDevice) {
            alert('모바일을 이용하면 더 편하게 카드를 주고받을 수 있어요 :)')
        }

        service.anyService("/main", "get", this.mainCallback)
    }

    mainCallback = (response: any) => {
        let arr = new Array();
        const receiver = response.data.data

        receiver.forEach((element: any) => {
          arr.push(element.name)
        })
        this.setState({
            receiverName : arr
        })
    }

    cardSend(){
        window.location.href = '/cardsend'
    }

    mycards() {
        console.log(sessionStorage.getItem("id"))
        if(sessionStorage.getItem("id") === null) {
            window.location.href = '/login'
        } else {
            window.location.href = '/mypage'
        }
        
    }

    render() {
        return(
            <div className= 'HomeMain'>
                <div className="happyUnbirthday">
                    <img src="./img/mainText.png"/>
                </div>
                <div className="names">
                    <div className="NameRow"> 
                        <div>{this.state.receiverName[0]}</div>
                        <div>{this.state.receiverName[1]}</div>
                    </div>
                    <div className="NameRow">
                        <div className="insideRow2">
                            <div>{this.state.receiverName[2]}</div>
                            <div>{this.state.receiverName[3]}</div>
                        </div> 
                        <div className="insideRow2">
                            <div>{this.state.receiverName[4]}</div>
                            <div>{this.state.receiverName[5]}</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>{this.state.receiverName[6]}</div>
                            <div>{this.state.receiverName[7]}</div>
                            <div>{this.state.receiverName[8]}</div>
                            <div>{this.state.receiverName[9]}</div>
                            <div>{this.state.receiverName[10]}</div>
                            <div>{this.state.receiverName[11]}</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>{this.state.receiverName[12]}</div>
                            <div>{this.state.receiverName[13]}</div>
                            <div>{this.state.receiverName[14]}</div>
                            <div>{this.state.receiverName[15]}</div>
                            <div>{this.state.receiverName[16]}</div>
                            <div>{this.state.receiverName[17]}</div>
                        </div>
                    </div>
                    <div className="rowSpecial">
                        <div>
                        {this.state.receiverName[18]}
                        </div>
                        <div className="ment">
                            <div>
                                바로 지금 언버스데이를 축하받은 사람들
                            </div>
                            <div>
                                생일이 아닌 오늘을 축하해!
                            </div>
                        </div>
                        <div>
                            {this.state.receiverName[19]}
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow6">
                            <div>{this.state.receiverName[20]}</div>
                            <div>{this.state.receiverName[21]}</div>
                            <div>{this.state.receiverName[22]}</div>
                            <div>{this.state.receiverName[23]}</div>
                            <div>{this.state.receiverName[24]}</div>
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow7">
                            <div>{this.state.receiverName[25]}</div>
                            <div>{this.state.receiverName[26]}</div>
                            <div>{this.state.receiverName[27]}</div>
                            <div>{this.state.receiverName[28]}</div>
                        </div>
                    </div>

                    <div className="NameRow"> 
                        <div className="insideRow8">
                            <div>{this.state.receiverName[29]}</div>
                            <div>{this.state.receiverName[30]}</div>
                            <div>{this.state.receiverName[31]}</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow9">
                            <div>{this.state.receiverName[32]}</div>
                            <div>{this.state.receiverName[33]}</div>
                        </div>
                    </div>
                    <div className="NameRow"> 
                        <div className="insideRow3">
                            <div>{this.state.receiverName[34]}</div>
                        </div>
                    </div>
                </div>

                <div className="btns">
                    <div className="btn1">
                        <img src="../img/bt_send_card.png" onClick={this.cardSend}></img>
                    </div>
                    <div className="btn2">
                        <img src="../img/bt_mycards.png" onClick={this.mycards}></img>
                    </div>
                </div>
            </div>
  
        )
    }
}
export default main;