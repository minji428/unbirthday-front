
import React, {Component} from 'react';
import { Slide, toast, ToastContainer } from "react-toastify";
import * as service from '../../service/service'
import '../../static/signInFin/signInFin1.css';
import '../../static/signInFin/signInFin3.css';
{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link> */}


class SignInFin1 extends React.Component<{}, any> {
    constructor(props: any){
        super(props)

        this.state = {

        }
    }
    componentDidMount(): void {
        if(sessionStorage.getItem('card') !== null) {
            let newTimerId = window.setInterval(() => {
                this.saveCard()
                sessionStorage.removeItem('card')
            }, 5000);
        }

    }

    toLogin = (event: any) => {
        window.location.href = "/login"
    }

    cardsend = (event: any) => {
        window.location.href = '/cardsend'
    }

    clickLogo(){
        window.location.href = 'https://unbirthday.kr'
    }

    saveCard = () => {
        //로그인된 상태라면 카드 저장
        if(sessionStorage.getItem("id") !== null) {
            const param = {
                card_no: sessionStorage.getItem('card'),
                receive_id : sessionStorage.getItem("id")
            }
            service.anyService("/card/save", "PATCH", this.saveCardCallBack, param)
        }

        //로그인이 안 된 상태라면
        // else {
        //     sessionStorage.setItem("card", this.props.card.card_no)
        //     window.location.href = '/login'
        // }
        
    }

    saveCardCallBack = (response: any) => {
        console.log(response)
        let rData = response.data

        //이미 저장된 카드면?
        if(rData.rtCode === "00") {
            toast("💌 카드가 저장됐어요. 내 카드함으로 가보실래요?", {
                position: 'top-center',
                closeButton: false,
                className: 'SF3alerts-toast',
                draggablePercent: 60,
                draggableDirection: 'y',
                autoClose: false,
                transition: Slide,
            })
        } else {
            alert(rData.rtMsg)
        }
    }

    render() {
        return(
            <div className= 'SF1main'>
                <ToastContainer 
                    onClick={this.toLogin}
                    limit={1}
                />
             <div className='logo signInFin-logo' onClick={this.clickLogo}>
                <img src="../../img/bt_logo.png"/>
            </div>
            <div className="SF1colors">
                <img className='SF1-1' src="../img/line1.png"/>
                <img className='SF1-2' src="../img/line2.png"/>
                <img className='SF1-3' src="../img/line3.png"/>
                <img className='SF1-4' src="../img/line4.png"/>
                <img className='SF1-5' src="../img/line5.png"/>
                <img className='SF1-6' src="../img/line6.png"/>
                <img className='SF1-7' src="../img/line7.png"/>
                <img className='SF1-8' src="../img/line8.png"/>
                {/* <img className="SF1color" src="../img/colors.png"/> */}
            </div>
            <div className="SF1texts">
                <div className="SF1mainText">
                     가입 완료
                </div>
                <div className="SF1subText">
                  당신의 매일이 <br></br>
                  생일처럼 빛날 거예요-!
                </div>
                <div className="SF2btnCombine" onClick={this.cardsend}>
                    <img src="../img/bt_send_card_blue.png"></img>
                </div>
            </div>
           <div className="SF1cakes">
                <img className="SF1cake" src="../img/blueCake.png"/>
           </div>
        </div>
        )
    }
}
export default SignInFin1;