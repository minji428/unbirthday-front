import React, {Component} from 'react';
import '../../../static/cardSend/cardSendComplete.css';
import '../../../static/cardSend/cardSend4.css';
import * as service from '../../../service/service'

class cardCompleteWhite extends React.Component<{}, any> {
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
        const data = response.data.data
        
        this.setState({
            cardNo: data.card_no.replaceAll("-",""),
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

    handleCopyClipBoard = async (text: string) => {
        try{
            await navigator.clipboard.writeText(text);

            alert('링크가 복사되었습니다. 친구에게 공유해주세요!');
        }catch(error){
            alert('링크 복사를 실패했습니다.')
        }
    }

    render() {
        return(
            <div className= 'CS4main'>
                                <div className='logo'>
                    <img src="../../img/bt_logo.png"/>
                </div>
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
                        <img className="GC2card" src="../../img/card_empty_yellow.png"/>
                    </div>
    
                    <div className="GC2insideYellow" > 
                        <div className='GC2personNameWhite'>
                            HAPPY<br></br>
                            UN-BIRTHDAY<br></br>
                            {/* {this.props.card.receive} */}
                            은빈!
                        </div>
                        <div className="GC2subTextWhite">
                            {/* From. {this.props.card.send} */}
                            From. 수수
                        </div>
                       </div>
                </div>
                <div className="CS4notice">뒷면 보기  </div>
                
                <div className='CS4complete'>
                    <img src="../../img/bt_copy_link.png" onClick={()=>this.handleCopyClipBoard('https://unbirthday.kr/cardreceive/'+this.state.cardNo)}/>
                </div>
            </div>
        )
    }
}
export default cardCompleteWhite;