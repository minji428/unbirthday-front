
import React, {Component} from 'react';
import '../../static/gotten/myCards.css';
import * as service from '../../service/service'

type UserInfo = {
	id: string,
	pw: string
} 

class MyCards extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {
            id: "",
            pw: "",
            cards: [],
        }
    }

    componentDidMount() {
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo")!);

        this.setState({
            id: userInfo.id,
            pw: userInfo.pw,
        })

        this.getCards(userInfo)
    }

    getCards = async(userInfo: UserInfo) => {
        service.anyService("/mypage1/cards", "get", this.getCardsCallBack, userInfo)
    }

    getCardsCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        if(rData.rtCode === "00" || rData.rtCode === "09") {
        } else {
            alert(rData.rtMsg)
        }
    }
  
    render() {
        return(
            <div className= 'MCmain'>
        <div className="MCstatus">
            <img className="MClogo" src="../img/logo.png"/>
            <div className="MCmainText">
                내 카드함
            </div>
        </div>

        <div className="MCtags">
            <div className="MCrow1">
                <div className="MCrowText1">
                    <div>받은 #태그</div>
                    <div className="MCsmall1">자세히 보기</div>
                </div>
                <div className="MCrowTag">
                    <div className="MCblue-Tag">#자꾸 보고 싶은</div>
                    <div className="MCblue-Tag">#자신감 있는</div>
                    <div className="MCblue-Tag">#어른스러운</div>
                </div>
            </div>
        </div>

        <div className="MCcards">
            <div className="MCrow2">
                <div className="MCrowText2">
                    <div>받은 카드</div>
                    <div className="MCsmall2">자세히 보기</div>
                </div>
                <div className="MCrowCard">
                    <img className="MCeachCard" src="../img/newwhite.png"/>
                    <img className="MCeachCard" src="../img/pink.png"/>
                    <img className="MCeachCard" src="../img/newwhite.png"/>
                </div>
            </div>
            
        </div>

        <div className="MCinfos">
            <div className="MCrowText2">
                내 정보
            </div>
            <div className="MCrowInfo">
                <div className="MCidpw">
                    <div className="MCname">아이디</div> 
                    <div className="MCuser">{this.state.id}</div>
                </div>
                <div className="MCidpw">
                    <div className="MCname">비밀 번호</div> 
                    <div className="MCuser">unbirthday123</div>
                </div>
                <div className="MCnoticeText">
                    <div className="MCnotices">로그아웃하기</div>
                    <div className="MCnotices">FAQ, 이런 기능은 없나요?</div>
                </div>
            </div>
            
        </div>

    </div>
        )
    }
}
export default MyCards;